import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_einvoicingserviceproviderEndpoint: ApiEndpoint = {
  "id": "delete-einvoicingserviceprovider",
  "name": "Delete an e-invoicing service provider",
  "description": "Deletes an e-invoicing service privider.",
  "method": "DELETE",
  "path": "/v1/einvoice/service-providers/{key}",
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
      "description": "The unique ID or number of the e-invoicing service provider that you want to"
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
