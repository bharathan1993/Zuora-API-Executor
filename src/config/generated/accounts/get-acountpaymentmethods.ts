import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_acountpaymentmethodsEndpoint: ApiEndpoint = {
  "id": "get-acountpaymentmethods",
  "name": "List payment methods of an account",
  "description": "Retrieves the payment methods of the specified customer account.",
  "method": "GET",
  "path": "/v1/accounts/{account-key}/payment-methods",
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
  "queryParams": [
    {
      "name": "isDefaultOnly",
      "label": "Is Default Only",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to only retrieve the default payment method of the account. The default value is `false`. If this parameter is set to `true`, only the default payment method is retrieved."
    },
    {
      "name": "isActiveOnly",
      "label": "Is Active Only",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to only retrieve the active payment methods of the account. The default value is `false`. If this parameter is set to `true`, only the active payment methods are retrieved."
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
