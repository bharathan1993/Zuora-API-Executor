import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_filestatusEndpoint: ApiEndpoint = {
  "id": "get-filestatus",
  "name": "Retrieve file status",
  "description": "Retrieves the status of the file.",
  "method": "GET",
  "path": "/v1/files/{file-id}/status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "file-id",
      "label": "File Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: file-id",
      "placeholder": "Enter file id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
