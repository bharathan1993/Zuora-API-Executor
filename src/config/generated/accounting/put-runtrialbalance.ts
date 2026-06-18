import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_runtrialbalanceEndpoint: ApiEndpoint = {
  "id": "put-runtrialbalance",
  "name": "Run trial balance",
  "description": "Runs the trial balance for an accounting period.",
  "method": "PUT",
  "path": "/v1/accounting-periods/{ap-id}/run-trial-balance",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ap-id",
      "label": "Ap Id",
      "type": "string",
      "required": true,
      "description": "ID of the accounting period for which you want to run a trial balance."
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
