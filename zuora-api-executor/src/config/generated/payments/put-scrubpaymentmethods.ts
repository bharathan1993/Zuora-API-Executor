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
      "description": "Path parameter: payment-method-id",
      "placeholder": "Enter payment method id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
