import { useState } from 'react';
import type { FieldDefinition } from '../types/api';
import { FormField } from './FormField';

interface FieldSectionProps {
  title: string;
  fields: FieldDefinition[];
  formData: Record<string, any>;
  onFieldChange: (fieldName: string, value: any) => void;
  defaultExpanded?: boolean;
  isAdvanced?: boolean;
}

export const FieldSection = ({
  title,
  fields,
  formData,
  onFieldChange,
  defaultExpanded = true,
  isAdvanced = false,
}: FieldSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  if (fields.length === 0) return null;

  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-t-lg transition-colors"
      >
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-700">{title}</span>
          {isAdvanced && (
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              Optional
            </span>
          )}
          <span className="text-sm text-gray-500">
            ({fields.length} field{fields.length !== 1 ? 's' : ''})
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isExpanded && (
        <div className="p-4 space-y-4">
          {fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={(value) => onFieldChange(field.name, value)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
