import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_cancelpaymentscheduleEndpoint: ApiEndpoint = {
  "id": "put-cancelpaymentschedule",
  "name": "Cancel a payment schedule",
  "description": "Cancels a payment schedule.",
  "method": "PUT",
  "path": "/v1/payment-schedules/{paymentScheduleKey}/cancel",
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
  "bodyFields": [
    {
      "name": "cancelDate",
      "label": "Cancel Date",
      "type": "date",
      "required": true,
      "description": "Specifies when the payment schedule will be canceled. **Note**: If there is no legitimate payment schedule item to cancel, the payment schedule cancel operation will be rejected.",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
