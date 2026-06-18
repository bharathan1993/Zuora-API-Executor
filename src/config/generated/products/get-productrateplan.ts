import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_productrateplanEndpoint: ApiEndpoint = {
  "id": "get-productrateplan",
  "name": "Retrieve a product rate plan by ID",
  "description": "Retrieves a product rate plan by its ID.",
  "method": "GET",
  "path": "/v1/product-rate-plans/{id}",
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
      "description": "The ID, external ID, or the natural key of the product rate plan to be retrieved. For example, `402888e67f8b3a68017f8bbb2a06062d`, `Apple0001`, or `PRP-00000008`."
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
