import { useState, type ChangeEvent } from 'react';
import type { FieldDefinition } from '../types/api';

interface FormFieldProps {
  field: FieldDefinition;
  value: any;
  onChange: (value: any) => void;
  path?: string;
}

export const FormField = ({ field, value, onChange, path = '' }: FormFieldProps) => {
  const [isExpanded, setIsExpanded] = useState(field.required || false);
  const fieldPath = path ? `${path}.${field.name}` : field.name;
  const displayName = field.name;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let newValue: any = e.target.value;

    if (field.type === 'number') {
      newValue = e.target.value === '' ? '' : Number(e.target.value);
    } else if (field.type === 'boolean') {
      newValue = (e.target as HTMLInputElement).checked;
    }

    onChange(newValue);
  };

  const renderInput = () => {
    const baseClasses = "w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-colors duration-200";

    switch (field.type) {
      case 'boolean':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              id={fieldPath}
              checked={value || false}
              onChange={handleChange}
              aria-label={displayName}
              className="w-4 h-4 text-indigo-600 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 rounded focus:ring-indigo-500 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-colors duration-200"
            />
          </div>
        );

      case 'email':
        return (
          <input
            type="email"
            id={fieldPath}
            value={value || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
            className={baseClasses}
          />
        );

      case 'number':
        return (
          <input
            type="number"
            id={fieldPath}
            value={value || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
            className={baseClasses}
          />
        );

      case 'date':
        return (
          <input
            type="date"
            id={fieldPath}
            value={value || ''}
            onChange={handleChange}
            required={field.required}
            className={baseClasses}
          />
        );

      case 'object':
        return (
          <div className="ml-4 space-y-4 border-l-2 border-slate-200 dark:border-slate-700 pl-4 transition-colors duration-200">
            {field.fields?.map((subField) => (
              <FormField
                key={subField.name}
                field={subField}
                value={value?.[subField.name]}
                onChange={(subValue) => {
                  const newValue = { ...value, [subField.name]: subValue };
                  onChange(newValue);
                }}
                path={fieldPath}
              />
            ))}
          </div>
        );

      case 'textarea':
        return (
          <textarea
            id={fieldPath}
            value={value || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
            rows={4}
            maxLength={field.maxLength}
            className={baseClasses}
          />
        );

      default:
        if (field.enum && field.enum.length > 0) {
          return (
            <select
              id={fieldPath}
              value={value || ''}
              onChange={handleChange}
              required={field.required}
              className={baseClasses}
            >
              <option value="" className="bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400">Select {displayName}</option>
              {field.enum.map((option) => (
                <option key={option} value={option} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                  {option}
                </option>
              ))}
            </select>
          );
        }

        if (field.maxLength && field.maxLength > 500) {
          return (
            <textarea
              id={fieldPath}
              value={value || ''}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              rows={4}
              maxLength={field.maxLength}
              className={baseClasses}
            />
          );
        }

        return (
          <input
            type="text"
            id={fieldPath}
            value={value || ''}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
            maxLength={field.maxLength}
            pattern={field.pattern}
            className={baseClasses}
          />
        );
    }
  };

  if (field.type === 'object') {
    return (
      <div className="space-y-2">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-left group"
        >
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer">
            {displayName}
            {field.required && <span className="text-rose-500 ml-1">*</span>}
          </label>
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform ${
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
        
        {field.description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{field.description}</p>
        )}
        
        {isExpanded && renderInput()}
      </div>
    );
  }

  if (field.type === 'boolean') {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          {displayName}
          {field.required && <span className="text-rose-500 ml-1">*</span>}
        </label>
        {field.description && (
          <p className="text-sm text-slate-500 dark:text-slate-400">{field.description}</p>
        )}
        {renderInput()}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label htmlFor={fieldPath} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {displayName}
        {field.required && <span className="text-rose-500 ml-1">*</span>}
      </label>
      {field.description && (
        <p className="text-sm text-slate-500 dark:text-slate-400">{field.description}</p>
      )}
      {renderInput()}
    </div>
  );
};
