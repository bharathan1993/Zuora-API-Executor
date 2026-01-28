import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_productrateplansEndpoint: ApiEndpoint = {
  "id": "get-productrateplans",
  "name": "List all product rate plans of a product",
  "description": "Retrieves information about all product rate plans of a specific product.",
  "method": "GET",
  "path": "/v1/products/{product-key}/product-rate-plans",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product-key",
      "label": "Product Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: product-key",
      "placeholder": "Enter product key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
