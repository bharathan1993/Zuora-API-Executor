import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryrefundapplicationbykeyEndpoint: ApiEndpoint = {
  "id": "queryrefundapplicationbykey",
  "name": "Retrieve a refund application",
  "description": "Retrieve the details of a specific Refund Application object.",
  "method": "GET",
  "path": "/object-query/refund-applications/{key}",
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
