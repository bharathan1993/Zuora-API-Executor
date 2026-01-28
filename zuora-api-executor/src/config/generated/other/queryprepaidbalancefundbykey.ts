import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryprepaidbalancefundbykeyEndpoint: ApiEndpoint = {
  "id": "queryprepaidbalancefundbykey",
  "name": "Retrieve a prepaid balance fund",
  "description": "Retrieve the details of a specific Prepaid Balance Fund object.",
  "method": "GET",
  "path": "/object-query/prepaid-balance-funds/{key}",
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
