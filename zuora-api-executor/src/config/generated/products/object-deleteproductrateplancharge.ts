import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_deleteproductrateplanchargeEndpoint: ApiEndpoint = {
  "id": "object-deleteproductrateplancharge",
  "name": "CRUD: Delete a product rate plan charge",
  "description": "Deletes a product rate plan charge.",
  "method": "DELETE",
  "path": "/v1/object/product-rate-plan-charge/{id}",
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
