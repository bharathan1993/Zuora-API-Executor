import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updatetierEndpoint: ApiEndpoint = {
  "id": "updatetier",
  "name": "Update a product rate plan charge tier",
  "description": "Updates the price and other editable attributes, when supported, for a specific **Product Rate Plan Charge Tier**.",
  "method": "PUT",
  "path": "/commerce/tiers",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "**Product Rate Plan Charge Tier ID** (`productRatePlanChargeTierId`).  \nThis is the unique identifier of the tier row under a Product Rate Plan Charge.  \nThis identifier is **not surfaced by the new Commerce APIs** and is typically retrieved via **Zuora Data Query (DQ)** or by using the legacy v1 Object API equivalence:\n`/v1/object/product-rate-plan-charge-tier/{id}` <a href=\"https://developer.zuora.com/v1-api-reference/api/operation/Object_PUTProductRatePlanChargeTier/\">CRUD: Update a product rate plan charge tier</a>\n",
      "section": "Additional Fields"
    },
    {
      "name": "price",
      "label": "Price",
      "type": "number",
      "required": true,
      "description": "Tier price to apply for the specified currency/quantity range.",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
