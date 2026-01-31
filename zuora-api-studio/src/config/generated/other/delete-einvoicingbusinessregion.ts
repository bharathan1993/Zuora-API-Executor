import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_einvoicingbusinessregionEndpoint: ApiEndpoint = {
  "id": "delete-einvoicingbusinessregion",
  "name": "Delete an e-invoicing business region",
  "description": "Deletes an e-invoicing business region by key. The key can be the unique ID or number of an e-invoicing business region.",
  "method": "DELETE",
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
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
