import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryrateplanchargetiersEndpoint: ApiEndpoint = {
  "id": "queryrateplanchargetiers",
  "name": "List rate plan charge tiers",
  "description": "Lists Rate Plan Charge Tier objects. You can use the query parameters to filter, expand, and sort the returned results.",
  "method": "GET",
  "path": "/object-query/rate-plan-charge-tiers",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
