import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getproductrateplanchargeEndpoint: ApiEndpoint = {
  "id": "object-getproductrateplancharge",
  "name": "CRUD: Retrieve a product rate plan charge",
  "description": "Retrieves a specific product rate plan charge.",
  "method": "GET",
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
