import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_pauseinvoicescheduleEndpoint: ApiEndpoint = {
  "id": "put-pauseinvoiceschedule",
  "name": "Pause an invoice schedule",
  "description": "Pauses an invoice schedule immediately.",
  "method": "PUT",
  "path": "/v1/invoice-schedules/{scheduleKey}/pause",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "scheduleKey",
      "label": "Schedule Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or number of the schedule to be paused. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001."
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
