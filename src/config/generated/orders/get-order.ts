import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_orderEndpoint: ApiEndpoint = {
  "id": "get-order",
  "name": "Retrieve an order",
  "description": "**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.",
  "method": "GET",
  "path": "/v1/orders/{orderNumber}",
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
      "description": "The order number to be retrieved."
    }
  ],
  "queryParams": [
    {
      "name": "getAccountDetails",
      "label": "Get Account Details",
      "type": "boolean",
      "required": false,
      "description": "Retrieves the invoice owner account details and subscription owner account details in the Order."
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
