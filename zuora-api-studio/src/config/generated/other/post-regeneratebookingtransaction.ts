import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_regeneratebookingtransactionEndpoint: ApiEndpoint = {
  "id": "post-regeneratebookingtransaction",
  "name": "Regenerate booking transactions",
  "description": "Use this operation to generate booking transactions. This call is useful in the following two use cases:",
  "method": "POST",
  "path": "/v1/uno-regenerate/booking-transaction",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "itemNumber",
      "label": "Item Number",
      "type": "string",
      "required": false,
      "description": "The item number.\n",
      "section": "Account Settings"
    },
    {
      "name": "orderNumber",
      "label": "Order Number",
      "type": "string",
      "required": false,
      "description": "The order number.\n",
      "section": "Account Settings"
    },
    {
      "name": "subscriptionName",
      "label": "Subscription Name",
      "type": "string",
      "required": false,
      "description": "The subscription name.\n",
      "section": "Account Settings"
    },
    {
      "name": "chargeNumber",
      "label": "Charge Number",
      "type": "string",
      "required": false,
      "description": "The charge number of dynamic usage charge.\n",
      "section": "Account Settings"
    },
    {
      "name": "orderLineItemId",
      "label": "Order Line Item Id",
      "type": "string",
      "required": false,
      "description": "The order line item ID.\n",
      "section": "Additional Fields"
    },
    {
      "name": "ratePlanChargeId",
      "label": "Rate Plan Charge Id",
      "type": "string",
      "required": false,
      "description": "The rate plan charge ID of dynamic usage charge.\n",
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": false,
      "description": "The type of business object for which you want to generate the transactions.\n",
      "enum": [
        "Subscription",
        "OrderLineItem",
        "DynamicUsageCharge"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "subscriptionId",
      "label": "Subscription Id",
      "type": "string",
      "required": false,
      "description": "The subscription ID.\n",
      "section": "Subscription Settings"
    },
    {
      "name": "subscriptionVersion",
      "label": "Subscription Version",
      "type": "number",
      "required": false,
      "description": "The subscription version.\n",
      "section": "Subscription Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
