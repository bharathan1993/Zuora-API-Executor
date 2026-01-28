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
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
