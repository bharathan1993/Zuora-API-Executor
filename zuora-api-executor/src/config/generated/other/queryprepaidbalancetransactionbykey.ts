import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryprepaidbalancetransactionbykeyEndpoint: ApiEndpoint = {
  "id": "queryprepaidbalancetransactionbykey",
  "name": "Retrieve a prepaid balance transaction",
  "description": "Retrieve the details of a Prepaid Balance Transaction object.",
  "method": "GET",
  "path": "/object-query/prepaid-balance-transactions/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
