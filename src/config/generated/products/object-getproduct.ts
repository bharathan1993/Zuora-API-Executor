import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getproductEndpoint: ApiEndpoint = {
  "id": "object-getproduct",
  "name": "CRUD: Retrieve a product",
  "description": "Retrieve a specific product.",
  "method": "GET",
  "path": "/v1/object/product/{id}",
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
