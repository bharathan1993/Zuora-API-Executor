import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querypurchaseoptionsbyprpidEndpoint: ApiEndpoint = {
  "id": "querypurchaseoptionsbyprpid",
  "name": "Query purchase options by PRP ID",
  "description": "Retrieves one or more product rate plans (PRPs) from the Product Catalog based on specified filters such as product ID or PRP ID.",
  "method": "POST",
  "path": "/commerce/purchase-options/list",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "rejectUnknownFields",
      "label": "Reject Unknown Fields",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether the call fails if the request body contains unknown fields. With `rejectUnknownFields` set to `true`, Zuora returns a 400 response if the request body contains unknown fields. The body of the 400 response is: ```json { \"message\": \"Error - unrecognised fields\" } ``` By default, Zuora ignores unknown fields in the request body.",
      "defaultValue": false
    }
  ],
  "bodyFields": [
    {
      "name": "filters",
      "label": "Filters",
      "type": "array",
      "required": false,
      "description": "Defines the filtering criteria for querying purchase options or product rate plans. Each filter includes a target field, an operator, and a value.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "field",
          "label": "Field",
          "type": "string",
          "required": true,
          "description": "Name of the field to filter by. Supported fields include: - `prp_id`: Product Rate Plan ID. - `product_id`: Product ID.",
          "section": "Additional Fields"
        },
        {
          "name": "operator",
          "label": "Operator",
          "type": "string",
          "required": true,
          "description": "Comparison operator. Supported values: - `EQ` (equals) - `NE` (not equals) - `LT` (less than) - `GT` (greater than) - `SW` (starts with) - `EW` (ends with) - `IN` (in list) - `LIKE` (partial match)",
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
          "type": "object",
          "required": true,
          "description": "Specifies the value to compare against. Only one of the following value types should be provided.",
          "fields": [
            {
              "name": "string_value",
              "label": "String Value",
              "type": "string",
              "required": false,
              "description": "String value for string-based comparisons.",
              "section": "Additional Fields"
            },
            {
              "name": "number_value",
              "label": "Number Value",
              "type": "number",
              "required": false,
              "description": "Numeric value for numeric comparisons.",
              "section": "Account Settings"
            },
            {
              "name": "boolean_value",
              "label": "Boolean Value",
              "type": "boolean",
              "required": false,
              "description": "Boolean value for logical comparisons.",
              "section": "Additional Fields"
            }
          ],
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
      "description": "Optional flags to include related entities in the query results.",
      "fields": [
        {
          "name": "product_rate_plan_charges",
          "label": "Product Rate Plan Charges",
          "type": "boolean",
          "required": false,
          "description": "When `true`, expands the response to include Product Rate Plan Charges (PRPCs) associated with the queried Product Rate Plans. Expanded PRPCs include full charge configuration, including pricing, billing settings, and end date configuration fields such as `endDateCondition`, `upToPeriodsType`, and `upToPeriods`.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "product_rate_plan_charge_key",
      "label": "Product Rate Plan Charge Key",
      "type": "string",
      "required": false,
      "description": "Optional identifier for a specific Product Rate Plan Charge (PRPC) to query. Can be either a PRPC ID or a PRPC number/key.",
      "section": "Additional Fields"
    },
    {
      "name": "attributes",
      "label": "Attributes",
      "type": "array",
      "required": false,
      "description": "Optional attributes used for evaluating Dynamic Pricing. Required when the queried PRPC is configured to depend on contextual attributes.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "Name of the pricing attribute (e.g., `Region`, `Age`, `EffectiveDate`).",
          "section": "Account Settings"
        },
        {
          "name": "string_value",
          "label": "String Value",
          "type": "string",
          "required": false,
          "description": "String-based attribute value.",
          "section": "Additional Fields"
        },
        {
          "name": "number_value",
          "label": "Number Value",
          "type": "number",
          "required": false,
          "description": "Numeric attribute value.",
          "section": "Account Settings"
        },
        {
          "name": "boolean_value",
          "label": "Boolean Value",
          "type": "boolean",
          "required": false,
          "description": "Boolean attribute value.",
          "section": "Additional Fields"
        },
        {
          "name": "date_value",
          "label": "Date Value",
          "type": "date",
          "required": false,
          "description": "Date value in `YYYY-MM-DD` format.",
          "section": "Additional Fields"
        },
        {
          "name": "datetime_value",
          "label": "Datetime Value",
          "type": "date",
          "required": false,
          "description": "Datetime value in ISO 8601 format.",
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
