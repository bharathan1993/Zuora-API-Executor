import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductchargedefinitionEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductchargedefinition",
  "name": "Retrieve a product charge definition",
  "description": "Retrieves basic information about a product charge definition.",
  "method": "GET",
  "path": "/v1/product-charge-definitions/{product-charge-definition-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product-charge-definition-key",
      "label": "Product Charge Definition Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: product-charge-definition-key",
      "placeholder": "Enter product charge definition key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
