import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_fulfillmentEndpoint: ApiEndpoint = {
  "id": "delete-fulfillment",
  "name": "Delete a fulfillment",
  "description": "Deletes a specified fulfillment. A fulfillment can only be deleted when it is in the `Executing` state.",
  "method": "DELETE",
  "path": "/v1/fulfillments/{key}",
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
