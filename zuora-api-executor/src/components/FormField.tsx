import { useState, type ChangeEvent } from 'react';
import type { FieldDefinition } from '../types/api';

interface FormFieldProps {
  field: FieldDefinition;
  value: any;
  onChange: (value: any) => void;
  onTouched?: (path: string) => void;
  path?: string;
  className?: string;
}

export const FormField = ({ field, value, onChange, onTouched, path = '', className = '' }: FormFieldProps) => {

  const [isExpanded, setIsExpanded] = useState(field.required || false);

  const [showTooltip, setShowTooltip] = useState(false);

  const fieldPath = path ? `${path}.${field.name}` : field.name;

  const displayName = field.name;



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    let newValue: any = e.target.value;



    if (field.type === 'number') {

      newValue = e.target.value === '' ? '' : Number(e.target.value);

    } else if (field.type === 'boolean') {

      newValue = (e.target as HTMLInputElement).checked;

    }



    onTouched?.(fieldPath);
    onChange(newValue);

  };



  const LabelWithTooltip = ({ leftChild }: { leftChild?: React.ReactNode }) => (

    <div className="flex items-center gap-2 relative">

      {leftChild}

      <div className="flex items-center gap-1.5 flex-wrap">

        <label 

          htmlFor={field.type !== 'object' ? fieldPath : undefined}

          className={`block text-sm font-medium text-slate-700 dark:text-slate-300 ${field.type === 'object' ? 'cursor-pointer' : ''}`}

          onClick={field.type === 'object' ? () => setIsExpanded(!isExpanded) : undefined}

        >

          {displayName}

          {field.required && <span className="text-rose-500 ml-1">*</span>}

        </label>

        

        {field.description && (

          <div 

            className="relative flex items-center"

            onMouseEnter={() => setShowTooltip(true)}

            onMouseLeave={() => setShowTooltip(false)}

          >

            <svg 

              className="w-4 h-4 text-slate-400 hover:text-zuora-500 dark:text-slate-500 dark:hover:text-zuora-400 cursor-help transition-colors" 

              fill="none" 

              viewBox="0 0 24 24" 

              stroke="currentColor"

            >

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

            </svg>

            

            {showTooltip && (

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-slate-800 dark:bg-slate-700 text-white text-xs rounded-lg shadow-lg z-50 pointer-events-none">

                {field.description}

                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800 dark:border-t-slate-700"></div>

              </div>

            )}

          </div>

        )}

      </div>

    </div>

  );


  const renderArrayInput = () => {
    const items = Array.isArray(value) ? value : [];
    const itemType = field.itemType || 'string';

    const addItem = () => {
      const emptyValue =
        itemType === 'object' ? {} :
        itemType === 'number' ? 0 :
        itemType === 'boolean' ? false :
        '';
      onTouched?.(fieldPath);
      onChange([...items, emptyValue]);
    };

    const updateItem = (index: number, newValue: any) => {
      const next = [...items];
      next[index] = newValue;
      onTouched?.(`${fieldPath}[${index}]`);
      onChange(next);
    };

    const removeItem = (index: number) => {
      const next = items.filter((_, i) => i !== index);
      onTouched?.(fieldPath);
      onChange(next);
    };

    const renderPrimitiveInput = (itemValue: any, index: number) => {
      const baseClasses = "w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent text-slate-900 dark:text-white text-sm placeholder:text-xs placeholder-slate-400 dark:placeholder-slate-600 transition-colors duration-200";
      const onPrimitiveChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let newValue: any = e.target.value;
        if (itemType === 'number') {
          newValue = e.target.value === '' ? '' : Number(e.target.value);
        } else if (itemType === 'boolean') {
          newValue = (e.target as HTMLInputElement).checked;
        }
        onTouched?.(`${fieldPath}[${index}]`);
        updateItem(index, newValue);
      };

      if (itemType === 'boolean') {
        return (
          <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <input
              type="checkbox"
              checked={Boolean(itemValue)}
              onChange={onPrimitiveChange}
              className="w-4 h-4 text-zuora-600 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 rounded focus:ring-zuora-500 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-colors duration-200 cursor-pointer"
            />
            <span>Item {index + 1}</span>
          </label>
        );
      }

      if (field.itemEnum && field.itemEnum.length > 0) {
        return (
          <select
            value={itemValue ?? ''}
            onChange={onPrimitiveChange}
            className={baseClasses}
          >
            <option value="" className="bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400">Select value</option>
            {field.itemEnum.map((option) => (
              <option key={option} value={option} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                {option}
              </option>
            ))}
          </select>
        );
      }

      return (
        <input
          type={itemType === 'number' ? 'number' : 'text'}
          value={itemValue ?? ''}
          onChange={onPrimitiveChange}
          className={baseClasses}
          placeholder={`Item ${index + 1}`}
        />
      );
    };

    return (
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={`${fieldPath}-${index}`} className="relative border border-slate-200 dark:border-slate-800 rounded-lg p-3 bg-slate-50/50 dark:bg-slate-900/50 group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Item {index + 1}</span>
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-xs font-medium text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 transition-colors opacity-60 group-hover:opacity-100"
              >
                Remove
              </button>
            </div>
            {field.itemFields && field.itemFields.length > 0 ? (
              <div className="space-y-3">
                {field.itemFields.map((subField) => (
                  <FormField
                    key={`${fieldPath}-${subField.name}-${index}`}
                    field={subField}
                    value={item?.[subField.name]}
                    onChange={(subValue) => {
                      const nextItem = { ...(item || {}), [subField.name]: subValue };
                      updateItem(index, nextItem);
                    }}
                    onTouched={onTouched}
                    path={`${fieldPath}[${index}]`}
                  />
                ))}
              </div>
            ) : (
              renderPrimitiveInput(item, index)
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addItem}
          className="w-full py-2 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:border-zuora-500 hover:text-zuora-500 dark:hover:border-zuora-400 dark:hover:text-zuora-400 transition-all duration-200 flex items-center justify-center gap-2 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Item
        </button>
      </div>
    );
  };


  const renderInput = () => {

    const baseClasses = "w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent text-slate-900 dark:text-white text-sm placeholder:text-xs placeholder-slate-400 dark:placeholder-slate-600 transition-colors duration-200";



    switch (field.type) {

      case 'array':

        return renderArrayInput();

      case 'boolean':

        return null; // Handled in the main return for custom layout



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

          <div className="ml-2 space-y-4 border-l-2 border-slate-200 dark:border-slate-700 pl-2 transition-colors duration-200 mt-2">

            {field.fields?.map((subField) => (

              <FormField

                key={subField.name}

                field={subField}

                value={value?.[subField.name]}

                onChange={(subValue) => {

                  const newValue = { ...value, [subField.name]: subValue };

                  onChange(newValue);

                }}
                onTouched={onTouched}
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

      <div className={`space-y-1 ${className}`}>

        <div className="flex items-center justify-between">

          <LabelWithTooltip />

          <button

            type="button"

            onClick={() => setIsExpanded(!isExpanded)}

            className="text-slate-400 hover:text-zuora-500 transition-colors p-1"

          >

            <svg

              className={`w-4 h-4 transition-transform ${

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

        </div>

        {isExpanded && renderInput()}

      </div>

    );

  }



  if (field.type === 'boolean') {

    return (

      <div className={`flex items-center h-full py-2 ${className}`}>

        <LabelWithTooltip 

          leftChild={

            <input

              type="checkbox"

              id={fieldPath}

              checked={value === true}

              onChange={handleChange}

              aria-label={displayName}

              className="w-4 h-4 text-zuora-600 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 rounded focus:ring-zuora-500 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-colors duration-200 cursor-pointer"

            />

          } 

        />

      </div>

    );

  }



  return (

    <div className={`space-y-1 ${className}`}>

      <LabelWithTooltip />

      {renderInput()}

    </div>

  );

};
