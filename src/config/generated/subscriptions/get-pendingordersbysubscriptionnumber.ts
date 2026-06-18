import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_pendingordersbysubscriptionnumberEndpoint: ApiEndpoint = {
  "id": "get-pendingordersbysubscriptionnumber",
  "name": "List pending orders by subscription number",
  "description": "**Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.",
  "method": "GET",
  "path": "/v1/orders/subscription/{subscription-key}/pending",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscription-key",
      "label": "Subscription Key",
      "type": "string",
      "required": true,
      "description": "Subscription number. For example, A-S00000135."
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
