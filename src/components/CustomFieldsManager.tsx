import { useState } from 'react';
import { CUSTOM_FIELD_OBJECT_TYPES } from '../types/api';
import type { CustomFieldDefinition, CustomFieldObjectType } from '../types/api';
import { useCustomFields } from '../hooks/useCustomFields';

interface Props {
  tenantId: string;
  tenantName: string;
}

const FIELD_TYPES = ['string', 'number', 'boolean', 'date'] as const;
type FieldType = typeof FIELD_TYPES[number];

function FieldForm({
  initial,
  onSave,
  onCancel,
}: {
  initial?: Omit<CustomFieldDefinition, 'id'>;
  onSave: (f: Omit<CustomFieldDefinition, 'id'>) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? '');
  const [label, setLabel] = useState(initial?.label ?? '');
  const [type, setType] = useState<FieldType>((initial?.type as FieldType) ?? 'string');
  const [defaultValue, setDefaultValue] = useState(initial?.defaultValue ?? '');

  const nameValid = /^[A-Za-z][A-Za-z0-9_]*__c$/.test(name.trim());
  const valid = nameValid;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3 mt-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
            API Name <span className="text-rose-500">*</span>
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. PONumber__c"
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-zuora-500 font-mono"
          />
          {name && !nameValid && (
            <p className="text-[11px] text-rose-500 mt-1">Must end in __c, e.g. MyField__c</p>
          )}
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1">
            Display Label
          </label>
          <input
            value={label}
            onChange={e => setLabel(e.target.value)}
            placeholder="e.g. PO Number"
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-zuora-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1">Type</label>
          <select
            value={type}
            onChange={e => setType(e.target.value as FieldType)}
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zuora-500"
          >
            {FIELD_TYPES.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1">Default Value</label>
          <input
            value={defaultValue}
            onChange={e => setDefaultValue(e.target.value)}
            placeholder="Optional"
            className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-zuora-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <button
          type="button"
          disabled={!valid}
          onClick={() => onSave({ name: name.trim(), label: label.trim(), type, defaultValue: defaultValue.trim() || undefined })}
          className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${valid ? 'bg-zuora-600 text-white hover:bg-zuora-500' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}
        >
          Save field
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-1.5 rounded-lg text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
          Cancel
        </button>
      </div>
    </div>
  );
}

function ObjectSection({
  objectType,
  fieldDefs,
  onAdd,
  onEdit,
  onDelete,
}: {
  objectType: CustomFieldObjectType;
  fieldDefs: CustomFieldDefinition[];
  onAdd: (f: Omit<CustomFieldDefinition, 'id'>) => void;
  onEdit: (id: string, f: Omit<CustomFieldDefinition, 'id'>) => void;
  onDelete: (id: string) => void;
}) {
  const [showAdd, setShowAdd] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-900">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-800 dark:text-white">{objectType}</span>
          {fieldDefs.length > 0 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-zuora-500/10 text-zuora-600 dark:text-zuora-400">
              {fieldDefs.length} field{fieldDefs.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={() => { setShowAdd(true); setEditingId(null); }}
          className="text-xs font-semibold text-zuora-600 dark:text-zuora-400 hover:text-zuora-500 transition-colors flex items-center gap-1"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add field
        </button>
      </div>

      {fieldDefs.length > 0 && (
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {fieldDefs.map(f => (
            <div key={f.id}>
              {editingId === f.id ? (
                <div className="px-4 py-3">
                  <FieldForm
                    initial={{ name: f.name, label: f.label, type: f.type, defaultValue: f.defaultValue }}
                    onSave={updates => { onEdit(f.id, updates); setEditingId(null); }}
                    onCancel={() => setEditingId(null)}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono text-zuora-600 dark:text-zuora-400 bg-zuora-500/8 px-2 py-0.5 rounded">
                        {f.name}
                      </code>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {f.type}
                      </span>
                    </div>
                    {f.label && <p className="text-sm text-slate-700 dark:text-slate-300 mt-0.5">{f.label}</p>}
                    {f.defaultValue && (
                      <p className="text-[11px] text-slate-400 mt-0.5">Default: {f.defaultValue}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setEditingId(f.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Edit"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    {deleteConfirm === f.id ? (
                      <>
                        <button type="button" onClick={() => { onDelete(f.id); setDeleteConfirm(null); }} className="text-[11px] font-semibold text-rose-600 px-2 py-1 rounded-lg bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-colors">
                          Confirm
                        </button>
                        <button type="button" onClick={() => setDeleteConfirm(null)} className="text-[11px] text-slate-400 px-1">✕</button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setDeleteConfirm(f.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-colors"
                        title="Delete"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {fieldDefs.length === 0 && !showAdd && (
        <div className="px-4 py-5 bg-white dark:bg-slate-900 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-600">No custom fields yet</p>
        </div>
      )}

      {showAdd && (
        <div className="px-4 pb-4 bg-white dark:bg-slate-900">
          <FieldForm
            onSave={f => { onAdd(f); setShowAdd(false); }}
            onCancel={() => setShowAdd(false)}
          />
        </div>
      )}
    </div>
  );
}

export function CustomFieldsManager({ tenantId, tenantName }: Props) {
  const { fields, addField, editField, deleteField } = useCustomFields(tenantId);
  const [search, setSearch] = useState('');

  const totalFields = Object.values(fields).reduce((sum, arr) => sum + (arr?.length ?? 0), 0);

  const filtered = search.trim()
    ? CUSTOM_FIELD_OBJECT_TYPES.filter(ot => {
        const defs = fields[ot] ?? [];
        return defs.some(f =>
          f.name.toLowerCase().includes(search.toLowerCase()) ||
          f.label.toLowerCase().includes(search.toLowerCase())
        );
      })
    : CUSTOM_FIELD_OBJECT_TYPES;

  if (!tenantId) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <p className="text-slate-600 dark:text-slate-400 font-medium">No active tenant</p>
        <p className="text-sm text-slate-400 dark:text-slate-600 mt-1">Select a tenant from the header dropdown first</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zuora-500/15 text-zuora-500 dark:text-zuora-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </span>
            Custom Fields
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Fields for <span className="font-medium text-slate-700 dark:text-slate-300">{tenantName}</span>
            {totalFields > 0 && <> · <span className="text-zuora-600 dark:text-zuora-400">{totalFields} field{totalFields !== 1 ? 's' : ''} registered</span></>}
          </p>
        </div>
      </div>

      {totalFields > 3 && (
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search fields…"
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-zuora-500"
          />
        </div>
      )}

      <div className="flex gap-3 p-4 bg-blue-50 dark:bg-blue-500/8 border border-blue-200 dark:border-blue-500/20 rounded-xl">
        <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm text-blue-700 dark:text-blue-300">
          Custom field API names must end in <code className="font-mono bg-blue-100 dark:bg-blue-500/20 px-1 rounded">__c</code> (e.g. <code className="font-mono bg-blue-100 dark:bg-blue-500/20 px-1 rounded">PONumber__c</code>). When you execute an API, these fields appear in the dropdown for the matching object type.
        </p>
      </div>

      <div className="space-y-3">
        {filtered.map(objectType => (
          <ObjectSection
            key={objectType}
            objectType={objectType}
            fieldDefs={fields[objectType] ?? []}
            onAdd={f => addField(objectType, f)}
            onEdit={(id, f) => editField(objectType, id, f)}
            onDelete={id => deleteField(objectType, id)}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-sm text-slate-400 py-8">No fields match "{search}"</p>
        )}
      </div>
    </div>
  );
}
