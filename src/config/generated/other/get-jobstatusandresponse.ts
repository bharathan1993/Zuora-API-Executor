import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_jobstatusandresponseEndpoint: ApiEndpoint = {
  "id": "get-jobstatusandresponse",
  "name": "Retrieve the status and response of a job",
  "description": "**Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. If you are an existing Zuora Subscribe and Amend customer, we recommend you enable Orders Harmonization to access the Orders feature. With Orders, you can access both existing functions for subscription and billing management and the new features on Zuora Billing.",
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
      "description": "UUID of the asynchronous job created by an asynchronous API operation."
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
