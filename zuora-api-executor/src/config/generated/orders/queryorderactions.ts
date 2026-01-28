import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryorderactionsEndpoint: ApiEndpoint = {
  "id": "queryorderactions",
  "name": "List order actions",
  "description": "Lists order actions. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/order-actions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
