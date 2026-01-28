import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const querycommerceproductrateplansEndpoint: ApiEndpoint = {
  "id": "querycommerceproductrateplans",
  "name": "Query product rate plan details",
  "description": "Retrieve details of a **single** product rate plan (PRP) from the Product Catalog. You can expand associated product rate plan charges for each plan.",
  "method": "POST",
  "path": "/commerce/plans/query",
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
      "description": "Unique identifier (key) of the Product Rate Plan (PRP) to query. This can be the PRP ID or the PRP number configured in your system.\n",
      "section": "Additional Fields"
    },
    {
      "name": "expand",
      "label": "Expand",
      "type": "object",
      "required": false,
      "description": "Optional flags to expand related resources in the response.\n",
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
      "description": "Optional attribute values to use when evaluating Dynamic Pricing for the PRP or its charges.\nAll required attributes must be supplied if the PRP or PRPC is configured to require them.\n",
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
          "description": "Attribute value used for price evaluation.  The value can be a string, number, or boolean, depending on the attribute type.  \n - Enclose the value in quotation marks (\"\") if it is a **string**, for example, \"Liquidity Provider\", \"Y\", \"External\".  \n - Do **not** use quotation marks for **numeric** or **boolean** values, for example, 98, 5, true, false.\n",
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
      "description": "Controls how pricing is evaluated for the charge. Supported values: - `LIST_PRICE`: evaluate pricing at the list-price level. - `EXTENDED_PRICE`: evaluate pricing at the extended-price level.\nIf not specified, the default is `LIST_PRICE`.\n",
      "enum": [
        "LIST_PRICE",
        "EXTENDED_PRICE"
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
