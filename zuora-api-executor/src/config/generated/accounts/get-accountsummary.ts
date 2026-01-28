import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_accountsummaryEndpoint: ApiEndpoint = {
  "id": "get-accountsummary",
  "name": "Retrieve an account summary",
  "description": "Retrieves detailed information about the specified customer account.",
  "method": "GET",
  "path": "/v1/accounts/{account-key}/summary",
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
