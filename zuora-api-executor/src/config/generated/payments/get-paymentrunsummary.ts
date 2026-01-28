import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentrunsummaryEndpoint: ApiEndpoint = {
  "id": "get-paymentrunsummary",
  "name": "Retrieve a payment run summary",
  "description": "Retrives the summary of a payment run.",
  "method": "GET",
  "path": "/v1/payment-runs/{paymentRunKey}/summary",
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
