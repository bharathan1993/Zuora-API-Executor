import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querysubscriptionbykeyEndpoint: ApiEndpoint = {
  "id": "querysubscriptionbykey",
  "name": "Retrieve a subscription",
  "description": "Retrieve the details of a specific Subscription object.",
  "method": "GET",
  "path": "/object-query/subscriptions/{key}",
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
