import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_customobjectbulkjoberrorsEndpoint: ApiEndpoint = {
  "id": "get-customobjectbulkjoberrors",
  "name": "List all errors for a custom object bulk job",
  "description": "Lists all errors for a custom object bulk job.",
  "method": "GET",
  "path": "/objects/jobs/{id}/errors",
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
