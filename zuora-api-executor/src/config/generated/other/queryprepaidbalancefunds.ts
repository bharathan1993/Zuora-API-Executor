import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryprepaidbalancefundsEndpoint: ApiEndpoint = {
  "id": "queryprepaidbalancefunds",
  "name": "List prepaid balance funds",
  "description": "Lists prepaid balance funds. You can use the query parameters to filter, expand, and sort the returned results.  ",
  "method": "GET",
  "path": "/object-query/prepaid-balance-funds",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
