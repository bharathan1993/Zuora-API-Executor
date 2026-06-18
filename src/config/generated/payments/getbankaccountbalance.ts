import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getbankaccountbalanceEndpoint: ApiEndpoint = {
  "id": "getbankaccountbalance",
  "name": "Retrieve the balance of a bank account",
  "description": "Zuora supports Plaid's Auth and Balance products for ACH transactions.",
  "method": "GET",
  "path": "/v1/payment-methods/{payment-method-id}/balance",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of the payment method, such as `40289f3291d2587b0191d280fa20012g`."
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
