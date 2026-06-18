import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getproductbykeyEndpoint: ApiEndpoint = {
  "id": "getproductbykey",
  "name": "Retrieve a product by key",
  "description": "Retrieves detailed information about a specific product by its unique product number or ID.",
  "method": "POST",
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
      "description": "The unique number or ID of the product to be retrieved."
    }
  ],
  "bodyFields": [
    {
      "name": "expand",
      "label": "Expand",
      "type": "object",
      "required": false,
      "description": "Controls which related objects are expanded and included in the response.",
      "fields": [
        {
          "name": "productRatePlans",
          "label": "Product Rate Plans",
          "type": "boolean",
          "required": false,
          "description": "When `true`, includes product rate plans in the response.",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanCharges",
          "label": "Product Rate Plan Charges",
          "type": "boolean",
          "required": false,
          "description": "When `true`, includes product rate plan charges in the response.",
          "section": "Additional Fields"
        },
        {
          "name": "businessContextFilters",
          "label": "Business Context Filters",
          "type": "boolean",
          "required": false,
          "description": "When `true`, includes business context filters in the response.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
