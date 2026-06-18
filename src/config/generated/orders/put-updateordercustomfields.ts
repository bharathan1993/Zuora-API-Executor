import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateordercustomfieldsEndpoint: ApiEndpoint = {
  "id": "put-updateordercustomfields",
  "name": "Update order custom fields",
  "description": "**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.",
  "method": "PUT",
  "path": "/v1/orders/{orderNumber}/customFields",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": true,
      "description": "The order number."
    }
  ],
  "bodyFields": [
    {
      "name": "customFields",
      "label": "Custom Fields",
      "type": "object",
      "required": false,
      "description": "Container for custom fields of an Order object.",
      "section": "Additional Fields"
    },
    {
      "name": "subscriptions",
      "label": "Subscriptions",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "orderActions",
          "label": "Order Actions",
          "type": "array",
          "required": false,
          "itemType": "object",
          "itemFields": [
            {
              "name": "customFields",
              "label": "Custom Fields",
              "type": "object",
              "required": false,
              "description": "Container for custom fields of an Order Action object.",
              "section": "Additional Fields"
            },
            {
              "name": "orderActionId",
              "label": "Order Action Id",
              "type": "string",
              "required": false,
              "description": "The Id of the order action in the order. You can provide either the `sequence` or the `orderActionId` field to specify which order action to update. You cannot use then both at the same time.",
              "section": "Additional Fields"
            },
            {
              "name": "sequence",
              "label": "Sequence",
              "type": "number",
              "required": false,
              "description": "The sequence number of the order action in the order. You can provide either the `sequence` or the `orderActionId` field to specify which order action to update. You cannot use then both at the same time.",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionNumber",
          "label": "Subscription Number",
          "type": "string",
          "required": false,
          "section": "Account Settings"
        }
      ],
      "section": "Subscription Settings"
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
