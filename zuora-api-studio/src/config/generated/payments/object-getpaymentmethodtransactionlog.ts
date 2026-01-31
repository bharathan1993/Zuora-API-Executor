import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getpaymentmethodtransactionlogEndpoint: ApiEndpoint = {
  "id": "object-getpaymentmethodtransactionlog",
  "name": "CRUD: Retrieve a payment method transaction log",
  "description": "Retrieves a Payment Method Transaction Log object.",
  "method": "GET",
  "path": "/v1/object/payment-method-transaction-log/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
