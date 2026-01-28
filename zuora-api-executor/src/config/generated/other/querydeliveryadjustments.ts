import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querydeliveryadjustmentsEndpoint: ApiEndpoint = {
  "id": "querydeliveryadjustments",
  "name": "List delivery adjustments",
  "description": "Lists Delivery Adjustment objects. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/delivery-adjustments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
