import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_paymentmethodsEndpoint: ApiEndpoint = {
  "id": "delete-paymentmethods",
  "name": "Delete a payment method",
  "description": "Deletes a credit card payment method.",
  "method": "DELETE",
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
      "description": "Unique identifier of a payment method. (Since this ID is unique, and linked to a customer account in the system, no customer identifier is needed.)"
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
