import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductrateplanchargeEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductrateplancharge",
  "name": "Retrieve a product rate plan charge",
  "description": "Retrieves basic information about a product rate plan charge.",
  "method": "GET",
  "path": "/v1/product-rate-plan-charges/{product-rate-plan-charge-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "product-rate-plan-charge-key",
      "label": "Product Rate Plan Charge Key",
      "type": "string",
      "required": true,
      "description": "The unique number or ID of the product rate plan charge to be retrieved."
    }
  ],
  "queryParams": [
    {
      "name": "show-charge-definitions",
      "label": "Show Charge Definitions",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether to include the product charge definitions of this charge in the response. **Note**: This parameter is applicable only if the Attribute-based Pricing feature is enabled. The Attribute-based Pricing feature in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters. If you are interested, please reach out to your CSM."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
