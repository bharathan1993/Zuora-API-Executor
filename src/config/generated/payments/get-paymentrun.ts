import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentrunEndpoint: ApiEndpoint = {
  "id": "get-paymentrun",
  "name": "Retrieve a payment run",
  "description": "Retrives the information about a specific payment run.",
  "method": "GET",
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
      "description": "The unique ID of a payment run or the payment run number. For example, 402890245f097f39015f0f074a2e0566."
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
