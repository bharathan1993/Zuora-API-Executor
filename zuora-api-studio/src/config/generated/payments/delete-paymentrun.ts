import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_paymentrunEndpoint: ApiEndpoint = {
  "id": "delete-paymentrun",
  "name": "Delete a payment run",
  "description": "Deletes a payment run. Only payment runs with the Canceled or Error status can be deleted.",
  "method": "DELETE",
  "path": "/v1/payment-runs/{paymentRunKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentRunKey",
      "label": "Payment Run Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: paymentRunKey",
      "placeholder": "Enter payment run key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
