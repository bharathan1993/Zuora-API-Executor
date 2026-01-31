import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_filesEndpoint: ApiEndpoint = {
  "id": "put-files",
  "name": "Restore a file",
  "description": "Restores a previously archived file to its RESTORED status. Once a file is archived, it cannot be used directly until the file is restored using this API.",
  "method": "PUT",
  "path": "/v1/files/{file-id}/restore",
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
