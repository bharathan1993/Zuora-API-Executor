import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_resumeinvoicescheduleEndpoint: ApiEndpoint = {
  "id": "put-resumeinvoiceschedule",
  "name": "Resume an invoice schedule",
  "description": "Resumes an invoice schedule in Paused status immediately.",
  "method": "PUT",
  "path": "/v1/invoice-schedules/{scheduleKey}/resume",
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
      "description": "The unique ID or number of the schedule to be resumed. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001."
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
