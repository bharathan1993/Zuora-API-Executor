import { useState, useCallback } from 'react';
import type { CustomFieldDefinition, CustomFieldObjectType, TenantCustomFields } from '../types/api';

const storageKey = (tenantId: string) => `zuora_custom_fields_${tenantId}`;

function load(tenantId: string): TenantCustomFields {
  if (!tenantId) return {};
  try { return JSON.parse(localStorage.getItem(storageKey(tenantId)) || '{}'); } catch { return {}; }
}

function save(tenantId: string, fields: TenantCustomFields) {
  localStorage.setItem(storageKey(tenantId), JSON.stringify(fields));
}

export function useCustomFields(tenantId: string) {
  const [fields, setFields] = useState<TenantCustomFields>(() => load(tenantId));

  // Reload when tenant changes
  const reload = useCallback((id: string) => {
    setFields(load(id));
  }, []);

  const persist = useCallback((next: TenantCustomFields) => {
    setFields(next);
    save(tenantId, next);
  }, [tenantId]);

  const addField = useCallback((objectType: CustomFieldObjectType, field: Omit<CustomFieldDefinition, 'id'>) => {
    const existing = fields[objectType] ?? [];
    persist({ ...fields, [objectType]: [...existing, { ...field, id: crypto.randomUUID() }] });
  }, [fields, persist]);

  const editField = useCallback((objectType: CustomFieldObjectType, id: string, updates: Omit<CustomFieldDefinition, 'id'>) => {
    const existing = fields[objectType] ?? [];
    persist({ ...fields, [objectType]: existing.map(f => f.id === id ? { ...f, ...updates } : f) });
  }, [fields, persist]);

  const deleteField = useCallback((objectType: CustomFieldObjectType, id: string) => {
    const existing = fields[objectType] ?? [];
    const next = existing.filter(f => f.id !== id);
    const updated = { ...fields };
    if (next.length === 0) delete updated[objectType];
    else updated[objectType] = next;
    persist(updated);
  }, [fields, persist]);

  const getFieldsForObject = useCallback((objectType: CustomFieldObjectType): CustomFieldDefinition[] => {
    return fields[objectType] ?? [];
  }, [fields]);

  return { fields, reload, addField, editField, deleteField, getFieldsForObject };
}
