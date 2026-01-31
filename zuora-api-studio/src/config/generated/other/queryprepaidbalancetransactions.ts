import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryprepaidbalancetransactionsEndpoint: ApiEndpoint = {
  "id": "queryprepaidbalancetransactions",
  "name": "List prepaid balance transactions",
  "description": "Lists prepaid balance transactions. You can use the query parameters to filter, expand, and sort the returned results.  ",
  "method": "GET",
  "path": "/object-query/prepaid-balance-transactions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
