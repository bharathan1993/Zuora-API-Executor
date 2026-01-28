import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_invoicescheduleEndpoint: ApiEndpoint = {
  "id": "get-invoiceschedule",
  "name": "Retrieve an invoice schedule",
  "description": "Retrieves detailed information about an invoice schedule.",
  "method": "GET",
  "path": "/v1/invoice-schedules/{scheduleKey}",
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
