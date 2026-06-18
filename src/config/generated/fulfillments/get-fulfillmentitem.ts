import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_fulfillmentitemEndpoint: ApiEndpoint = {
  "id": "get-fulfillmentitem",
  "name": "Retrieve a fulfillment item",
  "description": "Retrieves the detailed information about a specified fulfillment item.",
  "method": "GET",
  "path": "/v1/fulfillment-items/{id}",
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
      "description": "The id of the Fulfillment Item to retrieve."
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
