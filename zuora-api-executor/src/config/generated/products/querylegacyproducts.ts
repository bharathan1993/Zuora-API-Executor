import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querylegacyproductsEndpoint: ApiEndpoint = {
  "id": "querylegacyproducts",
  "name": "Query legacy products from the Product Catalog",
  "description": "This operation is functionally equivalent to the \"Query products from the Product Catalog\" operation, except that it returns results",
  "method": "POST",
  "path": "/commerce/legacy/products/list",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "filters",
      "label": "Filters",
      "type": "array",
      "required": false,
      "description": "Filter conditions for querying legacy products. \nEach filter defines a field, an operator, and a value to match against.\nCommon filter fields include `id`, `name`, `product_number`, or `category`.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "field",
          "label": "Field",
          "type": "string",
          "required": true,
          "description": "Field name to filter by. \n",
          "enum": [
            "id",
            "name",
            "product_number",
            "category"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "operator",
          "label": "Operator",
          "type": "string",
          "required": true,
          "description": "Comparison operator for the filter condition. \nSupported values:\n  - `EQ`  (equals)\n  - `NE`  (not equals)\n  - `LT`  (less than)\n  - `GT`  (greater than)\n  - `SW`  (starts with)\n  - `EW`  (ends with)\n  - `IN`  (in list of values)\n  - `LIKE` (partial match)\n",
          "enum": [
            "EQ",
            "NE",
            "LT",
            "GT",
            "SW",
            "IN",
            "EW",
            "LIKE"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": true,
          "description": "Value to match for the specified field.\nThe data type depends on the field being filtered.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "expand",
      "label": "Expand",
      "type": "object",
      "required": false,
      "description": "Defines whether to include related entities such as Product Rate Plans (PRPs) and \nProduct Rate Plan Charges (PRPCs) in the response. Each key corresponds to an entity type that can be expanded.\n",
      "fields": [
        {
          "name": "product_rate_plans",
          "label": "Product Rate Plans",
          "type": "boolean",
          "required": false,
          "description": "When true, includes Product Rate Plans (PRPs) under each product.",
          "section": "Additional Fields"
        },
        {
          "name": "product_rate_plan_charges",
          "label": "Product Rate Plan Charges",
          "type": "boolean",
          "required": false,
          "description": "When true, includes Product Rate Plan Charges (PRPCs) for each rate plan.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
