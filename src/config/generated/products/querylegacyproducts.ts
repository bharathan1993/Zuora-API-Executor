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
      "description": "Filter conditions for querying legacy products. Each filter defines a field, an operator, and a value to match against. Common filter fields include `id`, `name`, `product_number`, or `category`.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "field",
          "label": "Field",
          "type": "string",
          "required": true,
          "description": "Field name to filter by.",
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
          "description": "Comparison operator for the filter condition. Supported values: - `EQ` (equals) - `NE` (not equals) - `LT` (less than) - `GT` (greater than) - `SW` (starts with) - `EW` (ends with) - `IN` (in list of values) - `LIKE` (partial match)",
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
          "description": "Value to match for the specified field. The data type depends on the field being filtered.",
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
      "description": "Defines whether to include related entities such as Product Rate Plans (PRPs) and Product Rate Plan Charges (PRPCs) in the response. Each key corresponds to an entity type that can be expanded.",
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
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
