import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_einvoicingserviceproviderEndpoint: ApiEndpoint = {
  "id": "get-einvoicingserviceprovider",
  "name": "Retrieve an e-invoicing service provider",
  "description": "Retrieves information about an e-invoicing service privider.",
  "method": "GET",
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
      "description": "The unique ID or number of the e-invoicing service provider that you want to retrieve information about."
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
