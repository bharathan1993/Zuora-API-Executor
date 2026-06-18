import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_rateplanEndpoint: ApiEndpoint = {
  "id": "get-rateplan",
  "name": "Retrieve a rate plan",
  "description": "",
  "method": "GET",
  "path": "/v1/rateplans/{ratePlanId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ratePlanId",
      "label": "Rate Plan Id",
      "type": "string",
      "required": true,
      "description": "The ID of the subscription rate plan to be retrieved."
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
