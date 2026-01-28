import type { ApiEndpoint } from '../types/api';
import { postAccountEndpoint } from './accountsEndpoint';

export const zuoraEndpoints: ApiEndpoint[] = [
  postAccountEndpoint,
  // Add more endpoints here
];

export const getEndpointById = (id: string): ApiEndpoint | undefined => {
  return zuoraEndpoints.find((endpoint) => endpoint.id === id);
};

export const getEndpointsByCategory = (category: string): ApiEndpoint[] => {
  // For future: group endpoints by category
  return zuoraEndpoints;
};
