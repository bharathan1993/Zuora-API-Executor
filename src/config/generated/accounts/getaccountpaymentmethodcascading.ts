import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaccountpaymentmethodcascadingEndpoint: ApiEndpoint = {
  "id": "getaccountpaymentmethodcascading",
  "name": "Retrieve configuration of cascading payment methods for an account",
  "description": "Zuora provides the Cascading Payment Method feature to dynamically retry the failed payment with alternative payment methods according to a predefined priority list. Use this API operation to retrieve the configuration information for Cascading Payment Method of a specified account, including the cascading consent value and the priority list of payment methods.",
  "method": "GET",
  "path": "/v1/accounts/{account-key}/payment-methods/cascading",
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
      "description": "Account ID."
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
