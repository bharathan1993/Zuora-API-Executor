/**
 * Main entry point for all Zuora API endpoints
 *
 * All endpoints are auto-generated from the OpenAPI specification.
 * To regenerate endpoints, run: yarn generate-endpoints
 */

import type { ApiEndpoint, FieldDefinition } from '../types/api';
import { postAccountEndpoint } from './accountsEndpoint';
import { zuoraEnvironments } from './environments';

// Import all auto-generated endpoints
export { zuoraEndpoints as generatedEndpoints } from './generated/index';

// Re-import for local use
import { zuoraEndpoints as generatedEndpoints } from './generated/index';

const standardHeaders = {
  'Content-Type': 'application/json',
  'Zuora-Track-Id': '',
  'Zuora-Entity-Ids': '',
  'Zuora-Org-Ids': '',
  'Zuora-Version': '',
};

const metadataEndpoints: ApiEndpoint[] = [
  {
    id: 'get-object-metadata',
    name: 'List available metadata objects',
    description: 'Returns available Zuora objects for the specified metadata context.',
    method: 'GET',
    path: '/object-metadata',
    baseUrl: 'https://rest.test.zuora.com',
    environments: zuoraEnvironments,
    requiresAuth: true,
    authType: 'bearer',
    queryParams: [
      {
        name: 'context',
        label: 'Context',
        type: 'string',
        required: true,
        enum: ['DQ', 'OQ'],
      },
    ],
    bodyFields: [],
    headers: standardHeaders,
  },
  {
    id: 'get-object-metadata-schema',
    name: 'Retrieve metadata object schema',
    description: 'Returns the complete JSON schema for the specified object and metadata context.',
    method: 'GET',
    path: '/object-metadata/{objectName}',
    baseUrl: 'https://rest.test.zuora.com',
    environments: zuoraEnvironments,
    requiresAuth: true,
    authType: 'bearer',
    pathParams: [
      {
        name: 'objectName',
        label: 'Object Name',
        type: 'string',
        required: true,
      },
    ],
    queryParams: [
      {
        name: 'context',
        label: 'Context',
        type: 'string',
        required: true,
        enum: ['DQ', 'OQ', 'DSE', 'AQUA'],
      },
    ],
    bodyFields: [],
    headers: standardHeaders,
  },
];

const overrides: ApiEndpoint[] = [
  postAccountEndpoint,
  ...metadataEndpoints,
];

const mergeFieldDescriptions = (
  targetFields: FieldDefinition[] | undefined,
  sourceFields: FieldDefinition[] | undefined,
): FieldDefinition[] | undefined => {
  if (!targetFields?.length) return targetFields;

  const sourceByName = new Map((sourceFields || []).map((field) => [field.name, field]));

  return targetFields.map((field) => {
    const sourceField = sourceByName.get(field.name);
    const merged: FieldDefinition = {
      ...field,
      description: field.description || sourceField?.description,
    };

    if (field.fields) {
      merged.fields = mergeFieldDescriptions(field.fields, sourceField?.fields);
    }

    if (field.itemFields) {
      merged.itemFields = mergeFieldDescriptions(field.itemFields, sourceField?.itemFields);
    }

    return merged;
  });
};

const mergeOverrides = (endpoints: ApiEndpoint[], overrideList: ApiEndpoint[]) => {
  const overrideMap = new Map(overrideList.map((endpoint) => [endpoint.id, endpoint]));
  const generatedById = new Map(endpoints.map((endpoint) => [endpoint.id, endpoint]));
  const generatedIds = new Set(endpoints.map((endpoint) => endpoint.id));

  const mergedEndpoints = endpoints.map((endpoint) => {
    const override = overrideMap.get(endpoint.id);
    if (!override) return endpoint;

    return {
      ...override,
      description: override.description || endpoint.description,
      bodyFields: mergeFieldDescriptions(override.bodyFields, endpoint.bodyFields),
      queryParams: mergeFieldDescriptions(override.queryParams, endpoint.queryParams),
      pathParams: mergeFieldDescriptions(override.pathParams, endpoint.pathParams),
    };
  });

  const additionalEndpoints = overrideList
    .filter((endpoint) => !generatedIds.has(endpoint.id))
    .map((endpoint) => {
      const generated = generatedById.get(endpoint.id);
      if (!generated) return endpoint;

      return {
        ...endpoint,
        description: endpoint.description || generated.description,
        bodyFields: mergeFieldDescriptions(endpoint.bodyFields, generated.bodyFields),
        queryParams: mergeFieldDescriptions(endpoint.queryParams, generated.queryParams),
        pathParams: mergeFieldDescriptions(endpoint.pathParams, generated.pathParams),
      };
    });

  return [...mergedEndpoints, ...additionalEndpoints];
};

export const zuoraEndpoints = mergeOverrides(generatedEndpoints, overrides);

const isGeneralPurposeOperationPath = (path: string): boolean => (
  path.includes('/v1/action/') ||
  path.includes('/settings/') ||
  path.includes('/v1/files/') ||
  path.includes('/v1/object/import') ||
  path.includes('/v1/custom-exchange-rates') ||
  path.includes('/v1/attachments') ||
  path.includes('/object-metadata') ||
  path.includes('/v1/describe/')
);

export interface EndpointGroup {
  id: string;
  label: string;
  endpoints: ApiEndpoint[];
}

const generalPurposeOperationGroups = [
  {
    id: 'actions',
    label: 'Actions',
    matches: (path: string) => path.includes('/v1/action/'),
  },
  {
    id: 'settings',
    label: 'Settings',
    matches: (path: string) => path.includes('/settings/'),
  },
  {
    id: 'files',
    label: 'Files',
    matches: (path: string) => path.includes('/v1/files/'),
  },
  {
    id: 'imports',
    label: 'Imports',
    matches: (path: string) => path.includes('/v1/object/import'),
  },
  {
    id: 'custom-exchange-rates',
    label: 'Custom Exchange Rates',
    matches: (path: string) => path.includes('/v1/custom-exchange-rates'),
  },
  {
    id: 'attachments',
    label: 'Attachments',
    matches: (path: string) => path.includes('/v1/attachments'),
  },
  {
    id: 'metadata',
    label: 'Metadata',
    matches: (path: string) => path.includes('/object-metadata'),
  },
  {
    id: 'describe',
    label: 'Describe',
    matches: (path: string) => path.includes('/v1/describe/'),
  },
];

export const getGeneralPurposeOperationGroups = (endpoints: ApiEndpoint[]): EndpointGroup[] => (
  generalPurposeOperationGroups
    .map((group) => ({
      id: group.id,
      label: group.label,
      endpoints: endpoints.filter((endpoint) => group.matches(endpoint.path.toLowerCase())),
    }))
    .filter((group) => group.endpoints.length > 0)
);

/**
 * Find an endpoint by its ID
 */
export const getEndpointById = (id: string): ApiEndpoint | undefined => {
  return zuoraEndpoints.find((endpoint) => endpoint.id === id);
};

/**
 * Get endpoints by category based on path patterns
 */
export const getEndpointsByCategory = (category: string): ApiEndpoint[] => {
  const categoryLower = category.toLowerCase();

  return zuoraEndpoints.filter((endpoint) => {
    const path = endpoint.path.toLowerCase();

    switch (categoryLower) {
      // ── Core billing objects ──────────────────────────────────────────
      case 'accounts':
        return path.includes('/accounts');
      case 'subscriptions':
        return path.includes('/subscription');
      case 'orders':
        return path.includes('/order');
      case 'invoices':
        return path.includes('/invoice');
      case 'payments':
        return path.includes('/payment');
      case 'products':
        return path.includes('/product') || path.includes('/catalog');
      case 'contacts':
        return path.includes('/contact');
      case 'credit-memos':
        return path.includes('/credit-memo');
      case 'debit-memos':
        return path.includes('/debit-memo');

      // ── Extended billing & finance ────────────────────────────────────
      case 'bill-runs':
        return path.includes('/bill-run');
      case 'refunds':
        return path.includes('/refund');
      case 'usage':
        return (
          path.includes('/usage') ||
          path.includes('/object-postimport') ||
          path.includes('/object-getusage') ||
          path.includes('/object-putusage') ||
          path.includes('/object-deleteusage')
        );
      case 'accounting':
        return path.includes('/accounting-code') || path.includes('/accounting-period');
      case 'journal-entries':
        return (
          path.includes('/journal-') ||
          path.includes('/summary-journal') ||
          path.includes('/journal-run')
        );
      case 'revenue':
        return (
          path.includes('/revenue-') ||
          path.includes('/revpro-') ||
          path.includes('/revenue_')
        );

      // ── Platform & integration ────────────────────────────────────────
      case 'general-purpose-operations':
        return isGeneralPurposeOperationPath(path);
      case 'workflows':
        return path.includes('/workflow');
      case 'data-queries':
        return (
          path.includes('/query/') ||
          path.includes('/batch-query') ||
          path.includes('/query-jobs') ||
          path.includes('/dataquery')
        );
      case 'custom-objects':
        return path.includes('/custom-object') || path.includes('/customobject') || path.includes('/objects/definitions') || path.includes('/objects/records');
      case 'fulfillments':
        return path.includes('/fulfillment');
      case 'attachments':
        return path.includes('/attachment');
      case 'notifications':
        return (
          path.includes('/notification') ||
          path.includes('/email-template') ||
          path.includes('/event-trigger') ||
          path.includes('/callout')
        );
      case 'settings':
        return path.includes('/setting') || path.includes('/sequence-set');

      default:
        return false;
    }
  });
};

/**
 * Get all available categories
 */
export const getAvailableCategories = (): string[] => {
  return [
    // Core billing objects
    'accounts',
    'subscriptions',
    'orders',
    'invoices',
    'payments',
    'products',
    'contacts',
    'credit-memos',
    'debit-memos',
    // Extended billing & finance
    'bill-runs',
    'refunds',
    'usage',
    'accounting',
    'journal-entries',
    'revenue',
    // Platform & integration
    'general-purpose-operations',
    'workflows',
    'data-queries',
    'custom-objects',
    'fulfillments',
    'attachments',
    'notifications',
    'settings',
  ];
};
