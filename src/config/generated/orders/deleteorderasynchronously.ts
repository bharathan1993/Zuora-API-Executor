import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const deleteorderasynchronouslyEndpoint: ApiEndpoint = {
  "id": "deleteorderasynchronously",
  "name": "Delete an order asynchronously",
  "description": "**Note:** This operation is only available if you have the <a href= \"https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders\"",
  "method": "DELETE",
  "path": "/v1/async/orders/{orderNumber}",
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
      "description": "The number of the order to be deleted."
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
