import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const patch_partialupdatecustomobjectrecordEndpoint: ApiEndpoint = {
  "id": "patch-partialupdatecustomobjectrecord",
  "name": "Partially update a custom object record",
  "description": "Updates one or many fields of a custom object record. Patch update uses JSON Merge Patch as specified in [RFC 7386](https://tools.ietf.org/html/rfc7386).",
  "method": "PATCH",
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
