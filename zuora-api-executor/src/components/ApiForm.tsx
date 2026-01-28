import { useState, useEffect, useMemo } from 'react';
import type { ApiEndpoint, FieldDefinition } from '../types/api';
import { FormField } from './FormField';
import { FieldSection } from './FieldSection';
import { EnvironmentSelector } from './EnvironmentSelector';

interface ApiFormProps {
  endpoint: ApiEndpoint;
  onSubmit: (data: any, customHeaders?: Record<string, string>, pathParams?: Record<string, any>) => void;
  isLoading: boolean;
  formId?: string;
  showSubmit?: boolean;
  selectedEnvironmentId?: string;
  onEnvironmentChange?: (environmentId: string) => void;
  onFormDataChange?: (data: any) => void;
}

export const ApiForm = ({
  endpoint,
  onSubmit,
  isLoading,
  formId,
  showSubmit = true,
  selectedEnvironmentId,
  onEnvironmentChange,
  onFormDataChange
}: ApiFormProps) => {
  const [activeTab, setActiveTab] = useState<'body' | 'headers'>('body');
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [pathParams, setPathParams] = useState<Record<string, any>>({});
  const [customHeaders, setCustomHeaders] = useState<Array<{ key: string; value: string }>>([
    { key: '', value: '' },
  ]);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Notify parent of form data changes
  useEffect(() => {
    if (onFormDataChange) {
      onFormDataChange(formData);
    }
  }, [formData, onFormDataChange]);

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

    endpoint.bodyFields?.forEach((field) => {
      if (field.defaultValue !== undefined) {
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

    // Ensure all sections are initialized
    Object.keys(groupedFields.sections).forEach(section => {
        if (expandedSections[section] === undefined) {
             initExpanded[section] = section !== 'Additional Fields';
        }
    });

    setFormData(initData);
    setPathParams(initPathParams);
    setExpandedSections(initExpanded);
    setCustomHeaders([{ key: '', value: '' }]);
    setActiveTab('body');
  }, [endpoint]); // Note: relying on endpoint change to reset

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
    const headerPairs = customHeaders
      .filter((header) => header.key.trim() !== '')
      .reduce<Record<string, string>>((acc, header) => {
        acc[header.key.trim()] = header.value;
        return acc;
      }, {});

    onSubmit(
      formData,
      Object.keys(headerPairs).length > 0 ? headerPairs : undefined,
      Object.keys(pathParams).length > 0 ? pathParams : undefined
    );
  };

  const loadExample = () => {
    if (endpoint.exampleRequest) {
      setFormData(endpoint.exampleRequest);
    }
  };

  const clearForm = () => {
    setFormData({});
  };

  const formatDescription = (desc: string) => {
    if (!desc) return generateFallbackDescription();

    // Remove long "Note:" blocks and URLs often found in Zuora docs
    let cleaned = desc
      .split('**Note**:')[0]
      .split('**Important**:')[0]
      .split('For more information')[0]
      .split('See [')[0]
      .split('https://')[0]
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
      .trim();

    // If description is too short or starts with unhelpful text, generate fallback
    if (cleaned.length < 10 || cleaned.startsWith('This operation') || cleaned.startsWith('Use this')) {
      return generateFallbackDescription();
    }

    // Take only the first 1-2 sentences (up to 200 chars)
    const sentences = cleaned.split(/[.!?]+\s/);
    const firstSentences = sentences.slice(0, 2).join('. ');

    // If still too long, truncate at 200 characters
    if (firstSentences.length > 200) {
      return firstSentences.substring(0, 200).trim() + '...';
    }

    return firstSentences + (firstSentences.endsWith('.') ? '' : '.');
  };

  const generateFallbackDescription = () => {
    const method = endpoint.method;
    const pathParts = endpoint.path.split('/').filter(Boolean);
    const resource = pathParts[pathParts.length - 1]?.replace(/[{}]/g, '').replace(/-/g, ' ');

    // Generate description based on method and resource
    const actionMap: Record<string, string> = {
      GET: 'Retrieves',
      POST: 'Creates',
      PUT: 'Updates',
      DELETE: 'Deletes',
      PATCH: 'Partially updates',
    };

    const action = actionMap[method] || 'Manages';
    const resourceName = resource || 'resource';

    return `${action} ${resourceName} information in Zuora.`;
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm dark:shadow-xl dark:shadow-black/20 transition-colors duration-200">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">{endpoint.name}</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${
            endpoint.method === 'POST' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
            endpoint.method === 'GET' ? 'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-500/20' :
            endpoint.method === 'PUT' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' :
            endpoint.method === 'DELETE' ? 'bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-500/20' :
            'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
          }`}>
            {endpoint.method}
          </span>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{formatDescription(endpoint.description)}</p>

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

        {/* Path Parameters */}
        {endpoint.pathParams && endpoint.pathParams.length > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 rounded-lg border border-indigo-200 dark:border-indigo-500/30 transition-colors duration-200">
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 text-sm uppercase tracking-wider">
                Path Parameters
              </h4>
            </div>
            <div className="space-y-3">
              {endpoint.pathParams.map((param) => (
                <div key={param.name}>
                  <FormField
                    field={param}
                    value={pathParams[param.name]}
                    onChange={(value) => handlePathParamChange(param.name, value)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final URL */}
        {(() => {
          const selectedEnv = endpoint.environments?.find(env => env.id === selectedEnvironmentId);
          const baseUrl = selectedEnv?.baseUrl || endpoint.baseUrl;

          // Replace path parameters in the URL
          let finalPath = endpoint.path;
          if (endpoint.pathParams) {
            endpoint.pathParams.forEach((param) => {
              const value = pathParams[param.name] || `{${param.name}}`;
              finalPath = finalPath.replace(`{${param.name}}`, value);
            });
          }

          return (
            <div className="mb-6">
              <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Endpoint URL:</p>
              <code className="text-sm bg-slate-100 dark:bg-slate-950 text-indigo-600 dark:text-indigo-300 px-3 py-2 rounded-lg block break-all border border-slate-200 dark:border-slate-800 font-mono transition-colors duration-200">
                {baseUrl}{finalPath}
              </code>
            </div>
          );
        })()}

        {/* Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-800">
          <nav className="flex space-x-6">
            <button
              onClick={() => setActiveTab('body')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === 'body'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Request Body
            </button>
            <button
              onClick={() => setActiveTab('headers')}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${
                activeTab === 'headers'
                  ? 'border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              Headers
              {customHeaders.some(h => h.key.trim() !== '') && (
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              )}
            </button>
          </nav>
        </div>
      </div>

      <form id={formId} onSubmit={handleSubmit} className="space-y-6">
        
        {/* Body Tab */}
        <div className={activeTab === 'body' ? 'block' : 'hidden'}>
          {endpoint.bodyFields && endpoint.bodyFields.length > 0 ? (
            <div className="space-y-4">
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
                  {endpoint.exampleRequest && (
                    <button
                      type="button"
                      onClick={loadExample}
                      className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline transition-colors"
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
                  {groupedFields.required.map((field) => (
                    <FormField
                      key={field.name}
                      field={field}
                      value={formData[field.name]}
                      onChange={(value) => handleFieldChange(field.name, value)}
                      className={field.type === 'object' || field.type === 'textarea' ? 'col-span-1 md:col-span-2' : ''}
                    />
                  ))}
                </div>
              )}

              {/* Grouped Optional Fields */}
              {Object.entries(groupedFields.sections).map(([sectionName, fields]) => (
                <FieldSection
                  key={sectionName}
                  title={sectionName}
                  fields={fields}
                  formData={formData}
                  onFieldChange={handleFieldChange}
                  defaultExpanded={false}
                  isAdvanced={sectionName === 'Additional Fields'}
                  isExpanded={expandedSections[sectionName]}
                  onToggle={() => toggleSection(sectionName)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400 text-sm">
              No body parameters required for this request.
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
                onClick={() => setCustomHeaders([...customHeaders, { key: '', value: '' }])}
                className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline transition-colors"
              >
                + Add Header
              </button>
            </div>
            
            <div className="space-y-3">
              {customHeaders.map((header, index) => (
                <div key={`${header.key}-${index}`} className="flex gap-2 items-start">
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
                      className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
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
                      className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const next = customHeaders.filter((_, i) => i !== index);
                      setCustomHeaders(next.length ? next : [{ key: '', value: '' }]);
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

        {showSubmit && (
          <div className="flex space-x-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all transform active:scale-[0.99] ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Executing...' : 'Execute API'}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
