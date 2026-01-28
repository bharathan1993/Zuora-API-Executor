import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_skippaymentscheduleitemEndpoint: ApiEndpoint = {
  "id": "put-skippaymentscheduleitem",
  "name": "Skip a payment schedule item",
  "description": "Skips a payment schedule item by ID. The skipped payment schedule item will turn to the `canceled` status, and a new item will be scheduled on the next recurring date after the last existing scheduled date.",
  "method": "PUT",
  "path": "/v1/payment-schedule-items/{item-id}/skip",
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
      "description": "Path parameter: item-id",
      "placeholder": "Enter item id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
