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
      "description": "Path parameter: paymentRunKey",
      "placeholder": "Enter payment run key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
