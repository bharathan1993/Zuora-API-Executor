import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryproductrateplanchargewithdynamicpricingEndpoint: ApiEndpoint = {
  "id": "queryproductrateplanchargewithdynamicpricing",
  "name": "Query a product rate plan charge with Dynamic Pricing",
  "description": "Returns a product rate plan charge (PRPC) by evaluating Dynamic Pricing against the provided attribute values.",
  "method": "POST",
  "path": "/commerce/charges/query",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "product_rate_plan_key",
      "label": "Product Rate Plan Key",
      "type": "string",
      "required": false,
      "description": "Unique identifier (key) of the Product Rate Plan (PRP) to query. This can be the PRP ID or the PRP number configured in your system.",
      "section": "Additional Fields"
    },
    {
      "name": "expand",
      "label": "Expand",
      "type": "object",
      "required": false,
      "description": "Optional flags to expand related resources in the response.",
      "fields": [
        {
          "name": "product_rate_plan_charges",
          "label": "Product Rate Plan Charges",
          "type": "boolean",
          "required": false,
          "description": "Whether to include Product Rate Plan Charges (PRPCs) in the response.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "attributes",
      "label": "Attributes",
      "type": "array",
      "required": false,
      "description": "Optional attribute values to use when evaluating Dynamic Pricing for the PRP or its charges. All required attributes must be supplied if the PRP or PRPC is configured to require them.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "Attribute name, for example, Age, Region, EffectiveDate, AccountContext.",
          "section": "Account Settings"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "description": "Attribute value used for price evaluation. The value can be a string, number, or boolean, depending on the attribute type. - Enclose the value in quotation marks (\"\") if it is a **string**, for example, \"Liquidity Provider\", \"Y\", \"External\". - Do **not** use quotation marks for **numeric** or **boolean** values, for example, 98, 5, true, false.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "evaluation_level",
      "label": "Evaluation Level",
      "type": "string",
      "required": false,
      "description": "Controls how pricing is evaluated for the charge. Supported values: - `LIST_PRICE`: evaluate pricing at the list-price level. - `EXTENDED_PRICE`: evaluate pricing at the extended-price level. If not specified, the default is `LIST_PRICE`.",
      "enum": [
        "LIST_PRICE",
        "EXTENDED_PRICE"
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
