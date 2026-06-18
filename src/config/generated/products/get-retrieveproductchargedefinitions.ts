import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductchargedefinitionsEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductchargedefinitions",
  "name": "List product charge definitions",
  "description": "Retrieves basic information about the product charge definitions.",
  "method": "GET",
  "path": "/v1/product-charge-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "charge",
      "label": "Charge",
      "type": "string",
      "required": false,
      "description": "The unique number or ID of the charge for which the product charge definitions are to be retrieved."
    },
    {
      "name": "rateplan",
      "label": "Rateplan",
      "type": "string",
      "required": false,
      "description": "The unique number or ID of the product rate plan for which the product charge definitions are to be retrieved."
    },
    {
      "name": "hide-inherited-values",
      "label": "Hide Inherited Values",
      "type": "boolean",
      "required": false,
      "description": "The flag that controls whether the response will merge the default charge definition fields for those fields that are not overridden."
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
