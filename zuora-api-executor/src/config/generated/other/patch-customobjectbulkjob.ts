import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const patch_customobjectbulkjobEndpoint: ApiEndpoint = {
  "id": "patch-customobjectbulkjob",
  "name": "Cancel a custom object bulk job",
  "description": "Cancel a custom object bulk job. Note that you can cancel a custom object bulk job only if the job status is `accepted` or `pending`.",
  "method": "PATCH",
  "path": "/objects/jobs/{id}/cancel",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
