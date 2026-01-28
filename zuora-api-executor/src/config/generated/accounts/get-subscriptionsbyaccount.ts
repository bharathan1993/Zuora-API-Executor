import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_subscriptionsbyaccountEndpoint: ApiEndpoint = {
  "id": "get-subscriptionsbyaccount",
  "name": "List subscriptions by account key",
  "description": "Retrieves all subscriptions associated with the specified account. Zuora only returns the latest version of the subscriptions.",
  "method": "GET",
  "path": "/v1/subscriptions/accounts/{account-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "account-key",
      "label": "Account Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: account-key",
      "placeholder": "Enter account key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
