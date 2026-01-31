import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_productEndpoint: ApiEndpoint = {
  "id": "get-product",
  "name": "Retrieve a product",
  "description": "Retrieves detailed information about a specific product, including information about its product rate plans and charges. ",
  "method": "GET",
  "path": "/v1/catalog/products/{product-key}",
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
