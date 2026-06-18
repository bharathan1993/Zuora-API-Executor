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
      "description": "Account number or account ID."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
