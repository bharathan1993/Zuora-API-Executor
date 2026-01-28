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
      "description": "Path parameter: billRunId",
      "placeholder": "Enter bill run id"
    }
  ],
  "bodyFields": [
    {
      "name": "cancelOnce",
      "label": "Cancel Once",
      "type": "boolean",
      "required": false,
      "description": "Whether to cancel the current bill run or cancel all future recurring bill runs, only valid for a scheduled bill run.\n",
      "defaultValue": true,
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
