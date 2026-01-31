import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_filesEndpoint: ApiEndpoint = {
  "id": "get-files",
  "name": "Retrieve a file",
  "description": "Retrieve files such as export results, invoices, and accounting period reports.",
  "method": "GET",
  "path": "/v1/files/{file-id}",
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
