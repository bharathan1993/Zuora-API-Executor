import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_deleteproductEndpoint: ApiEndpoint = {
  "id": "object-deleteproduct",
  "name": "CRUD: Delete a product",
  "description": "Deletes a specific product.",
  "method": "DELETE",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
