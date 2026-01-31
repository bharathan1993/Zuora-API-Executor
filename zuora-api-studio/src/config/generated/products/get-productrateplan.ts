import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_productrateplanEndpoint: ApiEndpoint = {
  "id": "get-productrateplan",
  "name": "Retrieve a product rate plan by ID",
  "description": "Retrieves a product rate plan by its ID.",
  "method": "GET",
  "path": "/v1/product-rate-plans/{id}",
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
