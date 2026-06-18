import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_scrubpaymentmethodsEndpoint: ApiEndpoint = {
  "id": "put-scrubpaymentmethods",
  "name": "Scrub a payment method",
  "description": "",
  "method": "PUT",
  "path": "/v1/payment-methods/{payment-method-id}/scrub",
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
      "description": "The ID of the payment method where you want to scrub the sensitive data."
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
