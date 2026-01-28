import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_uploadfileforcustomobjectbulkjobEndpoint: ApiEndpoint = {
  "id": "post-uploadfileforcustomobjectbulkjob",
  "name": "Upload a file for a custom object bulk job",
  "description": "Uploads a `.csv` file for a custom object bulk job to create or update custom object records. The job must be in `pending` status. Only one file is allowed per job. Each file supports only one type of operation, with an `id` column required for update operations. The job will start once the upload is finished.",
  "method": "POST",
  "path": "/objects/jobs/{id}/files",
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
