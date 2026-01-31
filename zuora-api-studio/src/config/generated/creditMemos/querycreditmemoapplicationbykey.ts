import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querycreditmemoapplicationbykeyEndpoint: ApiEndpoint = {
  "id": "querycreditmemoapplicationbykey",
  "name": "Retrieve a credit memo application",
  "description": "Retrieve the details of a specific Credit Memo Application object.",
  "method": "GET",
  "path": "/object-query/credit-memo-applications/{key}",
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
