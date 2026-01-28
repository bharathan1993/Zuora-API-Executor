import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductbykeyEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductbykey",
  "name": "Retrieve a product by key",
  "description": "Retrieves detailed information about a specific product by its unique product number or ID.",
  "method": "GET",
  "path": "/commerce/products/{product_key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product_key",
      "label": "Product Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: product_key",
      "placeholder": "Enter product key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
