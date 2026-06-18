import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentmethodEndpoint: ApiEndpoint = {
  "id": "get-paymentmethod",
  "name": "Retrieve a payment method",
  "description": "Use this operation to get the detailed information of an electronic payment method. To retrieve information of both electronic and non-electronic payment methods, use the [Object Query](https://developer.zuora.com/v1-api-reference/api/operation/queryPaymentMethodByKey/) operation.",
  "method": "GET",
  "path": "/v1/payment-methods/{payment-method-id}",
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
      "description": "Unique ID of the payment method to update."
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
