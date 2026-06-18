import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_retrieveproductrateplandefinitionsEndpoint: ApiEndpoint = {
  "id": "get-retrieveproductrateplandefinitions",
  "name": "List product rate plan definitions",
  "description": "Retrieves basic information about the product rate plan definitions for a product rate plan.",
  "method": "GET",
  "path": "/v1/product-rateplan-definitions",
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
      "description": "The unique number or ID of the charge for which the product rate plan definitions are to be retrieved."
    },
    {
      "name": "rateplan",
      "label": "Rateplan",
      "type": "string",
      "required": false,
      "description": "The unique number or ID of the product rate plan for which the product rate plan definitions are to be retrieved."
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
