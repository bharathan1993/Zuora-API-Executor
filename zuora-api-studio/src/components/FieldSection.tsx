import { useState, useEffect } from 'react';
import type { FieldDefinition } from '../types/api';
import { FormField } from './FormField';

interface FieldSectionProps {
  title: string;
  fields: FieldDefinition[];
  formData: Record<string, any>;
  onFieldChange: (fieldName: string, value: any) => void;
  onFieldTouched?: (path: string) => void;
  defaultExpanded?: boolean;
  isAdvanced?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export const FieldSection = ({
  title,
  fields,
  formData,
  onFieldChange,
  onFieldTouched,
  defaultExpanded = true,
  isAdvanced = false,
  isExpanded: controlledIsExpanded,
  onToggle,
}: FieldSectionProps) => {
  const [localIsExpanded, setLocalIsExpanded] = useState(defaultExpanded);

  const isExpanded = controlledIsExpanded !== undefined ? controlledIsExpanded : localIsExpanded;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setLocalIsExpanded(!localIsExpanded);
    }
  };

  if (fields.length === 0) return null;

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg mb-4 bg-slate-50 dark:bg-slate-800/30 overflow-hidden transition-colors duration-200">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full px-4 py-3 flex items-center justify-between bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-t-lg transition-colors border-b border-transparent hover:border-slate-200 dark:hover:border-slate-700"
      >
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-slate-700 dark:text-slate-200">{title}</span>
          {isAdvanced && (
            <span className="text-xs bg-zuora-50 dark:bg-zuora-500/20 text-zuora-600 dark:text-zuora-300 px-2 py-1 rounded border border-zuora-200 dark:border-zuora-500/30">
              Optional
            </span>
          )}
          <span className="text-sm text-slate-500">
            ({fields.length} field{fields.length !== 1 ? 's' : ''})
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${
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
        <div className="p-4 border-t border-slate-200 dark:border-slate-700/50 grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={(value) => onFieldChange(field.name, value)}
              onTouched={onFieldTouched}
              className={field.type === 'object' || field.type === 'array' || field.type === 'textarea' ? 'col-span-1 md:col-span-2' : ''}
            />
          ))}
        </div>
      )}
    </div>
  );
};
