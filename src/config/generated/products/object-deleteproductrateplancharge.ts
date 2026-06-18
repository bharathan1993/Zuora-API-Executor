import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_deleteproductrateplanchargeEndpoint: ApiEndpoint = {
  "id": "object-deleteproductrateplancharge",
  "name": "CRUD: Delete a product rate plan charge",
  "description": "Deletes a product rate plan charge.",
  "method": "DELETE",
  "path": "/v1/object/product-rate-plan-charge/{id}",
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
      "description": "The unique ID of the product rate plan charge to be deleted. For example, 2c93808457d787030157e031fcd34e19."
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
