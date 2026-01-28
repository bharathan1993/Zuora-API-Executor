import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentscheduleitemEndpoint: ApiEndpoint = {
  "id": "get-paymentscheduleitem",
  "name": "Retrieve a payment schedule item",
  "description": "Retrieves a payment schedule item by ID.",
  "method": "GET",
  "path": "/v1/payment-schedule-items/{psi-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "psi-id",
      "label": "Psi Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: psi-id",
      "placeholder": "Enter psi id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
