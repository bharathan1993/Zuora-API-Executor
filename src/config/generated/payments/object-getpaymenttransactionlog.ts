import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_getpaymenttransactionlogEndpoint: ApiEndpoint = {
  "id": "object-getpaymenttransactionlog",
  "name": "CRUD: Retrieve a payment transaction log",
  "description": "Retrieves information about a specific payment transaction log.",
  "method": "GET",
  "path": "/v1/object/payment-transaction-log/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "The ID of a payment transaction log."
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
