import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getbankaccountbalanceEndpoint: ApiEndpoint = {
  "id": "getbankaccountbalance",
  "name": "Retrieve the balance of a bank account",
  "description": "Zuora supports Plaid's Auth and Balance products for ACH transactions. ",
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
      "description": "Path parameter: payment-method-id",
      "placeholder": "Enter payment method id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
