import type { Environment } from '../types/api';

interface EnvironmentSelectorProps {
  environments: Environment[];
  selectedEnvironmentId: string;
  onEnvironmentChange: (environmentId: string) => void;
}

export const EnvironmentSelector = ({
  environments,
  selectedEnvironmentId,
  onEnvironmentChange,
}: EnvironmentSelectorProps) => {
  const selectedEnv = environments.find((env) => env.id === selectedEnvironmentId);

  return (
    <div className="space-y-2">
      <label htmlFor="environment" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Environment
      </label>
      <select
        id="environment"
        value={selectedEnvironmentId}
        onChange={(e) => onEnvironmentChange(e.target.value)}
        className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zuora-500 focus:border-transparent text-slate-900 dark:text-white transition-colors duration-200"
      >
        {environments.map((env) => (
          <option key={env.id} value={env.id} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
            {env.name}
          </option>
        ))}
      </select>
      {selectedEnv && (
        <div className="mt-2">
          <p className="text-xs text-slate-500">Base URL:</p>
          <code className="text-xs bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 px-2 py-1 rounded block mt-1 break-all border border-slate-200 dark:border-slate-800 font-mono transition-colors duration-200">
            {selectedEnv.baseUrl}
          </code>
        </div>
      )}
    </div>
  );
};
