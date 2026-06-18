import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_executeinvoicescheduleEndpoint: ApiEndpoint = {
  "id": "post-executeinvoiceschedule",
  "name": "Execute an invoice schedule",
  "description": "Executes an invoice schedule immediately. During the execution, a bill run is created and generates an invoice or a credit memo asynchronously.",
  "method": "POST",
  "path": "/v1/invoice-schedules/{scheduleKey}/execute",
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
      "description": "The unique ID or number of the schedule to be executed. For example, 2c92c8955bd63cc1015bd7c151af02ab or IS-0000001."
    }
  ],
  "bodyFields": [
    {
      "name": "scheduleItemId",
      "label": "Schedule Item Id",
      "type": "string",
      "required": false,
      "description": "The ID of the invoice schedule item to be executed. The item must be the earliest pending schedule item. If all the invoice schedule items have been processed and credit is needed to be generated, do not specify this field in the request.",
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
