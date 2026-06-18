import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_fulfillmentEndpoint: ApiEndpoint = {
  "id": "put-fulfillment",
  "name": "Update a fulfillment",
  "description": "",
  "method": "PUT",
  "path": "/v1/fulfillments/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "The id or fulfillment number of the Fulfillment to update."
    }
  ],
  "bodyFields": [
    {
      "name": "billTargetDate",
      "label": "Bill Target Date",
      "type": "date",
      "required": false,
      "description": "The target date for the Fulfillment to be picked up by bill run for billing.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "carrier",
      "label": "Carrier",
      "type": "string",
      "required": false,
      "description": "The carrier of the Fulfillment. The available values can be managed in the Fulfillment Settings page under Billing Settings.",
      "section": "Additional Fields"
    },
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of a Fulfillment object.",
      "section": "Additional Fields"
    },
    {
      "name": "externalId",
      "label": "External Id",
      "type": "string",
      "required": false,
      "description": "The external id of the Fulfillment.",
      "section": "Additional Fields"
    },
    {
      "name": "fulfillmentDate",
      "label": "Fulfillment Date",
      "type": "date",
      "required": false,
      "description": "The date of the Fulfillment.",
      "section": "Additional Fields"
    },
    {
      "name": "fulfillmentLocation",
      "label": "Fulfillment Location",
      "type": "string",
      "required": false,
      "description": "The fulfillment location of the Fulfillment. The available values can be managed in the Fulfillment Settings page under Billing Settings.",
      "section": "Additional Fields"
    },
    {
      "name": "fulfillmentSystem",
      "label": "Fulfillment System",
      "type": "string",
      "required": false,
      "description": "The fulfillment system of the Fulfillment. The available values can be managed in the Fulfillment Settings page under Billing Settings.",
      "section": "Additional Fields"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "number",
      "required": false,
      "description": "The quantity of the Fulfillment.",
      "section": "Additional Fields"
    },
    {
      "name": "state",
      "label": "State",
      "type": "string",
      "required": false,
      "description": "The state of the Fulfillment. See [Order Line Item states, Order states, and state transitions](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AB_Order_Line_Item_States_and_Order_States) for more information.",
      "enum": [
        "Executing",
        "Booked",
        "SentToBilling",
        "Complete",
        "Cancelled"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "trackingNumber",
      "label": "Tracking Number",
      "type": "string",
      "required": false,
      "description": "The tracking number of the Fulfillment.",
      "section": "Account Settings"
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
