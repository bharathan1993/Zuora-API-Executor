import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_orderactionsEndpoint: ApiEndpoint = {
  "id": "put-orderactions",
  "name": "Update an order action",
  "description": "Updates the change reason and custom fields for an order action.",
  "method": "PUT",
  "path": "/v1/orderActions/{id}",
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
      "description": "The id of the Order Action to update."
    }
  ],
  "bodyFields": [
    {
      "name": "changeReason",
      "label": "Change Reason",
      "type": "string",
      "required": false,
      "description": "The change reason set for an order action when the order action is updated.",
      "section": "Additional Fields"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of an Order Action object.",
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
