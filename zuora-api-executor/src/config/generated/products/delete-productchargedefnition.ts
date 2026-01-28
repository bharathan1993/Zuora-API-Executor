import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_productchargedefnitionEndpoint: ApiEndpoint = {
  "id": "delete-productchargedefnition",
  "name": "Delete a product charge definition",
  "description": "Deletes a product charge definition.",
  "method": "DELETE",
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
