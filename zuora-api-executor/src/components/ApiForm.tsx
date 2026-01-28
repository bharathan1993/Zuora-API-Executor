import { useState, useEffect, useMemo } from 'react';
import type { ApiEndpoint, FieldDefinition } from '../types/api';
import { FormField } from './FormField';
import { FieldSection } from './FieldSection';
import { EnvironmentSelector } from './EnvironmentSelector';

interface ApiFormProps {
  endpoint: ApiEndpoint;
  onSubmit: (data: any, customHeaders?: Record<string, string>) => void;
  isLoading: boolean;
  formId?: string;
  showSubmit?: boolean;
  selectedEnvironmentId?: string;
  onEnvironmentChange?: (environmentId: string) => void;
}

export const ApiForm = ({
  endpoint,
  onSubmit,
  isLoading,
  formId,
  showSubmit = true,
  selectedEnvironmentId,
  onEnvironmentChange
}: ApiFormProps) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [customHeadersEnabled, setCustomHeadersEnabled] = useState(false);
  const [customHeaders, setCustomHeaders] = useState<Array<{ key: string; value: string }>>([
    { key: '', value: '' },
  ]);

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
    endpoint.bodyFields?.forEach((field) => {
      if (field.defaultValue !== undefined) {
        initData[field.name] = field.defaultValue;
      }
    });
    setFormData(initData);
    setCustomHeadersEnabled(false);
    setCustomHeaders([{ key: '', value: '' }]);
  }, [endpoint]);

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const headerPairs = customHeadersEnabled
      ? customHeaders
          .filter((header) => header.key.trim() !== '')
          .reduce<Record<string, string>>((acc, header) => {
            acc[header.key.trim()] = header.value;
            return acc;
          }, {})
      : undefined;
    onSubmit(formData, headerPairs);
  };

  const loadExample = () => {
    if (endpoint.exampleRequest) {
      setFormData(endpoint.exampleRequest);
    }
  };

  const clearForm = () => {
    setFormData({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-800">{endpoint.name}</h2>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
            endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
            endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
            endpoint.method === 'DELETE' ? 'bg-red-100 text-red-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {endpoint.method}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{endpoint.description}</p>

        {/* Environment Selector */}
        {endpoint.environments && endpoint.environments.length > 0 && selectedEnvironmentId && onEnvironmentChange && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <EnvironmentSelector
              environments={endpoint.environments}
              selectedEnvironmentId={selectedEnvironmentId}
              onEnvironmentChange={onEnvironmentChange}
            />
          </div>
        )}

        {/* Final URL */}
        {(() => {
          const selectedEnv = endpoint.environments?.find(env => env.id === selectedEnvironmentId);
          const baseUrl = selectedEnv?.baseUrl || endpoint.baseUrl;
          return (
            <div className="mb-2">
              <p className="text-xs text-gray-500 mb-1">Endpoint URL:</p>
              <code className="text-sm bg-gray-100 px-3 py-1 rounded block break-all">
                {baseUrl}{endpoint.path}
              </code>
            </div>
          );
        })()}
      </div>

      <form id={formId} onSubmit={handleSubmit} className="space-y-6">
        {endpoint.bodyFields && endpoint.bodyFields.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Request Body</h3>
              <div className="space-x-2">
                {endpoint.exampleRequest && (
                  <button
                    type="button"
                    onClick={loadExample}
                    className="text-sm text-blue-600 hover:text-blue-800 underline"
                  >
                    Load Example
                  </button>
                )}
                <button
                  type="button"
                  onClick={clearForm}
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Required Fields */}
            {groupedFields.required.length > 0 && (
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-gray-700 flex items-center">
                  <span className="text-red-500 mr-1">*</span>
                  Required Fields
                </h4>
                {groupedFields.required.map((field) => (
                  <FormField
                    key={field.name}
                    field={field}
                    value={formData[field.name]}
                    onChange={(value) => handleFieldChange(field.name, value)}
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
              />
            ))}
          </div>
        )}

        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Custom Headers</h3>
              <p className="text-xs text-gray-500">Optional overrides or extra headers</p>
            </div>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={customHeadersEnabled}
                onChange={(e) => setCustomHeadersEnabled(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Enable</span>
            </label>
          </div>

          {customHeadersEnabled && (
            <div className="mt-4 space-y-3">
              {customHeaders.map((header, index) => (
                <div key={`${header.key}-${index}`} className="flex gap-2">
                  <input
                    type="text"
                    value={header.key}
                    onChange={(e) => {
                      const next = [...customHeaders];
                      next[index] = { ...next[index], key: e.target.value };
                      setCustomHeaders(next);
                    }}
                    placeholder="Header name"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input
                    type="text"
                    value={header.value}
                    onChange={(e) => {
                      const next = [...customHeaders];
                      next[index] = { ...next[index], value: e.target.value };
                      setCustomHeaders(next);
                    }}
                    placeholder="Header value"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const next = customHeaders.filter((_, i) => i !== index);
                      setCustomHeaders(next.length ? next : [{ key: '', value: '' }]);
                    }}
                    className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setCustomHeaders([...customHeaders, { key: '', value: '' }])}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Add header
              </button>
            </div>
          )}
        </div>

        {showSubmit && (
          <div className="flex space-x-4 pt-4 border-t">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
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
