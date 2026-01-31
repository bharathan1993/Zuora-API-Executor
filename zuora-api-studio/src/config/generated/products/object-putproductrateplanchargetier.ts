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
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [
    {
      "name": "Price",
      "label": "Price",
      "type": "number",
      "required": false,
      "description": "The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.\n",
      "section": "Additional Fields"
    },
    {
      "name": "PriceFormat",
      "label": "Price Format",
      "type": "string",
      "required": false,
      "description": "Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only.\n\n**Note:** The values `Flat Fee` and `Per Unit` (with spaces) is valid for create or update calls.\n",
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
      "description": "The percentage of discount for a percentage discount. This field is required if the value for `ProductRatePlanCharge.ChargeModel` is `Discount-Percentage`.\n \n\n**Values:** A decimal value between -100 and 100, exclusive\n",
      "section": "Additional Fields"
    },
    {
      "name": "DiscountAmount",
      "label": "Discount Amount",
      "type": "number",
      "required": false,
      "description": "The specific amount for a fixed discount. This field is required if the value for `ProductRatePlanCharge.ChargeModel` is `Discount-Fixed Amount`.\n\n**Values:** Any positive decimal value.  \n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
