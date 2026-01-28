import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentschedulestatisticEndpoint: ApiEndpoint = {
  "id": "get-paymentschedulestatistic",
  "name": "Retrieve payment schedule statistic of a date",
  "description": "Retrieves the payment schedule statistic of a specific date.",
  "method": "GET",
  "path": "/v1/payment-schedules/statistics/{yyyy-mm-dd}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "yyyy-mm-dd",
      "label": "Yyyy Mm Dd",
      "type": "string",
      "required": true,
      "description": "Path parameter: yyyy-mm-dd",
      "placeholder": "Enter yyyy mm dd"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
