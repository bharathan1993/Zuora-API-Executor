import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_jobstatusandresponseEndpoint: ApiEndpoint = {
  "id": "get-jobstatusandresponse",
  "name": "Retrieve the status and response of a job",
  "description": "**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend\" target=\"_blank\">Subscribe and Amend</a> customer, we recommend you enable <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/A_Overview_of_Orders_Harmonization\" target=\"_blank\">Orders Harmonization</a> to access the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/A_Overview_of_Orders\" target=\"_blank\">Orders</a> feature. With Orders, you can access both existing functions for subscription and billing management and the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders_Harmonization/P_FAQ_about_Orders_Harmonization#New+features+through+Orders\" target=\"_blank\">new features</a> on Zuora Billing.",
  "method": "GET",
  "path": "/v1/async-jobs/{jobId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: jobId",
      "placeholder": "Enter job id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
