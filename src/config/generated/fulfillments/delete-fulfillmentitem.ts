import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_fulfillmentitemEndpoint: ApiEndpoint = {
  "id": "delete-fulfillmentitem",
  "name": "Delete a fulfillment item",
  "description": "Deletes a specified fulfillment item.",
  "method": "DELETE",
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
      "description": "The id of the Fulfillment Item to delete."
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
