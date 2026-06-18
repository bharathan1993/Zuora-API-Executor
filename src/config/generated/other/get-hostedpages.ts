import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_hostedpagesEndpoint: ApiEndpoint = {
  "id": "get-hostedpages",
  "name": "List hosted pages",
  "description": "Returns the Payment Pages configuration metadata,",
  "method": "GET",
  "path": "/v1/hostedpages",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "versionNumber",
      "label": "Version Number",
      "type": "string",
      "required": false,
      "description": "Version of the Payment Pages for which you want to retrieve the configuration information. Specify 2 for Payment Pages 2.0."
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
