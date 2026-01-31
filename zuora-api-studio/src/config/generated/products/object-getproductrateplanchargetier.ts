import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getproductrateplanchargetierEndpoint: ApiEndpoint = {
  "id": "object-getproductrateplanchargetier",
  "name": "CRUD: Retrieve a product rate plan charge tier",
  "description": "Retrieves a specific product rate plan charge tier.",
  "method": "GET",
  "path": "/v1/object/product-rate-plan-charge-tier/{id}",
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
