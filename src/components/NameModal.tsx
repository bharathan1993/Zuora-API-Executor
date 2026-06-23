import { useEffect, useRef, useState } from 'react';

interface NameModalProps {
  title: string;
  label?: string;
  initialValue?: string;
  confirmLabel?: string;
  destructive?: boolean;
  onConfirm: (value: string) => void;
  onCancel: () => void;
}

export const NameModal = ({
  title,
  label = 'Name',
  initialValue = '',
  confirmLabel = 'Save',
  destructive = false,
  onConfirm,
  onCancel,
}: NameModalProps) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus + select on open
    const t = setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 50);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onConfirm(trimmed);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onCancel}
      />
      {/* Dialog */}
      <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-fadeIn">
        <div className="px-6 pt-6 pb-5">
          <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-4">{title}</h3>
          <form onSubmit={handleSubmit}>
            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
              {label}
            </label>
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
              placeholder={`Enter ${label.toLowerCase()}…`}
            />
            <div className="flex items-center justify-end gap-2 mt-5">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!value.trim()}
                className={`px-4 py-2 text-sm font-semibold rounded-xl text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed ${
                  destructive
                    ? 'bg-rose-500 hover:bg-rose-600'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/25 hover:shadow-emerald-500/40'
                }`}
              >
                {confirmLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
