import type { ChangeEvent } from 'react';
import type { FieldDefinition } from '../types/api';

interface FormFieldProps {
  field: FieldDefinition;
  value: any;
  onChange: (value: any) => void;
  path?: string;
}

export const FormField = ({ field, value, onChange, path = '' }: FormFieldProps) => {
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
    const baseClasses = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

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
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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
          <div className="ml-4 space-y-4 border-l-2 border-gray-200 pl-4">
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
              <option value="">Select {displayName}</option>
              {field.enum.map((option) => (
                <option key={option} value={option}>
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
        <label className="block text-sm font-semibold text-gray-700">
          {displayName}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {field.description && (
          <p className="text-sm text-gray-500 mb-2">{field.description}</p>
        )}
        {renderInput()}
      </div>
    );
  }

  if (field.type === 'boolean') {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {displayName}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {field.description && (
          <p className="text-sm text-gray-500">{field.description}</p>
        )}
        {renderInput()}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label htmlFor={fieldPath} className="block text-sm font-medium text-gray-700">
        {displayName}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {field.description && field.type !== 'boolean' && (
        <p className="text-sm text-gray-500">{field.description}</p>
      )}
      {renderInput()}
    </div>
  );
};
