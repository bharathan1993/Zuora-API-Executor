import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_paymentscheduleEndpoint: ApiEndpoint = {
  "id": "get-paymentschedule",
  "name": "Retrieve a payment schedule",
  "description": "Retrieves a payment schedule by payment schedule key.",
  "method": "GET",
  "path": "/v1/payment-schedules/{paymentScheduleKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentScheduleKey",
      "label": "Payment Schedule Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: paymentScheduleKey",
      "placeholder": "Enter payment schedule key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
