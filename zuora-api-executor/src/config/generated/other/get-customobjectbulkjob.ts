import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_customobjectbulkjobEndpoint: ApiEndpoint = {
  "id": "get-customobjectbulkjob",
  "name": "Retrieve a custom object bulk job",
  "description": "Retrieves the custom object bulk job details by job ID.",
  "method": "GET",
  "path": "/objects/jobs/{id}",
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
