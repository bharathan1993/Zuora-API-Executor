import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_deletebillrunEndpoint: ApiEndpoint = {
  "id": "delete-deletebillrun",
  "name": "Delete a bill run",
  "description": "Deletes a bill run. You can only delete bill runs in `Canceled` or `Error` status. ",
  "method": "DELETE",
  "path": "/v1/bill-runs/{billRunId}",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
