import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_putproductrateplanchargetierEndpoint: ApiEndpoint = {
  "id": "object-putproductrateplanchargetier",
  "name": "CRUD: Update a product rate plan charge tier",
  "description": "Updates the price of a product rate plan charge tier.",
  "method": "PUT",
  "path": "/v1/object/product-rate-plan-charge-tier/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of the product rate plan charge tier to be updated. For example, 2c92c0f86c85891e016c88d55a6e543b."
    }
  ],
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
      "name": "Price",
      "label": "Price",
      "type": "number",
      "required": false,
      "description": "The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.",
      "section": "Additional Fields"
    },
    {
      "name": "PriceFormat",
      "label": "Price Format",
      "type": "string",
      "required": false,
      "description": "Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only. **Note:** The values `Flat Fee` and `Per Unit` (with spaces) is valid for create or update calls.",
      "enum": [
        "Flat Fee",
        "Per Unit"
      ],
      "maxLength": 8,
      "section": "Additional Fields"
    },
    {
      "name": "DiscountPercentage",
      "label": "Discount Percentage",
      "type": "number",
      "required": false,
      "description": "The percentage of discount for a percentage discount. This field is required if the value for `ProductRatePlanCharge.ChargeModel` is `Discount-Percentage`. **Values:** A decimal value between -100 and 100, exclusive",
      "section": "Additional Fields"
    },
    {
      "name": "DiscountAmount",
      "label": "Discount Amount",
      "type": "number",
      "required": false,
      "description": "The specific amount for a fixed discount. This field is required if the value for `ProductRatePlanCharge.ChargeModel` is `Discount-Fixed Amount`. **Values:** Any positive decimal value.",
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
