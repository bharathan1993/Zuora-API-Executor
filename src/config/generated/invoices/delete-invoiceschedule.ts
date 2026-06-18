import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_invoicescheduleEndpoint: ApiEndpoint = {
  "id": "delete-invoiceschedule",
  "name": "Delete an invoice schedule",
  "description": "Deletes an invoice schedule in Pending status. The status of the invoice",
  "method": "DELETE",
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
      "description": "The unique ID or number of the invoice schedule to be deleted. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001."
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
