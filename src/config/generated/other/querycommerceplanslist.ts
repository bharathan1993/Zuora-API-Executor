import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querycommerceplanslistEndpoint: ApiEndpoint = {
  "id": "querycommerceplanslist",
  "name": "Query product rate plans",
  "description": "Queries product rate plans (PRPs) from the Product Catalog using filters such as plan ID, name, or product ID.",
  "method": "POST",
  "path": "/commerce/plans/list",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "filters",
      "label": "Filters",
      "type": "array",
      "required": true,
      "description": "Filter conditions for querying product rate plans. Each filter defines a field, operator, and value.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "field",
          "label": "Field",
          "type": "string",
          "required": true,
          "description": "Field name to filter by, such as `prp_id`, `product_id`, or `name`.",
          "section": "Additional Fields"
        },
        {
          "name": "operator",
          "label": "Operator",
          "type": "string",
          "required": true,
          "description": "Comparison operator for the filter condition. Supported values: - `EQ` (equals) - `NE` (not equals) - `IN` (in a list of values) - `LIKE` (partial match) - `GT` (greater than) - `GTE` (greater than or equal) - `LT` (less than) - `LTE` (less than or equal) - `SW` (starts with) - `EW` (ends with)",
          "enum": [
            "EQ",
            "NE",
            "IN",
            "LIKE",
            "GT",
            "GTE",
            "LT",
            "LTE",
            "SW",
            "EW"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": true,
          "description": "Value to match for the specified field.",
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
      "description": "Expand related entities in the response.",
      "fields": [
        {
          "name": "product_rate_plan_charges",
          "label": "Product Rate Plan Charges",
          "type": "boolean",
          "required": false,
          "description": "Whether to include associated Product Rate Plan Charges (PRPCs).",
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
