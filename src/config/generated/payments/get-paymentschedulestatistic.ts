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
      "type": "date",
      "required": true,
      "description": "Specifies the date of the payment schedule statistic you want to view."
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
