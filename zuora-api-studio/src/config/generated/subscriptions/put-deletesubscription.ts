import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_deletesubscriptionEndpoint: ApiEndpoint = {
  "id": "put-deletesubscription",
  "name": "Delete a subscription by number",
  "description": "This REST API reference describes how to delete a subscription of the specified subscription number.",
  "method": "PUT",
  "path": "/v1/subscriptions/{subscription-key}/delete",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscription-key",
      "label": "Subscription Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: subscription-key",
      "placeholder": "Enter subscription key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
