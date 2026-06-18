import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_fulfillmentEndpoint: ApiEndpoint = {
  "id": "get-fulfillment",
  "name": "Retrieve a fulfillment",
  "description": "Retrieves the detailed information about a specified fulfillment. The following tutorial demonstrates how to use this operation:",
  "method": "GET",
  "path": "/v1/fulfillments/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "The id or fulfillment number of the Fulfillment to retrieve."
    }
  ],
  "queryParams": [
    {
      "name": "fulfillment-items",
      "label": "Fulfillment Items",
      "type": "boolean",
      "required": false,
      "description": "Return the related fulfillment items or not.",
      "defaultValue": false
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
