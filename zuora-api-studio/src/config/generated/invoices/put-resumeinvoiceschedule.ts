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
      "description": "Path parameter: scheduleKey",
      "placeholder": "Enter schedule key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
