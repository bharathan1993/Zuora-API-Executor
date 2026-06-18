import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_ordercancelEndpoint: ApiEndpoint = {
  "id": "put-ordercancel",
  "name": "Cancel an order",
  "description": "**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora Subscribe and Amend customer, we recommend you enable Orders Harmonization to access the Orders feature. With Orders, you can access both existing functions for subscription and billing management and the new features on Zuora Billing.",
  "method": "PUT",
  "path": "/v1/orders/{orderNumber}/cancel",
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
      "description": "The order number of the draft order you wish to cancel."
    }
  ],
  "bodyFields": [
    {
      "name": "cancelReason",
      "label": "Cancel Reason",
      "type": "string",
      "required": false,
      "description": "The reason for cancelling the order.",
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
