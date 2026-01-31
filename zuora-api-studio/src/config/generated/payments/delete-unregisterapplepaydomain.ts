import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_unregisterapplepaydomainEndpoint: ApiEndpoint = {
  "id": "delete-unregisterapplepaydomain",
  "name": "Unregister an Apple Pay domain",
  "description": "Use this operation to unregister a domain with Apple for Apple Pay button integration implemented through Zuora's JavaScript SDK.",
  "method": "DELETE",
  "path": "/v1/payment-methods/apple-pay/domains/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
