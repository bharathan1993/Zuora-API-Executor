import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_fulfillmentitemEndpoint: ApiEndpoint = {
  "id": "put-fulfillmentitem",
  "name": "Update a fulfillment item",
  "description": "Updates a specified fulfillment item. ",
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
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of a Fulfillment Item object.\n",
      "section": "Additional Fields"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "The description of the Fulfillment Item.\n",
      "section": "Additional Fields"
    },
    {
      "name": "itemIdentifier",
      "label": "Item Identifier",
      "type": "string",
      "required": false,
      "description": "The external identifier of the Fulfillment Item.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
