import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_productrateplandefnitionEndpoint: ApiEndpoint = {
  "id": "delete-productrateplandefnition",
  "name": "Delete a product rate plan definition",
  "description": "Deletes a product rate plan definition.",
  "method": "DELETE",
  "path": "/v1/product-rateplan-definitions/{product-rateplan-definition-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product-rateplan-definition-key",
      "label": "Product Rateplan Definition Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: product-rateplan-definition-key",
      "placeholder": "Enter product rateplan definition key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
