import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_einvoicingbusinessregionEndpoint: ApiEndpoint = {
  "id": "get-einvoicingbusinessregion",
  "name": "Retrieve an e-invoicing business region",
  "description": "Retrieves information about an e-invoicing business region.",
  "method": "GET",
  "path": "/v1/einvoice/business-regions/{key}",
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
      "description": "The unqiue ID or number of the e-invoicing business region that you want to retrieve information about."
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
