import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentrundataEndpoint: ApiEndpoint = {
  "id": "get-paymentrundata",
  "name": "Retrieve payment run data",
  "description": "Retrieves payment run data and the processing result with details, if the `data` field was specified in the Create payment run operation.",
  "method": "GET",
  "path": "/v1/payment-runs/{paymentRunKey}/data",
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
