import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querycustomobjectbykeyEndpoint: ApiEndpoint = {
  "id": "querycustomobjectbykey",
  "name": "Retrieve a custom object record",
  "description": "Retrieve the details of a specific custom object record. ",
  "method": "GET",
  "path": "/object-query/{custom-object-name}/{key}",
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
    },
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
