import { useState, useEffect, useCallback } from 'react';
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

  // Reload whenever tenantId changes
  useEffect(() => {
    setFields(load(tenantId));
  }, [tenantId]);

  const reload = useCallback((id: string) => {
    setFields(load(id));
  }, []);

  const addField = useCallback((objectType: CustomFieldObjectType, field: Omit<CustomFieldDefinition, 'id'>) => {
    setFields(prev => {
      const existing = prev[objectType] ?? [];
      const next = { ...prev, [objectType]: [...existing, { ...field, id: crypto.randomUUID() }] };
      save(tenantId, next);
      return next;
    });
  }, [tenantId]);

  const editField = useCallback((objectType: CustomFieldObjectType, id: string, updates: Omit<CustomFieldDefinition, 'id'>) => {
    setFields(prev => {
      const existing = prev[objectType] ?? [];
      const next = { ...prev, [objectType]: existing.map(f => f.id === id ? { ...f, ...updates } : f) };
      save(tenantId, next);
      return next;
    });
  }, [tenantId]);

  const deleteField = useCallback((objectType: CustomFieldObjectType, id: string) => {
    setFields(prev => {
      const existing = prev[objectType] ?? [];
      const filtered = existing.filter(f => f.id !== id);
      const next = { ...prev };
      if (filtered.length === 0) delete next[objectType];
      else next[objectType] = filtered;
      save(tenantId, next);
      return next;
    });
  }, [tenantId]);

  const getFieldsForObject = useCallback((objectType: CustomFieldObjectType): CustomFieldDefinition[] => {
    return fields[objectType] ?? [];
  }, [fields]);

  return { fields, reload, addField, editField, deleteField, getFieldsForObject };
}
