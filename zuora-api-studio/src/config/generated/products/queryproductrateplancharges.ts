import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryproductrateplanchargesEndpoint: ApiEndpoint = {
  "id": "queryproductrateplancharges",
  "name": "List product rate plan charges",
  "description": "Lists Product Rate Plan Charge objects. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/product-rate-plan-charges",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
