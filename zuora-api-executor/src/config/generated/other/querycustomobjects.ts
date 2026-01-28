import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querycustomobjectsEndpoint: ApiEndpoint = {
  "id": "querycustomobjects",
  "name": "List custom object records",
  "description": "Lists custom object records. You can use the query parameters to filter, expand, and sort the returned results. ",
  "method": "GET",
  "path": "/object-query/{custom-object-name}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "custom-object-name",
      "label": "Custom Object Name",
      "type": "string",
      "required": true,
      "description": "Path parameter: custom-object-name",
      "placeholder": "Enter custom object name"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
