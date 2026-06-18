import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_productEndpoint: ApiEndpoint = {
  "id": "get-product",
  "name": "Retrieve a product",
  "description": "Retrieves detailed information about a specific product, including information about its product rate plans and charges.",
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
      "description": "The unique ID, SKU, or product number of the product that you want to retrieve. For example, 8a808255575bdae4015774e9602e16fe, SKU-00000987, or PC-00000006."
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
