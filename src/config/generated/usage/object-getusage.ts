import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getusageEndpoint: ApiEndpoint = {
  "id": "object-getusage",
  "name": "CRUD: Retrieve a usage record",
  "description": "Retrieve a usage record.",
  "method": "GET",
  "path": "/v1/object/usage/{id}",
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
      "description": "Object id"
    }
  ],
  "queryParams": [
    {
      "name": "fields",
      "label": "Fields",
      "type": "string",
      "required": false,
      "description": "Object fields to return"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
