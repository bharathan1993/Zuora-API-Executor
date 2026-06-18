import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_einvoicefiletemplateEndpoint: ApiEndpoint = {
  "id": "delete-einvoicefiletemplate",
  "name": "Delete an e-invoice file template",
  "description": "Deletes an e-invoice file template by key. The key can be the unique ID or number of an e-invoice file template.",
  "method": "DELETE",
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
      "description": "The unique ID or number of the e-invoice file template that you want to delete."
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
