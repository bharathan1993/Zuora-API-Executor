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
      "description": "The unique ID or number of a payment schedule. For example, `8a90857b822459cd018224dcb9eb13be`, or `PS-00000007`."
    }
  ],
  "queryParams": [
    {
      "name": "nextPendingItems",
      "label": "Next Pending Items",
      "type": "number",
      "required": false,
      "description": "Number of next pending payment schedule items displayed in the response body."
    },
    {
      "name": "lastProcessedItems",
      "label": "Last Processed Items",
      "type": "number",
      "required": false,
      "description": "Number of the most recent processed payment schedule items dispalyed in the response body."
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
