import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getproductrateplanchargeEndpoint: ApiEndpoint = {
  "id": "object-getproductrateplancharge",
  "name": "CRUD: Retrieve a product rate plan charge",
  "description": "Retrieves a specific product rate plan charge.",
  "method": "GET",
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
      "description": "The unique ID of a product rate plan charge to be retrieved. For example, 2c93808457d787030157e031fcd34e19."
    }
  ],
  "queryParams": [
    {
      "name": "fields",
      "label": "Fields",
      "type": "string",
      "required": false,
      "description": "Object fields to return"
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
