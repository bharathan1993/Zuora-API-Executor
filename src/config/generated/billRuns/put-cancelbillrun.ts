import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_cancelbillrunEndpoint: ApiEndpoint = {
  "id": "put-cancelbillrun",
  "name": "Cancel a bill run",
  "description": "Cancels a bill run in Draft status.",
  "method": "PUT",
  "path": "/v1/bill-runs/{billRunId}/cancel",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "billRunId",
      "label": "Bill Run Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of a bill run."
    }
  ],
  "bodyFields": [
    {
      "name": "cancelOnce",
      "label": "Cancel Once",
      "type": "boolean",
      "required": false,
      "description": "Whether to cancel the current bill run or cancel all future recurring bill runs, only valid for a scheduled bill run.",
      "defaultValue": true,
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
