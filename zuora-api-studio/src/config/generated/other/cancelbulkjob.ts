import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const cancelbulkjobEndpoint: ApiEndpoint = {
  "id": "cancelbulkjob",
  "name": "Cancel a bulk job",
  "description": "Cancels an existing bulk job.",
  "method": "POST",
  "path": "/bulk-data/bulk-jobs/{id}/cancellations",
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
