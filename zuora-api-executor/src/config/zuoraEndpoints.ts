/**
 * Main entry point for all Zuora API endpoints
 *
 * All endpoints are auto-generated from the OpenAPI specification.
 * To regenerate endpoints, run: yarn generate-endpoints
 */

import type { ApiEndpoint } from '../types/api';
import { postAccountEndpoint } from './accountsEndpoint';

// Import all auto-generated endpoints
export { zuoraEndpoints as generatedEndpoints } from './generated/index';

// Re-import for local use
import { zuoraEndpoints as generatedEndpoints } from './generated/index';

const overrides: ApiEndpoint[] = [
  postAccountEndpoint,
];

const mergeOverrides = (endpoints: ApiEndpoint[], overrideList: ApiEndpoint[]) => {
  const overrideMap = new Map(overrideList.map((endpoint) => [endpoint.id, endpoint]));
  return endpoints.map((endpoint) => overrideMap.get(endpoint.id) ?? endpoint);
};

export const zuoraEndpoints = mergeOverrides(generatedEndpoints, overrides);

/**
 * Find an endpoint by its ID
 */
export const getEndpointById = (id: string): ApiEndpoint | undefined => {
  return zuoraEndpoints.find((endpoint) => endpoint.id === id);
};

/**
 * Get endpoints by category based on path patterns
 */
export const getEndpointsByCategory = (category: string): ApiEndpoint[] => {
  const categoryLower = category.toLowerCase();

  return zuoraEndpoints.filter((endpoint) => {
    const path = endpoint.path.toLowerCase();

    switch (categoryLower) {
      case 'accounts':
        return path.includes('/accounts');
      case 'subscriptions':
        return path.includes('/subscription');
      case 'orders':
        return path.includes('/order');
      case 'invoices':
        return path.includes('/invoice');
      case 'payments':
        return path.includes('/payment');
      case 'products':
        return path.includes('/product') || path.includes('/catalog');
      case 'contacts':
        return path.includes('/contact');
      case 'credit-memos':
        return path.includes('/credit-memo');
      case 'debit-memos':
        return path.includes('/debit-memo');
      default:
        return false;
    }
  });
};

/**
 * Get all available categories
 */
export const getAvailableCategories = (): string[] => {
  return [
    'accounts',
    'subscriptions',
    'orders',
    'invoices',
    'payments',
    'products',
    'contacts',
    'credit-memos',
    'debit-memos',
  ];
};
