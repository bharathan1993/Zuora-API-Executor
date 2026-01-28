import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaspecificresourcetypeEndpoint: ApiEndpoint = {
  "id": "getaspecificresourcetype",
  "name": "Retrieve a resource type",
  "description": "Get related information on a single resource type.",
  "method": "GET",
  "path": "/scim/v2/ResourceTypes/{id}",
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
