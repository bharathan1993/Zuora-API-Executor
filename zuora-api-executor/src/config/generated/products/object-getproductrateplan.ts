import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getproductrateplanEndpoint: ApiEndpoint = {
  "id": "object-getproductrateplan",
  "name": "CRUD: Retrieve a product rate plan",
  "description": "Retrieves a product rate plan.",
  "method": "GET",
  "path": "/v1/object/product-rate-plan/{id}",
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
