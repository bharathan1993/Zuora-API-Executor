import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_customobjectrecordEndpoint: ApiEndpoint = {
  "id": "put-customobjectrecord",
  "name": "Update a custom object record",
  "description": "Updates a record of the given type and ID.",
  "method": "PUT",
  "path": "/objects/records/default/{object}/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "object",
      "label": "Object",
      "type": "string",
      "required": true,
      "description": "Path parameter: object",
      "placeholder": "Enter object"
    },
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
