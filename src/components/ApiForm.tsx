import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import type { ApiEndpoint, ChainedValue, FieldDefinition } from '../types/api';
import { FormField } from './FormField';
import { FieldSection } from './FieldSection';
import { EnvironmentSelector } from './EnvironmentSelector';

interface ApiFormProps {
  endpoint: ApiEndpoint;
  onSubmit: (data: any, customHeaders?: Record<string, string>, pathParams?: Record<string, any>, queryParams?: Record<string, any>) => void;
  isLoading: boolean;
  formId?: string;
  showSubmit?: boolean;
  authToken?: string;
  useProxy?: boolean;
  selectedEnvironmentId?: string;
  onEnvironmentChange?: (environmentId: string) => void;
  onFormDataChange?: (data: any) => void;
  onHeadersChange?: (headers?: Record<string, string>) => void;
  onPathParamsChange?: (pathParams?: Record<string, any>) => void;
  onQueryParamsChange?: (queryParams?: Record<string, any>) => void;
  onJsonModeChange?: (isJsonMode: boolean) => void;
  prefillData?: Record<string, any>;
  prefillQueryParams?: Record<string, any>;
  prefillHeaders?: Record<string, string>;
  prefillPathParams?: Record<string, any>;
  prefillId?: string;
  chainedValues?: ChainedValue[];
}

type HeaderRow = {
  id: string;
  key: string;
  value: string;
};

type FieldReferenceEntry = FieldDefinition & {
  path: string;
};

type PathSegment = {
  key: string;
  isArray: boolean;
};

const pathToSegments = (path: string): PathSegment[] =>
  path.split('.').map((part) => {
    if (part.endsWith('[]')) {
      return { key: part.slice(0, -2), isArray: true };
    }
    return { key: part, isArray: false };
  });

const flattenBodyFieldsForReference = (
  fields: FieldDefinition[],
  prefix = '',
): FieldReferenceEntry[] => {
  const entries: FieldReferenceEntry[] = [];

  for (const field of fields) {
    const path = prefix ? `${prefix}.${field.name}` : field.name;

    if (field.type === 'object' && field.fields?.length) {
      entries.push({ ...field, path });
      entries.push(...flattenBodyFieldsForReference(field.fields, path));
      continue;
    }

    if (field.type === 'array') {
      const arrayPath = `${path}[]`;
      entries.push({ ...field, path: arrayPath });
      if (field.itemFields?.length) {
        entries.push(...flattenBodyFieldsForReference(field.itemFields, arrayPath));
      }
      continue;
    }

    entries.push({ ...field, path });
  }

  return entries;
};

const deepMergePayload = (
  target: Record<string, any>,
  source: Record<string, any>,
): Record<string, any> => {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    const sourceValue = source[key];
    const targetValue = result[key];

    if (
      sourceValue !== null &&
      typeof sourceValue === 'object' &&
      !Array.isArray(sourceValue) &&
      targetValue !== null &&
      typeof targetValue === 'object' &&
      !Array.isArray(targetValue)
    ) {
      result[key] = deepMergePayload(targetValue, sourceValue);
      continue;
    }

    if (
      Array.isArray(sourceValue) &&
      Array.isArray(targetValue) &&
      sourceValue.length > 0 &&
      targetValue.length > 0 &&
      typeof sourceValue[0] === 'object' &&
      sourceValue[0] !== null &&
      !Array.isArray(sourceValue[0]) &&
      typeof targetValue[0] === 'object' &&
      targetValue[0] !== null &&
      !Array.isArray(targetValue[0])
    ) {
      result[key] = [
        deepMergePayload(targetValue[0], sourceValue[0]),
        ...targetValue.slice(1),
      ];
      continue;
    }

    result[key] = sourceValue;
  }

  return result;
};

const buildJsonFragmentForPath = (
  path: string,
  getPlaceholder: (field: FieldDefinition) => any,
  field: FieldDefinition,
): Record<string, any> => {
  const segments = pathToSegments(path);
  let value = getPlaceholder(field);

  for (let index = segments.length - 1; index >= 0; index -= 1) {
    const segment = segments[index];
    value = segment.isArray
      ? { [segment.key]: Array.isArray(value) ? value : [value] }
      : { [segment.key]: value };
  }

  return value;
};

const placeCursorInJson = (
  textarea: HTMLTextAreaElement | null,
  path: string,
  field: FieldDefinition,
) => {
  if (!textarea) return;

  const text = textarea.value;
  const segments = pathToSegments(path);
  const keysToTry = [
    segments[segments.length - 1]?.key,
    ...segments.map((segment) => segment.key),
  ].filter((key): key is string => Boolean(key));

  let valueStart = -1;

  for (const key of keysToTry) {
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const matches = [...text.matchAll(new RegExp(`"${escapedKey}"\\s*:\\s*`, 'g'))];
    const lastMatch = matches[matches.length - 1];

    if (lastMatch?.index !== undefined) {
      valueStart = lastMatch.index + lastMatch[0].length;
      break;
    }
  }

  if (valueStart < 0) {
    textarea.focus();
    return;
  }

  const remainder = text.slice(valueStart);
  let cursor = valueStart;

  if (field.type === 'object' || remainder.startsWith('{')) {
    const nextLine = remainder.indexOf('\n');
    cursor = nextLine >= 0 ? valueStart + nextLine + 1 : valueStart + 1;
  } else if (field.type === 'array' || remainder.startsWith('[')) {
    if (remainder.startsWith('[]')) {
      cursor = valueStart + 1;
    } else if (remainder.startsWith('[\n')) {
      const objectBrace = remainder.indexOf('{');
      if (objectBrace >= 0) {
        const nextLine = remainder.indexOf('\n', objectBrace);
        cursor = valueStart + (nextLine >= 0 ? nextLine + 1 : objectBrace + 1);
      } else {
        cursor = valueStart + 1;
      }
    } else {
      cursor = valueStart + 1;
    }
  } else if (remainder.startsWith('"')) {
    cursor = valueStart + 1;
  }

  textarea.focus();
  textarea.setSelectionRange(cursor, cursor);
};

const createHeaderRow = (): HeaderRow => ({
  id: typeof crypto?.randomUUID === 'function'
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
  key: '',
  value: '',
});

export const ApiForm = ({
  endpoint,
  onSubmit,
  isLoading,
  formId,
  showSubmit = true,
  authToken,
  useProxy = false,
  selectedEnvironmentId,
  onEnvironmentChange,
  onFormDataChange,
  onHeadersChange,
  onPathParamsChange,
  onQueryParamsChange,
  onJsonModeChange,
  prefillData,
  prefillQueryParams,
  prefillHeaders,
  prefillPathParams,
  prefillId,
  chainedValues = []
}: ApiFormProps) => {
  const [activeTab, setActiveTab] = useState<'params' | 'body' | 'headers'>('params');
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [pathParams, setPathParams] = useState<Record<string, any>>({});
  const [queryParams, setQueryParams] = useState<Record<string, any>>({});
  const [customHeaders, setCustomHeaders] = useState<HeaderRow[]>([createHeaderRow()]);
  const [customBodyFields, setCustomBodyFields] = useState<Array<{ id: string; name: string; value: string }>>([]);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [jsonMode, setJsonMode] = useState(false);
  const [jsonText, setJsonText] = useState('');
  const [jsonError, setJsonError] = useState('');
  const [fieldRefOpen, setFieldRefOpen] = useState(true);
  const [fieldRefSearch, setFieldRefSearch] = useState('');
  const [insertedFieldPath, setInsertedFieldPath] = useState<string | null>(null);
  const [fieldSearch, setFieldSearch] = useState('');
  const [fieldFilter, setFieldFilter] = useState<'all' | 'required' | 'filled' | 'issues'>('all');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const touchedFieldsRef = useRef<Set<string>>(new Set());
  const jsonDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const jsonTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Group fields by section
  const groupedFields = useMemo(() => {
    const required: FieldDefinition[] = [];
    const sections: Record<string, FieldDefinition[]> = {};

    endpoint.bodyFields?.forEach((field) => {
      if (field.required && !field.section) {
        required.push(field);
      } else if (field.section) {
        if (!sections[field.section]) {
          sections[field.section] = [];
        }
        sections[field.section].push(field);
      } else {
        // Optional fields without section go to "Additional Fields"
        if (!sections['Additional Fields']) {
          sections['Additional Fields'] = [];
        }
        sections['Additional Fields'].push(field);
      }
    });

    return { required, sections };
  }, [endpoint]);

  useEffect(() => {
    // Initialize form with default values
    const initData: Record<string, any> = {};
    const initExpanded: Record<string, boolean> = {};
    const initPathParams: Record<string, any> = {};
    const initQueryParams: Record<string, any> = {};

    endpoint.bodyFields?.forEach((field) => {
      if (field.required && field.defaultValue !== undefined) {
        initData[field.name] = field.defaultValue;
      }
      if (field.section) {
        // Default collapse 'Additional Fields', expand others by default
        if (field.section === 'Additional Fields') {
          initExpanded[field.section] = false;
        } else {
          initExpanded[field.section] = true; // Or use false if you prefer default collapsed
        }
      }
    });

    // Initialize path parameters
    endpoint.pathParams?.forEach((param) => {
      initPathParams[param.name] = param.defaultValue || '';
    });

    endpoint.queryParams?.forEach((param) => {
      initQueryParams[param.name] = param.defaultValue ?? '';
    });

    // Ensure all sections are initialized
    Object.keys(groupedFields.sections).forEach(section => {
      if (expandedSections[section] === undefined) {
        initExpanded[section] = section !== 'Additional Fields';
      }
    });

    setFormData(initData);
    setPathParams(initPathParams);
    setQueryParams(initQueryParams);
    setExpandedSections(initExpanded);
    // Pre-populate token header for Revenue endpoints
    if (endpoint.product === 'revenue' && endpoint.authType === 'revenue-token') {
      const revenueToken = localStorage.getItem('zuora_revenue_token') ?? '';
      setCustomHeaders(revenueToken
        ? [{ id: Math.random().toString(36), key: 'token', value: revenueToken }]
        : [createHeaderRow()]
      );
    } else {
      setCustomHeaders([createHeaderRow()]);
    }
    setCustomBodyFields([]);
    setActiveTab('params');
    setJsonMode(false);
    setJsonText('');
    setJsonError('');
    onJsonModeChange?.(false);
    setFieldRefOpen(false);
    setFieldSearch('');
    setFieldFilter('all');
    setValidationErrors({});
    touchedFieldsRef.current = new Set();
  }, [endpoint]); // Note: relying on endpoint change to reset

  const markTouched = (path: string) => {
    touchedFieldsRef.current.add(path);
  };

  const markTouchedFromObject = (obj: Record<string, any>, prefix = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      if (Array.isArray(value)) {
        markTouched(path);
        value.forEach((item, index) => {
          const itemPath = `${path}[${index}]`;
          if (item && typeof item === 'object') {
            markTouchedFromObject(item, itemPath);
          } else {
            markTouched(itemPath);
          }
        });
        return;
      }
      if (value && typeof value === 'object') {
        markTouched(path);
        markTouchedFromObject(value, path);
        return;
      }
      markTouched(path);
    });
  };

  const hasTouched = (path: string) => {
    for (const touched of touchedFieldsRef.current) {
      if (touched === path || touched.startsWith(`${path}.`) || touched.startsWith(`${path}[`)) {
        return true;
      }
    }
    return false;
  };

  const isValueEmpty = (value: any) =>
    value === undefined || value === null || value === '';

  const buildRequestBody = () => {
    const buildFieldValue = (field: FieldDefinition, value: any, path: string): any => {
      if (!hasTouched(path)) {
        return undefined;
      }

      if (field.type === 'object') {
        const obj: Record<string, any> = {};
        field.fields?.forEach((subField) => {
          const subPath = `${path}.${subField.name}`;
          const subValue = buildFieldValue(subField, value?.[subField.name], subPath);
          if (subValue !== undefined) {
            obj[subField.name] = subValue;
          }
        });
        return Object.keys(obj).length ? obj : undefined;
      }

      if (field.type === 'array') {
        const items = Array.isArray(value) ? value : [];
        if (!items.length) return undefined;

        if (field.itemFields && field.itemFields.length > 0) {
          const mapped = items
            .map((item, index) => {
              const itemPath = `${path}[${index}]`;
              if (!hasTouched(itemPath)) return undefined;
              const obj: Record<string, any> = {};
              field.itemFields?.forEach((subField) => {
                const subPath = `${itemPath}.${subField.name}`;
                const subValue = buildFieldValue(subField, item?.[subField.name], subPath);
                if (subValue !== undefined) {
                  obj[subField.name] = subValue;
                }
              });
              return Object.keys(obj).length ? obj : undefined;
            })
            .filter((item) => item !== undefined);
          return mapped.length ? mapped : undefined;
        }

        const mapped = items
          .map((item, index) => {
            const itemPath = `${path}[${index}]`;
            if (!hasTouched(itemPath)) return undefined;
            return isValueEmpty(item) ? undefined : item;
          })
          .filter((item) => item !== undefined);

        return mapped.length ? mapped : undefined;
      }

      return isValueEmpty(value) ? undefined : value;
    };

    const result: Record<string, any> = {};
    endpoint.bodyFields?.forEach((field) => {
      const path = field.name;
      const value = buildFieldValue(field, formData[field.name], path);
      if (value !== undefined) {
        result[field.name] = value;
      }
    });
    if (endpoint.id === 'post-account' && result.autoPay === undefined) {
      result.autoPay = false;
    }
    // Merge manually added custom fields
    customBodyFields.forEach(({ name, value }) => {
      const trimmedName = name.trim();
      if (trimmedName) result[trimmedName] = value;
    });
    return result;
  };

  const headersToRows = (headers?: Record<string, string>) => {
    if (!headers) return [createHeaderRow()];
    const entries = Object.entries(headers).filter(([, value]) => value !== '');
    if (!entries.length) return [createHeaderRow()];
    return entries.map(([key, value]) => ({
      ...createHeaderRow(),
      key,
      value,
    }));
  };

  const previewData = useMemo(() => buildRequestBody(), [formData, endpoint, customBodyFields]);

  // Notify parent of filtered form data changes
  useEffect(() => {
    if (onFormDataChange) {
      onFormDataChange(previewData);
    }
  }, [previewData, onFormDataChange]);

  useEffect(() => {
    if (onHeadersChange) {
      const headerPairs = customHeaders
        .filter((header) => header.key.trim() !== '')
        .reduce<Record<string, string>>((acc, header) => {
          acc[header.key.trim()] = header.value;
          return acc;
        }, {});
      onHeadersChange(Object.keys(headerPairs).length ? headerPairs : undefined);
    }
  }, [customHeaders, onHeadersChange]);

  useEffect(() => {
    if (onPathParamsChange) {
      const hasAny = Object.values(pathParams).some((value) => value !== '' && value !== undefined && value !== null);
      onPathParamsChange(hasAny ? pathParams : undefined);
    }
  }, [pathParams, onPathParamsChange]);

  useEffect(() => {
    if (onQueryParamsChange) {
      const compact = Object.entries(queryParams).reduce<Record<string, any>>((acc, [key, value]) => {
        if (value === '' || value === undefined || value === null) return acc;
        if (Array.isArray(value) && value.length === 0) return acc;
        acc[key] = value;
        return acc;
      }, {});
      onQueryParamsChange(Object.keys(compact).length ? compact : undefined);
    }
  }, [queryParams, onQueryParamsChange]);

  useEffect(() => {
    if (!prefillId) return;
    if (prefillData) {
      setFormData(prefillData);
      touchedFieldsRef.current = new Set();
      markTouchedFromObject(prefillData);
    } else {
      setFormData({});
      touchedFieldsRef.current = new Set();
    }
    setCustomHeaders(headersToRows(prefillHeaders));
    setPathParams(prefillPathParams || {});
    setQueryParams(prefillQueryParams || {});
    setValidationErrors({});
  }, [prefillId]);

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handlePathParamChange = (paramName: string, value: any) => {
    setPathParams((prev) => ({
      ...prev,
      [paramName]: value,
    }));
  };

  const handleQueryParamChange = (paramName: string, value: any) => {
    setQueryParams((prev) => ({
      ...prev,
      [paramName]: value,
    }));
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const expandAll = () => {
    const allExpanded = Object.keys(groupedFields.sections).reduce((acc, section) => {
      acc[section] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedSections(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed = Object.keys(groupedFields.sections).reduce((acc, section) => {
      acc[section] = false;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedSections(allCollapsed);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateRequest();
    if (Object.keys(errors).length > 0) {
      return;
    }
    const dataForSubmit = buildRequestBody();
    const headerPairs = customHeaders
      .filter((header) => header.key.trim() !== '')
      .reduce<Record<string, string>>((acc, header) => {
        acc[header.key.trim()] = header.value;
        return acc;
      }, {});

    onSubmit(
      dataForSubmit,
      Object.keys(headerPairs).length > 0 ? headerPairs : undefined,
      Object.keys(pathParams).length > 0 ? pathParams : undefined,
      Object.keys(getCompactQueryParams()).length > 0 ? getCompactQueryParams() : undefined
    );
  };

  const loadExample = () => {
    if (endpoint.exampleRequest) {
      setFormData(endpoint.exampleRequest);
      touchedFieldsRef.current = new Set();
      markTouchedFromObject(endpoint.exampleRequest);
    }
  };

  const clearForm = () => {
    setFormData({});
    touchedFieldsRef.current = new Set();
  };

  const applyJsonToForm = useCallback((text: string) => {
    if (!text.trim()) return;
    try {
      const parsed = JSON.parse(text);
      if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
        setFormData(parsed);
        touchedFieldsRef.current = new Set();
        markTouchedFromObject(parsed);
      }
    } catch {
      // silently ignore on mode-switch
    }
  }, []);

  const getFieldPlaceholder = (field: FieldDefinition): any => {
    if (field.defaultValue !== undefined) return field.defaultValue;
    switch (field.type) {
      case 'string': return field.enum ? field.enum[0] : (field.placeholder ?? '');
      case 'number': return 0;
      case 'boolean': return false;
      case 'date': return 'YYYY-MM-DD';
      case 'email': return 'user@example.com';
      case 'textarea': return '';
      case 'array':
        if (field.itemFields?.length) {
          const item: Record<string, any> = {};
          field.itemFields.forEach(f => { item[f.name] = getFieldPlaceholder(f); });
          return [item];
        }
        return field.itemEnum?.length ? [field.itemEnum[0]] : [];
      case 'object':
        if (field.fields?.length) {
          const obj: Record<string, any> = {};
          field.fields.forEach(f => { obj[f.name] = getFieldPlaceholder(f); });
          return obj;
        }
        return {};
      default: return null;
    }
  };

  const generateJsonTemplate = (fields: FieldDefinition[]): Record<string, any> => {
    const required: Record<string, any> = {};
    const optional: Record<string, any> = {};
    fields.forEach(field => {
      if (field.required) {
        required[field.name] = getFieldPlaceholder(field);
      } else {
        optional[field.name] = null;
      }
    });
    return { ...required, ...optional };
  };

  const getSmartSampleValue = (field: FieldDefinition): any => {
    if (field.sampleValue !== undefined) return field.sampleValue;
    if (field.defaultValue !== undefined) return field.defaultValue;
    if (field.enum?.length) return field.enum[0];
    const n = field.name.toLowerCase();
    const today = new Date().toISOString().split('T')[0];
    if (field.type === 'date') return today;
    if (field.type === 'email') return 'contact@example.com';
    if (field.type === 'boolean') {
      if (n.includes('autorenew')) return true;
      return false;
    }
    if (field.type === 'number') {
      if (n.includes('billcycleday') || n.includes('cycleday')) return 1;
      if (n.includes('quantity') || n.includes('qty')) return 1;
      if (n.includes('price') || n.includes('amount') || n.includes('rate')) return 100;
      if (n.includes('term') && !n.includes('date')) return 12;
      if (n.includes('trial')) return 30;
      return 1;
    }
    if (field.type === 'string') {
      if (n.includes('currency')) return 'USD';
      if (n.includes('email')) return 'contact@example.com';
      if (n === 'firstname' || n.includes('firstname')) return 'John';
      if (n === 'lastname' || n.includes('lastname')) return 'Doe';
      if (n.includes('phone') || n.includes('fax')) return '+1-555-0100';
      if (n.includes('country')) return 'US';
      if (n.includes('state') || n.includes('province')) return 'CA';
      if (n.includes('city')) return 'San Francisco';
      if (n.includes('postalcode') || n.includes('zipcode') || n.includes('zip')) return '94107';
      if (n.includes('address') || n.includes('street')) return '123 Main St';
      if (n === 'name' || n.endsWith('name')) return 'Acme Corporation';
      if (n.includes('description') || n.includes('notes')) return 'Sample description';
      if (n.includes('date')) return today;
      if (n.includes('status')) return 'Active';
      if (n.includes('termtype')) return 'TERMED';
      if (n.includes('paymentterm')) return 'Due Upon Receipt';
      if (n.includes('key') && n.includes('account')) return 'A-00000001';
      if (n.includes('key') && n.includes('subscription')) return 'S-00000001';
      if (n.includes('key') && n.includes('product')) return 'P-00000001';
      return field.placeholder || '';
    }
    if (field.type === 'array') {
      if (field.itemFields?.length) {
        const item: Record<string, any> = {};
        field.itemFields.filter(f => f.required).forEach(f => { item[f.name] = getSmartSampleValue(f); });
        return [item];
      }
      return field.itemEnum?.length ? [field.itemEnum[0]] : [];
    }
    if (field.type === 'object') {
      if (field.fields?.length) {
        const obj: Record<string, any> = {};
        field.fields.filter(f => f.required).forEach(f => { obj[f.name] = getSmartSampleValue(f); });
        return obj;
      }
      return {};
    }
    return null;
  };

  const generateMinimumPayload = (fields: FieldDefinition[]): Record<string, any> => {
    const result: Record<string, any> = {};
    fields.forEach(field => {
      if (field.required) {
        result[field.name] = getSmartSampleValue(field);
      }
    });
    return result;
  };

  const CURATED_PAYLOADS: Record<string, Record<string, any>> = {
    'post-order': {
      orderDate: new Date().toISOString().split('T')[0],
      existingAccountNumber: 'A-00000001',
      subscriptions: [
        {
          orderActions: [
            {
              type: 'CreateSubscription',
              triggerDates: [
                { name: 'ContractEffective', triggerDate: new Date().toISOString().split('T')[0] },
                { name: 'ServiceActivation', triggerDate: new Date().toISOString().split('T')[0] },
                { name: 'CustomerAcceptance', triggerDate: new Date().toISOString().split('T')[0] },
              ],
              createSubscription: {
                terms: {
                  autoRenew: true,
                  initialTerm: { termType: 'TERMED', period: 12, periodType: 'Month', startDate: new Date().toISOString().split('T')[0] },
                  renewalSetting: 'RENEW_WITH_SPECIFIC_TERM',
                  renewalTerms: [{ period: 12, periodType: 'Month' }],
                },
                subscribeToRatePlans: [
                  {
                    productRatePlanId: '2c92c0f9620c0d330162176a8af62c0d',
                    chargeOverrides: [
                      {
                        productRatePlanChargeId: '2c92c0f9620c0d330162176a8b162c0e',
                        pricing: { recurringPerUnit: { listPrice: 49.99 } },
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
      processingOptions: {
        runBilling: true,
        collectPayment: false,
      },
    },
  };

  const loadMinimumPayload = () => {
    if (!endpoint.bodyFields?.length) return;
    if (CURATED_PAYLOADS[endpoint.id]) {
      const payload = CURATED_PAYLOADS[endpoint.id];
      setFormData(payload);
      touchedFieldsRef.current = new Set();
      markTouchedFromObject(payload);
      return;
    }
    const minimumPayload = generateMinimumPayload(endpoint.bodyFields);
    setFormData(minimumPayload);
    touchedFieldsRef.current = new Set();
    markTouchedFromObject(minimumPayload);
  };

  const switchToJsonMode = () => {
    const current = previewData;
    if (Object.keys(current).length) {
      setJsonText(JSON.stringify(current, null, 2));
    } else if (endpoint.exampleRequest) {
      setJsonText(JSON.stringify(endpoint.exampleRequest, null, 2));
      applyJsonToForm(JSON.stringify(endpoint.exampleRequest));
    } else if (endpoint.bodyFields?.length) {
      const template = generateJsonTemplate(endpoint.bodyFields);
      setJsonText(JSON.stringify(template, null, 2));
    } else {
      setJsonText('{}');
    }
    setJsonError('');
    setFieldRefOpen(true);
    setJsonMode(true);
    onJsonModeChange?.(true);
  };

  const switchToUiMode = () => {
    if (jsonDebounceRef.current) clearTimeout(jsonDebounceRef.current);
    applyJsonToForm(jsonText);
    setJsonMode(false);
    setJsonError('');
    setFieldRefSearch('');
    onJsonModeChange?.(false);
  };

  const handleJsonChange = (text: string) => {
    setJsonText(text);
    setJsonError('');
    if (jsonDebounceRef.current) clearTimeout(jsonDebounceRef.current);
    jsonDebounceRef.current = setTimeout(() => {
      if (!text.trim()) return;
      try {
        const parsed = JSON.parse(text);
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
          setJsonError('JSON must be an object { }');
          return;
        }
        setJsonError('');
        setFormData(parsed);
        touchedFieldsRef.current = new Set();
        markTouchedFromObject(parsed);
      } catch (e) {
        setJsonError((e as Error).message);
      }
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (jsonDebounceRef.current) clearTimeout(jsonDebounceRef.current);
    };
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        const form = formId ? document.getElementById(formId) as HTMLFormElement | null : null;
        form?.requestSubmit();
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, [formId]);

  const generateFallbackDescription = () => {
    // Curated descriptions for endpoints whose spec description is only a Note/feature-gate
    const curated: Record<string, string> = {
      'Create an order': 'Creates a new subscription order to process account and subscription changes.',
      'Create an order asynchronously': 'Initiates order creation as a background job and returns a job ID to poll for results.',
      'Preview an order': 'Generates a preview of an order to review charges and impacts before finalizing.',
      'Preview an order asynchronously': 'Initiates an asynchronous order preview and returns a job ID to poll for results.',
      'List orders': 'Retrieves a paginated list of orders in the tenant.',
      'Retrieve an order': 'Fetches full details of a specific order by order number.',
      'Update an order': 'Modifies the custom fields or description of an existing order.',
      'Delete an order': 'Removes a specified order from the system.',
      'Activate an order': 'Changes the status of a draft order to active, allowing it to be processed.',
      'Cancel an order': 'Cancels an active order, preventing further processing.',
      'Create a credit memo': 'Generates a credit memo to adjust a customer account balance.',
      'Create a credit memo from an invoice': 'Generates a credit memo based on a specified invoice.',
      'Create a credit memo from a charge': 'Generates a credit memo for a specific product rate plan charge.',
      'Retrieve a credit memo': 'Fetches the details of a specific credit memo by ID.',
      'Update a credit memo': 'Modifies the details of a draft credit memo.',
      'Delete a credit memo': 'Removes a draft credit memo from the system.',
      'List credit memos': 'Retrieves a paginated list of credit memos in the tenant.',
      'Apply a credit memo': 'Applies a posted credit memo to one or more invoices or debit memos.',
      'Unapply a credit memo': 'Removes the application of a credit memo from invoices or debit memos.',
      'Cancel a credit memo': 'Cancels a credit memo that is currently in draft status.',
      'Post a credit memo': 'Posts a draft credit memo, making it active and ready to apply.',
      'Reverse a credit memo': 'Reverses a posted credit memo by creating an offsetting debit memo.',
      'Email a credit memo': 'Sends a credit memo to the customer email address on record.',
      'Get a PDF file of a credit memo': 'Retrieves the PDF representation of a credit memo.',
      'Create a debit memo': 'Generates a debit memo to charge an amount to a customer account.',
      'Create a debit memo from an invoice': 'Generates a debit memo based on a specified invoice.',
      'Create a debit memo from a charge': 'Generates a debit memo for a specific product rate plan charge.',
      'Retrieve a debit memo': 'Fetches the details of a specific debit memo by ID.',
      'Update a debit memo': 'Modifies the details of a draft debit memo.',
      'Delete a debit memo': 'Removes a draft debit memo from the system.',
      'List debit memos': 'Retrieves a paginated list of debit memos in the tenant.',
      'Apply a debit memo': 'Applies a posted payment to a specified debit memo.',
      'Cancel a debit memo': 'Cancels a debit memo that is currently in draft status.',
      'Post a debit memo': 'Posts a draft debit memo, making it active.',
      'Email a debit memo': 'Sends a debit memo to the customer email address on record.',
      'Get a PDF file of a debit memo': 'Retrieves the PDF representation of a debit memo.',
      'Create a payment': 'Creates a new electronic or external payment against a customer account.',
      'Apply a payment': 'Applies a payment to one or more invoices or debit memos.',
      'Unapply a payment': 'Removes the application of a payment from invoices or debit memos.',
      'Transfer a payment': 'Transfers a payment from one invoice to another invoice.',
      'Cancel a payment': 'Cancels a payment that is currently in draft status.',
      'Refund a payment': 'Processes a refund for a specified payment back to the customer.',
      'Create a refund': 'Creates a standalone refund not tied to a specific payment.',
      'List invoice items of a credit memo': 'Lists all line items of a specified credit memo.',
      'List items of a debit memo': 'Lists all line items of a specified debit memo.',
    };

    if (curated[endpoint.name]) return curated[endpoint.name];

    // Derive from endpoint name — already human-readable ("Create an order" → "Creates an order in Zuora.")
    const verbMap: Record<string, string> = {
      'Create': 'Creates', 'List': 'Lists', 'Retrieve': 'Retrieves', 'Get': 'Gets',
      'Update': 'Updates', 'Delete': 'Deletes', 'Cancel': 'Cancels', 'Post': 'Posts',
      'Apply': 'Applies', 'Unapply': 'Removes the application of', 'Reverse': 'Reverses',
      'Transfer': 'Transfers', 'Refund': 'Processes a refund for', 'Preview': 'Generates a preview of',
      'Activate': 'Activates', 'Generate': 'Generates', 'Email': 'Emails',
      'Upload': 'Uploads', 'Download': 'Downloads', 'Run': 'Runs', 'Execute': 'Executes',
    };
    const words = endpoint.name.split(' ');
    const verb = verbMap[words[0]] || (words[0] + 's');
    const rest = words.slice(1).join(' ');
    if (rest) return `${verb} ${rest} in Zuora.`;

    // Last resort: path-based
    const pathParts = endpoint.path.split('/').filter(Boolean);
    const resource = pathParts[pathParts.length - 1]?.replace(/[{}]/g, '').replace(/-/g, ' ');
    const actionMap: Record<string, string> = { GET: 'Retrieves', POST: 'Creates', PUT: 'Updates', DELETE: 'Deletes', PATCH: 'Partially updates' };
    return `${actionMap[endpoint.method] || 'Manages'} ${resource || 'resource'} in Zuora.`;
  };

  const formatDescription = (desc: string) => {
    if (!desc) return generateFallbackDescription();

    // Strip **Note:** / **Note**: and **Important:** / **Important**: blocks (both colon positions)
    let cleaned = desc
      .replace(/\*\*Note:\*\*\s*/gi, '')
      .replace(/\*\*Note\*\*:\s*/gi, '')
      .replace(/\*\*Important:\*\*\s*/gi, '')
      .replace(/\*\*Important\*\*:\s*/gi, '')
      .split('For more information')[0]
      .split('See [')[0]
      .split('https://')[0]
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // strip markdown links (even with empty URL)
      .replace(/\*\*([^*]+)\*\*/g, '$1')        // strip bold markers
      .trim();

    // If only a feature-gate sentence remains, use fallback
    const lower = cleaned.toLowerCase();
    if (
      cleaned.length < 10 ||
      lower.startsWith('this operation is only available') ||
      lower.startsWith('this feature') ||
      lower.startsWith('only available') ||
      lower.startsWith('use this') ||
      lower.startsWith('this rest api')
    ) {
      return generateFallbackDescription();
    }

    // Take first 1-2 sentences, capped at 200 chars
    const sentences = cleaned.split(/[.!?]+\s/);
    const firstSentences = sentences.slice(0, 2).join('. ');
    if (firstSentences.length > 200) return firstSentences.substring(0, 200).trim() + '...';
    return firstSentences + (firstSentences.endsWith('.') ? '' : '.');
  };

  const hasValue = (value: any) => {
    if (Array.isArray(value)) return value.some((item) => !isValueEmpty(item));
    return !isValueEmpty(value);
  };

  const getCompactQueryParams = () =>
    Object.entries(queryParams).reduce<Record<string, any>>((acc, [key, value]) => {
      if (!hasValue(value)) return acc;
      acc[key] = value;
      return acc;
    }, {});

  const validateFieldValue = (field: FieldDefinition, value: any, location: string) => {
    if (field.required && !hasValue(value)) {
      return `${field.label || field.name} is required.`;
    }
    if (!hasValue(value)) return undefined;
    if (field.type === 'number' && typeof value !== 'number') {
      return `${field.label || field.name} must be a number.`;
    }
    if (field.minLength !== undefined && String(value).length < field.minLength) {
      return `${field.label || field.name} must be at least ${field.minLength} characters.`;
    }
    if (field.maxLength !== undefined && String(value).length > field.maxLength) {
      return `${field.label || field.name} must be ${field.maxLength} characters or fewer.`;
    }
    if (field.pattern) {
      try {
        if (!new RegExp(field.pattern).test(String(value))) {
          return `${field.label || field.name} does not match the expected format.`;
        }
      } catch {
        return undefined;
      }
    }
    if (field.enum?.length && !field.enum.includes(String(value))) {
      return `${field.label || field.name} must be one of the accepted values.`;
    }
    if (field.required && location === 'path' && String(value).includes('{')) {
      return `${field.label || field.name} must be resolved before running.`;
    }
    return undefined;
  };

  const validateRequest = () => {
    const errors: Record<string, string> = {};

    endpoint.pathParams?.forEach((field) => {
      const error = validateFieldValue(field, pathParams[field.name], 'path');
      if (error) errors[`path:${field.name}`] = error;
    });

    endpoint.queryParams?.forEach((field) => {
      const error = validateFieldValue(field, queryParams[field.name], 'query');
      if (error) errors[`query:${field.name}`] = error;
    });

    endpoint.bodyFields?.forEach((field) => {
      const value = formData[field.name];
      const error = validateFieldValue(field, value, 'body');
      if (error) errors[`body:${field.name}`] = error;
    });

    if (jsonMode && jsonError) {
      errors['body:json'] = jsonError;
    }

    setValidationErrors(errors);
    return errors;
  };

  const validationCount = Object.keys(validationErrors).length;
  const requiredInputCount =
    (endpoint.pathParams?.filter((field) => field.required).length || 0) +
    (endpoint.queryParams?.filter((field) => field.required).length || 0) +
    (endpoint.bodyFields?.filter((field) => field.required).length || 0);
  const filledInputCount =
    Object.values(pathParams).filter(hasValue).length +
    Object.values(queryParams).filter(hasValue).length +
    Object.keys(previewData).length;

  const buildFinalUrl = () => {
    const selectedEnv = endpoint.environments?.find(env => env.id === selectedEnvironmentId);
    const revenueHost = endpoint.product === 'revenue'
      ? (localStorage.getItem('zuora_revenue_host') || '').replace(/\/$/, '') || endpoint.baseUrl
      : null;
    const baseUrl = revenueHost ?? selectedEnv?.baseUrl ?? endpoint.baseUrl;
    let finalPath = endpoint.path;
    endpoint.pathParams?.forEach((param) => {
      const value = hasValue(pathParams[param.name]) ? encodeURIComponent(String(pathParams[param.name])) : `{${param.name}}`;
      finalPath = finalPath.replace(`{${param.name}}`, value);
    });
    const params = new URLSearchParams();
    Object.entries(getCompactQueryParams()).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, String(item)));
      } else {
        params.append(key, String(value));
      }
    });
    const query = params.toString();
    return `${baseUrl}${finalPath}${query ? `?${query}` : ''}`;
  };

  const filterFields = (fields: FieldDefinition[]) => {
    const query = fieldSearch.trim().toLowerCase();
    return fields.filter((field) => {
      const matchesSearch = !query || `${field.name} ${field.label || ''} ${field.description || ''}`.toLowerCase().includes(query);
      if (!matchesSearch) return false;
      if (fieldFilter === 'required') return field.required;
      if (fieldFilter === 'filled') return hasValue(formData[field.name]);
      if (fieldFilter === 'issues') return Boolean(validationErrors[`body:${field.name}`]);
      return true;
    });
  };

  const fieldReferenceEntries = useMemo(
    () => flattenBodyFieldsForReference(endpoint.bodyFields || []),
    [endpoint.bodyFields],
  );

  const filteredFieldReferenceEntries = useMemo(() => {
    const query = fieldRefSearch.trim().toLowerCase();
    if (!query) return fieldReferenceEntries;

    return fieldReferenceEntries.filter((field) =>
      `${field.path} ${field.label || ''} ${field.description || ''}`.toLowerCase().includes(query),
    );
  }, [fieldReferenceEntries, fieldRefSearch]);

  const insertFieldIntoJson = (field: FieldReferenceEntry) => {
    const fragment = buildJsonFragmentForPath(field.path, getFieldPlaceholder, field);

    let currentPayload: Record<string, any> = {};
    if (jsonText.trim()) {
      try {
        const parsed = JSON.parse(jsonText);
        if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
          currentPayload = parsed;
        }
      } catch {
        setJsonError('Fix JSON syntax before inserting fields.');
        return;
      }
    }

    const mergedPayload = deepMergePayload(currentPayload, fragment);
    const nextText = JSON.stringify(mergedPayload, null, 2);

    if (jsonDebounceRef.current) clearTimeout(jsonDebounceRef.current);
    setJsonText(nextText);
    setJsonError('');
    setFormData(mergedPayload);
    touchedFieldsRef.current = new Set();
    markTouchedFromObject(mergedPayload);
    setInsertedFieldPath(field.path);
    setTimeout(() => setInsertedFieldPath(null), 1500);

    requestAnimationFrame(() => {
      placeCursorInJson(jsonTextareaRef.current, field.path, field);
    });
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">

      <div className="mb-6">
        <div className="mb-4">
          <p className="text-slate-600 dark:text-slate-400 mb-3">{formatDescription(endpoint.description)}</p>
          <code className="text-xs bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 px-2 py-1 rounded border border-slate-200 dark:border-slate-800 font-mono break-all">
            {endpoint.path}
          </code>
        </div>

        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Auth</div>
            {(() => {
              const isRevenue = endpoint.product === 'revenue';
              const hasToken = isRevenue
                ? (endpoint.authType === 'revenue-token' ? !!localStorage.getItem('zuora_revenue_token') : true)
                : !!authToken;
              return (
                <div className={`text-sm font-semibold ${hasToken ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                  {hasToken ? 'Token ready' : 'Needs token'}
                </div>
              );
            })()}
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Required</div>
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">{requiredInputCount} inputs</div>
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-3">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Progress</div>
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">{filledInputCount} filled</div>
          </div>
        </div>

        {validationCount > 0 && (
          <div className="mb-4 rounded-lg border border-rose-200 dark:border-rose-500/30 bg-rose-50 dark:bg-rose-500/10 p-3">
            <div className="text-sm font-semibold text-rose-700 dark:text-rose-300 mb-1">
              {validationCount} issue{validationCount === 1 ? '' : 's'} to fix before running
            </div>
            <ul className="space-y-1 text-xs text-rose-600 dark:text-rose-300">
              {Object.entries(validationErrors).slice(0, 5).map(([key, message]) => (
                <li key={key}>{message}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Environment Selector */}
        {endpoint.environments && endpoint.environments.length > 0 && selectedEnvironmentId && onEnvironmentChange && (
          <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors duration-200">
            <EnvironmentSelector
              environments={endpoint.environments}
              selectedEnvironmentId={selectedEnvironmentId}
              onEnvironmentChange={onEnvironmentChange}
            />
          </div>
        )}

        {/* Final URL */}
        <div className="mb-6">
          <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Live Request URL:</p>
          <code className="text-sm bg-slate-100 dark:bg-slate-950 text-zuora-600 dark:text-zuora-300 px-3 py-2 rounded-lg block break-all border border-slate-200 dark:border-slate-800 font-mono transition-colors duration-200">
            {buildFinalUrl()}
          </code>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Only filled optional query and body fields are sent.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 flex items-end justify-between">
          <nav className="flex space-x-6">
            <button
              type="button"
              onClick={() => setActiveTab('params')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'params'
                  ? 'border-zuora-600 dark:border-zuora-400 text-zuora-600 dark:text-zuora-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
            >
              Params
              {((endpoint.pathParams?.length || 0) + Object.keys(getCompactQueryParams()).length) > 0 && (
                <span className="ml-2 rounded-full bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 text-[10px]">
                  {(endpoint.pathParams?.length || 0) + Object.keys(getCompactQueryParams()).length}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('body')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'body'
                  ? 'border-zuora-600 dark:border-zuora-400 text-zuora-600 dark:text-zuora-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
            >
              Request Body
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('headers')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${activeTab === 'headers'
                  ? 'border-zuora-600 dark:border-zuora-400 text-zuora-600 dark:text-zuora-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
            >
              Headers
              {customHeaders.some(h => h.key.trim() !== '') && (
                <span className="w-2 h-2 rounded-full bg-zuora-500"></span>
              )}
            </button>
          </nav>

          {/* UI / JSON mode toggle — only visible on the body tab */}
          {activeTab === 'body' && endpoint.bodyFields && endpoint.bodyFields.length > 0 && (
            <div className="flex items-center mb-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5 gap-0.5">
              <button
                type="button"
                onClick={switchToUiMode}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${!jsonMode
                    ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10M4 18h6" />
                </svg>
                UI
              </button>
              <button
                type="button"
                onClick={switchToJsonMode}
                className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-all ${jsonMode
                    ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                JSON
              </button>
            </div>
          )}
        </div>
      </div>

      <form id={formId} onSubmit={handleSubmit} className="space-y-6">
        {/* Params Tab */}
        <div className={activeTab === 'params' ? 'block' : 'hidden'}>
          <div className="space-y-6">
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 p-4">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Path parameters</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Required values that replace placeholders in the endpoint path.
              </p>
              {endpoint.pathParams && endpoint.pathParams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {endpoint.pathParams.map((param) => (
                    <FormField
                      key={param.name}
                      field={param}
                      value={pathParams[param.name]}
                      onChange={(value) => handlePathParamChange(param.name, value)}
                      error={validationErrors[`path:${param.name}`]}
                      chainedValues={chainedValues}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-sm text-slate-500 dark:text-slate-400">This endpoint has no path parameters.</div>
              )}
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 p-4">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">Query parameters</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Filters, pagination, expansions, and other GET/list controls. Empty optional values are omitted.
              </p>
              {endpoint.queryParams && endpoint.queryParams.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {endpoint.queryParams.map((param) => (
                    <FormField
                      key={param.name}
                      field={param}
                      value={queryParams[param.name]}
                      onChange={(value) => handleQueryParamChange(param.name, value)}
                      error={validationErrors[`query:${param.name}`]}
                      className={param.type === 'array' || param.type === 'textarea' ? 'col-span-1 md:col-span-2' : ''}
                      chainedValues={chainedValues}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-sm text-slate-500 dark:text-slate-400">This endpoint has no query parameters.</div>
              )}
            </div>
          </div>
        </div>

        {/* Body Tab */}
        <div className={activeTab === 'body' ? 'block' : 'hidden'}>
          {endpoint.bodyFields && endpoint.bodyFields.length > 0 ? (
            jsonMode ? (
              /* ── JSON editor mode ── */
              <div className="flex h-[640px] rounded-xl border border-slate-700/60 overflow-hidden bg-[#0d1117] shadow-2xl shadow-black/40">

                {/* ── Left: JSON editor pane ── */}
                <div className="flex flex-col flex-1 min-w-0">

                  {/* Editor toolbar */}
                  <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-[#161b22] border-b border-slate-700/60 shrink-0">
                    {/* Left: file tab */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 bg-[#0d1117] border border-slate-700/60 rounded-md px-3 py-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400/80 shrink-0" />
                        <span className="text-xs font-mono font-medium text-slate-300">request.json</span>
                      </div>
                      <span className="text-[11px] text-slate-600 hidden sm:block">auto-syncs with form fields</span>
                    </div>

                    {/* Right: action buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {endpoint.exampleRequest && (
                        <button
                          type="button"
                          onClick={() => {
                            const text = JSON.stringify(endpoint.exampleRequest, null, 2);
                            setJsonText(text);
                            applyJsonToForm(JSON.stringify(endpoint.exampleRequest));
                          }}
                          className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-zuora-300 hover:border-zuora-500/50 hover:bg-zuora-500/10 hover:text-zuora-200 transition-all"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          Example
                        </button>
                      )}
                      {endpoint.bodyFields?.some((field) => field.required) && (
                        <button
                          type="button"
                          onClick={() => {
                            const minimumPayload = generateMinimumPayload(endpoint.bodyFields!);
                            const text = JSON.stringify(minimumPayload, null, 2);
                            setJsonText(text);
                            applyJsonToForm(text);
                          }}
                          className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-emerald-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
                        >
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Minimum
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => {
                          const template = generateJsonTemplate(endpoint.bodyFields!);
                          const text = JSON.stringify(template, null, 2);
                          setJsonText(text);
                          applyJsonToForm(JSON.stringify(template));
                        }}
                        className="flex items-center gap-1 rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-slate-400 hover:border-slate-600 hover:bg-slate-700/60 hover:text-slate-200 transition-all"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                        Reset
                      </button>
                      <div className="w-px h-4 bg-slate-700 mx-0.5" />
                      <button
                        type="button"
                        onClick={() => setFieldRefOpen((open) => !open)}
                        className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[11px] font-medium transition-all ${
                          fieldRefOpen
                            ? 'border-zuora-500/50 bg-zuora-500/15 text-zuora-200'
                            : 'border-slate-700 bg-slate-800/60 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                        }`}
                        aria-expanded={fieldRefOpen}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Fields
                        {!fieldRefOpen && (
                          <span className="ml-0.5 rounded-full bg-slate-700 px-1.5 py-0.5 text-[10px] font-bold text-slate-300">
                            {fieldReferenceEntries.length}
                          </span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Editor area with gutter */}
                  <div className="flex flex-1 min-h-0 overflow-hidden">
                    {/* Line number gutter */}
                    <div className="select-none w-12 shrink-0 bg-[#0d1117] border-r border-slate-800/60 overflow-hidden pt-4 pr-2 text-right">
                      {jsonText.split('\n').map((_, i) => (
                        <div key={i} className="text-[11px] leading-[1.625rem] text-slate-700 font-mono">{i + 1}</div>
                      ))}
                    </div>
                    {/* Textarea */}
                    <textarea
                      ref={jsonTextareaRef}
                      value={jsonText}
                      onChange={(e) => handleJsonChange(e.target.value)}
                      spellCheck={false}
                      className={`flex-1 w-full resize-none bg-transparent font-mono text-sm leading-[1.625rem] text-emerald-400 focus:outline-none p-4 overflow-auto ${
                        jsonError ? 'caret-rose-400' : 'caret-emerald-400'
                      }`}
                    />
                  </div>

                  {/* Status bar */}
                  <div className={`flex items-center gap-2 px-4 py-2 border-t text-[11px] font-mono shrink-0 ${
                    jsonError
                      ? 'border-rose-500/30 bg-rose-500/5'
                      : 'border-slate-800 bg-[#161b22]'
                  }`}>
                    {jsonError ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                        <span className="text-rose-400 truncate">{jsonError}</span>
                      </>
                    ) : jsonText.trim() ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="text-emerald-500/80">Valid JSON</span>
                        <span className="ml-auto text-slate-600">{jsonText.split('\n').length} lines</span>
                      </>
                    ) : (
                      <span className="text-slate-600">Empty — paste JSON or use a template above</span>
                    )}
                  </div>
                </div>

                {/* ── Right: Field reference sidebar ── */}
                <aside
                  className={`shrink-0 flex flex-col border-l border-slate-700/60 bg-[#161b22] transition-[width,opacity] duration-300 ease-out overflow-hidden ${
                    fieldRefOpen ? 'w-72 opacity-100' : 'w-0 opacity-0 pointer-events-none'
                  }`}
                  aria-hidden={!fieldRefOpen}
                >
                  {/* Sidebar header — sticky, never scrolls */}
                  <div className="shrink-0 px-3 pt-3 pb-2 border-b border-slate-700/60">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-zuora-500/15 text-zuora-400">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">Field Reference</p>
                          <p className="text-[10px] text-slate-500">{filteredFieldReferenceEntries.length} of {fieldReferenceEntries.length} fields</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFieldRefOpen(false)}
                        className="p-1 rounded-md text-slate-500 hover:text-slate-300 hover:bg-slate-700/60 transition-colors"
                        aria-label="Close field reference"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    {/* Search */}
                    <div className="relative">
                      <svg className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="search"
                        value={fieldRefSearch}
                        onChange={(event) => setFieldRefSearch(event.target.value)}
                        placeholder="Search fields…"
                        className="w-full rounded-lg border border-slate-700 bg-slate-800/60 py-1.5 pl-8 pr-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-zuora-500/60 focus:ring-1 focus:ring-zuora-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Scrollable field list — only this scrolls */}
                  <div className="flex-1 overflow-y-auto">
                    {filteredFieldReferenceEntries.length === 0 ? (
                      <div className="px-4 py-10 text-center">
                        <svg className="w-8 h-8 text-slate-700 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <p className="text-xs text-slate-600">No fields match</p>
                      </div>
                    ) : (
                      <div className="divide-y divide-slate-800/60">
                        {filteredFieldReferenceEntries.map((field) => {
                          const typeColors: Record<string, string> = {
                            string: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
                            number: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
                            boolean: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
                            object: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
                            array: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
                            email: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
                            date: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
                          };
                          const typeClass = typeColors[field.type] ?? 'text-slate-400 bg-slate-400/10 border-slate-400/20';
                          const isInserted = insertedFieldPath === field.path;
                          return (
                            <button
                              key={field.path}
                              type="button"
                              title="Click to insert into JSON"
                              onClick={() => insertFieldIntoJson(field)}
                              className={`group w-full px-3 py-2.5 text-left transition-all ${
                                isInserted
                                  ? 'bg-emerald-500/10'
                                  : 'hover:bg-zuora-500/8'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-1.5 mb-1">
                                <code className={`font-mono text-[11px] font-medium break-all leading-tight ${
                                  isInserted ? 'text-emerald-400' : 'text-zuora-300 group-hover:text-zuora-200'
                                }`}>
                                  {isInserted ? '✓ inserted' : field.path}
                                </code>
                                <div className="flex shrink-0 items-center gap-1">
                                  <span className={`rounded border px-1.5 py-0.5 text-[10px] font-medium ${typeClass}`}>
                                    {field.type}
                                  </span>
                                  {field.required && (
                                    <span className="rounded border border-rose-500/30 bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-rose-400">
                                      req
                                    </span>
                                  )}
                                </div>
                              </div>
                              {field.description && (
                                <p className="line-clamp-2 text-[11px] leading-relaxed text-slate-500 group-hover:text-slate-400 transition-colors">
                                  {field.description.split('**Note**')[0].split('.')[0].trim()}
                                </p>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Sidebar footer hint */}
                  <div className="shrink-0 px-3 py-2 border-t border-slate-700/60 bg-[#0d1117]">
                    <p className="text-[10px] text-slate-600 text-center">Click any field to insert it into JSON</p>
                  </div>
                </aside>

                {/* Collapsed fields tab */}
                {!fieldRefOpen && (
                  <button
                    type="button"
                    onClick={() => setFieldRefOpen(true)}
                    className="shrink-0 flex flex-col items-center justify-center gap-1.5 w-8 border-l border-slate-700/60 bg-[#161b22] text-slate-500 hover:text-zuora-300 hover:bg-zuora-500/5 transition-all"
                    aria-label="Open field reference"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-medium tracking-widest uppercase">Fields</span>
                  </button>
                )}
              </div>
            ) : (
              /* ── UI form mode ── */
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 p-3 space-y-3">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Payload navigator</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Search or narrow large request bodies by required, filled, or problematic fields.
                      </p>
                    </div>
                    <input
                      type="search"
                      value={fieldSearch}
                      onChange={(event) => setFieldSearch(event.target.value)}
                      placeholder="Search fields..."
                      className="w-full lg:w-72 px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ['all', 'All'],
                      ['required', 'Required only'],
                      ['filled', 'Fields with values'],
                      ['issues', 'Validation issues'],
                    ].map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setFieldFilter(value as typeof fieldFilter)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${fieldFilter === value
                            ? 'bg-zuora-50 dark:bg-zuora-500/10 text-zuora-700 dark:text-zuora-300 border-zuora-200 dark:border-zuora-500/30'
                            : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-700 dark:hover:text-slate-200'
                          }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                  <div className="space-x-2">
                    <button
                      type="button"
                      onClick={expandAll}
                      className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Expand All
                    </button>
                    <button
                      type="button"
                      onClick={collapseAll}
                      className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      Collapse All
                    </button>
                  </div>
                  <div className="space-x-4">
                    {endpoint.bodyFields?.some((field) => field.required) && (
                      <button
                        type="button"
                        onClick={loadMinimumPayload}
                        className="text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline transition-colors"
                      >
                        Minimum Payload
                      </button>
                    )}
                    {endpoint.exampleRequest && (
                      <button
                        type="button"
                        onClick={loadExample}
                        className="text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300 hover:underline transition-colors"
                      >
                        Load Example
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={clearForm}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 hover:underline transition-colors"
                    >
                      Clear Form
                    </button>
                  </div>
                </div>

                {/* Required Fields */}
                {groupedFields.required.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="col-span-1 md:col-span-2">
                      <h4 className="font-semibold text-slate-500 dark:text-slate-300 flex items-center text-xs uppercase tracking-wider">
                        <span className="text-rose-500 mr-1">*</span>
                        Required
                      </h4>
                    </div>
                    {filterFields(groupedFields.required).map((field) => (
                      <FormField
                        key={field.name}
                        field={field}
                        value={formData[field.name]}
                        onChange={(value) => handleFieldChange(field.name, value)}
                        onTouched={markTouched}
                        error={validationErrors[`body:${field.name}`]}
                        className={field.type === 'object' || field.type === 'array' || field.type === 'textarea' ? 'col-span-1 md:col-span-2' : ''}
                        chainedValues={chainedValues}
                      />
                    ))}
                  </div>
                )}

                {/* Grouped Optional Fields */}
                {Object.entries(groupedFields.sections).map(([sectionName, fields]) => (
                  <FieldSection
                    key={sectionName}
                    title={sectionName}
                    fields={filterFields(fields)}
                    formData={formData}
                    onFieldChange={handleFieldChange}
                    onFieldTouched={markTouched}
                    fieldErrors={Object.fromEntries(
                      fields.map((field) => [field.name, validationErrors[`body:${field.name}`]]).filter(([, error]) => Boolean(error))
                    )}
                    defaultExpanded={false}
                    isAdvanced={sectionName === 'Additional Fields'}
                    isExpanded={expandedSections[sectionName]}
                    onToggle={() => toggleSection(sectionName)}
                    chainedValues={chainedValues}
                  />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-sm">
              No body parameters required for this request.
            </div>
          )}

          {/* Custom Fields Section — always visible in body tab */}
          {activeTab === 'body' && !jsonMode && (
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-950/40 p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Custom Fields</span>
                  <span className="ml-2 text-[10px] text-slate-400 dark:text-slate-500">Tenant-specific fields (e.g. <span className="font-mono">MyField__c</span>)</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCustomBodyFields(prev => [...prev, { id: crypto.randomUUID(), name: '', value: '' }])}
                  className="flex items-center gap-1 text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add custom field
                </button>
              </div>

              {customBodyFields.length === 0 ? (
                <p className="text-xs text-slate-400 dark:text-slate-600 italic">
                  No custom fields added. Click "Add custom field" to include tenant-specific fields in the request.
                </p>
              ) : (
                <div className="space-y-2">
                  {customBodyFields.map((cf, index) => (
                    <div key={cf.id} className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={cf.name}
                        onChange={e => {
                          const next = [...customBodyFields];
                          next[index] = { ...next[index], name: e.target.value };
                          setCustomBodyFields(next);
                        }}
                        placeholder="FieldName__c"
                        className="w-2/5 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
                      />
                      <input
                        type="text"
                        value={cf.value}
                        onChange={e => {
                          const next = [...customBodyFields];
                          next[index] = { ...next[index], value: e.target.value };
                          setCustomBodyFields(next);
                        }}
                        placeholder="Value"
                        className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
                      />
                      <button
                        type="button"
                        onClick={() => setCustomBodyFields(prev => prev.filter(f => f.id !== cf.id))}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors shrink-0"
                        title="Remove field"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Headers Tab */}
        <div className={activeTab === 'headers' ? 'block' : 'hidden'}>
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Custom Headers</h3>
              <button
                type="button"
                onClick={() => setCustomHeaders([...customHeaders, createHeaderRow()])}
                className="text-xs font-medium text-zuora-600 dark:text-zuora-400 hover:text-zuora-700 dark:hover:text-zuora-300 hover:underline transition-colors"
              >
                + Add Header
              </button>
            </div>

            {/* Revenue token — pinned auto-injected row */}
            {endpoint.product === 'revenue' && endpoint.authType === 'revenue-token' && (() => {
              const tok = localStorage.getItem('zuora_revenue_token') ?? '';
              return (
                <div className={`rounded-xl border p-3 mb-1 ${tok ? 'bg-violet-50 dark:bg-violet-500/8 border-violet-200 dark:border-violet-500/25' : 'bg-amber-50 dark:bg-amber-500/8 border-amber-200 dark:border-amber-500/25'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${tok ? 'bg-violet-500' : 'bg-amber-500'}`} />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Auto-injected: <code className="font-mono">token</code> header
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const fresh = localStorage.getItem('zuora_revenue_token') ?? '';
                        if (fresh) {
                          setCustomHeaders(prev => {
                            const withoutToken = prev.filter(h => h.key.toLowerCase() !== 'token');
                            return [{ id: Math.random().toString(36), key: 'token', value: fresh }, ...withoutToken];
                          });
                        }
                      }}
                      className="text-xs text-violet-600 dark:text-violet-400 hover:underline"
                    >
                      ↺ Sync to headers
                    </button>
                  </div>
                  {tok ? (
                    <code className="block text-[11px] font-mono text-violet-700 dark:text-violet-300 bg-white dark:bg-slate-950 border border-violet-200 dark:border-violet-500/20 px-2 py-1.5 rounded-lg break-all leading-relaxed">
                      {tok.slice(0, 60)}{tok.length > 60 ? '…' : ''}
                    </code>
                  ) : (
                    <p className="text-xs text-amber-700 dark:text-amber-400">
                      No Revenue token saved. Go to <strong>Authentication → Revenue</strong> to generate one.
                    </p>
                  )}
                </div>
              );
            })()}

            <div className="space-y-3">
              {customHeaders.map((header, index) => (
                <div key={header.id} className="flex gap-2 items-start">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={header.key}
                      onChange={(e) => {
                        const next = [...customHeaders];
                        next[index] = { ...next[index], key: e.target.value };
                        setCustomHeaders(next);
                      }}
                      placeholder="Key"
                      className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={header.value}
                      onChange={(e) => {
                        const next = [...customHeaders];
                        next[index] = { ...next[index], value: e.target.value };
                        setCustomHeaders(next);
                      }}
                      placeholder="Value"
                      className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const next = customHeaders.filter((_, i) => i !== index);
                      setCustomHeaders(next.length ? next : [createHeaderRow()]);
                    }}
                    className="p-2 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                    aria-label="Remove header"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-500 mt-4">
              Note: Common headers like 'Content-Type' and 'Authorization' are added automatically.
            </p>
          </div>
        </div>


      </form>
    </div>
  );
};
