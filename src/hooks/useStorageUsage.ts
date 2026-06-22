import { useState, useCallback } from 'react';

export const STORAGE_KEYS = {
  formStatePrefix: 'zuora_form_',
  savedRequests: 'zuora_saved_requests',
  authToken: 'zuora_access_token',
  environment: 'zuora_environment',
  favorites: 'zuora_favorite_endpoints',
  recents: 'zuora_recent_endpoints',
};

const ASSUMED_QUOTA_BYTES = 5 * 1024 * 1024; // 5 MB

function byteSize(key: string, value: string) {
  return (key.length + value.length) * 2;
}

export interface StorageCategory {
  label: string;
  bytes: number;
  keys: string[];
}

export interface StorageSnapshot {
  totalBytes: number;
  quotaBytes: number;
  percentUsed: number;
  categories: {
    formStates: StorageCategory;
    savedRequests: StorageCategory;
    auth: StorageCategory;
    settings: StorageCategory;
    other: StorageCategory;
  };
}

function snapshot(): StorageSnapshot {
  const cats = {
    formStates: { label: 'Form states', bytes: 0, keys: [] as string[] },
    savedRequests: { label: 'Saved requests', bytes: 0, keys: [] as string[] },
    auth: { label: 'Authentication', bytes: 0, keys: [] as string[] },
    settings: { label: 'Settings', bytes: 0, keys: [] as string[] },
    other: { label: 'Other', bytes: 0, keys: [] as string[] },
  };

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) ?? '';
    const value = localStorage.getItem(key) ?? '';
    const bytes = byteSize(key, value);

    if (key.startsWith(STORAGE_KEYS.formStatePrefix)) {
      cats.formStates.bytes += bytes;
      cats.formStates.keys.push(key);
    } else if (key === STORAGE_KEYS.savedRequests) {
      cats.savedRequests.bytes += bytes;
      cats.savedRequests.keys.push(key);
    } else if (key === STORAGE_KEYS.authToken) {
      cats.auth.bytes += bytes;
      cats.auth.keys.push(key);
    } else if (
      key === STORAGE_KEYS.environment ||
      key === STORAGE_KEYS.favorites ||
      key === STORAGE_KEYS.recents
    ) {
      cats.settings.bytes += bytes;
      cats.settings.keys.push(key);
    } else {
      cats.other.bytes += bytes;
      cats.other.keys.push(key);
    }
  }

  const totalBytes = Object.values(cats).reduce((sum, c) => sum + c.bytes, 0);

  return {
    totalBytes,
    quotaBytes: ASSUMED_QUOTA_BYTES,
    percentUsed: totalBytes === 0 ? 0 : Math.min(100, Math.max(1, Math.round((totalBytes / ASSUMED_QUOTA_BYTES) * 100))),
    categories: cats,
  };
}

export function useStorageUsage() {
  const [usage, setUsage] = useState<StorageSnapshot>(() => snapshot());

  const refresh = useCallback(() => setUsage(snapshot()), []);

  const clearCategory = useCallback((keys: string[]) => {
    keys.forEach((k) => localStorage.removeItem(k));
    setUsage(snapshot());
  }, []);

  const clearAll = useCallback(() => {
    const zuoraKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) zuoraKeys.push(key);
    }
    zuoraKeys.forEach((k) => localStorage.removeItem(k));
    setUsage(snapshot());
  }, []);

  return { usage, refresh, clearCategory, clearAll };
}
