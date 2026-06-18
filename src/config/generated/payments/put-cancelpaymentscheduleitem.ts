import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_cancelpaymentscheduleitemEndpoint: ApiEndpoint = {
  "id": "put-cancelpaymentscheduleitem",
  "name": "Cancel a payment schedule item",
  "description": "Cancels a payment schedule item by ID.",
  "method": "PUT",
  "path": "/v1/payment-schedule-items/{item-id}/cancel",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "item-id",
      "label": "Item Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of a payment schedule item."
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
