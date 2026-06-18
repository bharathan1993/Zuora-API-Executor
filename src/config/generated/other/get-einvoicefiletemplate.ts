import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_einvoicefiletemplateEndpoint: ApiEndpoint = {
  "id": "get-einvoicefiletemplate",
  "name": "Retrieve an e-invoice file template",
  "description": "Retrieves information about an e-invoice file template.",
  "method": "GET",
  "path": "/v1/einvoice/templates/{key}",
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
      "description": "The unique number or ID of the e-invoice file template that you want to retrieve information about."
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
