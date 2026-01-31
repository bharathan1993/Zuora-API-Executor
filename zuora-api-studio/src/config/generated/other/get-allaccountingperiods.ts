import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allaccountingperiodsEndpoint: ApiEndpoint = {
  "id": "get-allaccountingperiods",
  "name": "List all accounting periods",
  "description": "Retrieves all accounting periods on your tenant.",
  "method": "GET",
  "path": "/v1/accounting-periods",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
