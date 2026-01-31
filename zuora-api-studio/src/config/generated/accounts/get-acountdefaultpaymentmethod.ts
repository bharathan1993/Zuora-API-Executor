import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_acountdefaultpaymentmethodEndpoint: ApiEndpoint = {
  "id": "get-acountdefaultpaymentmethod",
  "name": "Retrieve the default payment method of an account",
  "description": "Retrieves the default payment method of the specified customer account.",
  "method": "GET",
  "path": "/v1/accounts/{account-key}/payment-methods/default",
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
