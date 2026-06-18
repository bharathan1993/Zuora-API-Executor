import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_fulfillmentitemEndpoint: ApiEndpoint = {
  "id": "put-fulfillmentitem",
  "name": "Update a fulfillment item",
  "description": "Updates a specified fulfillment item.",
  "method": "PUT",
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
      "description": "The id of the Fulfillment Item to update."
    }
  ],
  "bodyFields": [
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of a Fulfillment Item object.",
      "section": "Additional Fields"
    },
    {
      "name": "itemIdentifier",
      "label": "Item Identifier",
      "type": "string",
      "required": false,
      "description": "The external identifier of the Fulfillment Item.",
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
