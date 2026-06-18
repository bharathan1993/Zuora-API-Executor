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
      "description": "The unique number or ID of the product charge definition to be deleted."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
