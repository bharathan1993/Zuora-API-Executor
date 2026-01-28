import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_accountEndpoint: ApiEndpoint = {
  "id": "get-account",
  "name": "Retrieve an account",
  "description": "Retrieves basic information about a customer account.",
  "method": "GET",
  "path": "/v1/accounts/{account-key}",
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
