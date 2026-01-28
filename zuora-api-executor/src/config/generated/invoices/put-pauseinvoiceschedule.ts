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
      "description": "Path parameter: scheduleKey",
      "placeholder": "Enter schedule key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
