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
      "description": "The unique number or ID of the product charge definition to be retrieved."
    }
  ],
  "queryParams": [
    {
      "name": "hide-inherited-values",
      "label": "Hide Inherited Values",
      "type": "boolean",
      "required": false,
      "description": "The flag that controls whether the response will merge the default charge definition fields for those fields that are not overridden."
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
