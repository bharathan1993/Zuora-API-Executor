import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getreusableblocksEndpoint: ApiEndpoint = {
  "id": "getreusableblocks",
  "name": "List reusable blocks",
  "description": "Queries reusable blocks.",
  "method": "GET",
  "path": "/notifications/reusable-blocks",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
