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
      <label htmlFor="environment" className="block text-sm font-medium text-gray-700">
        Environment
      </label>
      <select
        id="environment"
        value={selectedEnvironmentId}
        onChange={(e) => onEnvironmentChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        {environments.map((env) => (
          <option key={env.id} value={env.id}>
            {env.name}
          </option>
        ))}
      </select>
      {selectedEnv && (
        <div className="mt-2">
          <p className="text-xs text-gray-500">Base URL:</p>
          <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-1 break-all">
            {selectedEnv.baseUrl}
          </code>
        </div>
      )}
    </div>
  );
};
