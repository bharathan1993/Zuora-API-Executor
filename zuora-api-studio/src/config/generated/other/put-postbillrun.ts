import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_postbillrunEndpoint: ApiEndpoint = {
  "id": "put-postbillrun",
  "name": "Post a bill run",
  "description": "Posts a bill run asynchronously. To post a bill run, the current bill run must be in `Completed` status.",
  "method": "PUT",
  "path": "/v1/bill-runs/{billRunId}/post",
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
      "name": "invoiceDate",
      "label": "Invoice Date",
      "type": "date",
      "required": true,
      "description": "The date that appears on the invoice being created, in `yyyy-mm-dd` format. \n\nThe value cannot fall in a closed accounting period.\n",
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
