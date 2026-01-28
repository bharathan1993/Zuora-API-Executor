import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updatedebitmemoinvokesyncstatusEndpoint: ApiEndpoint = {
  "id": "updatedebitmemoinvokesyncstatus",
  "name": "Sync the e-Invoice status of a debit memo",
  "description": "Initiates a background polling process to retrieve the latest notification response from the configured e-Invoicing provider and update the e-Invoice status of the debit memo.",
  "method": "PUT",
  "path": "/v1/debit-memos/{debitMemoKey}/e-invoice/sync-status",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "debitMemoKey",
      "label": "Debit Memo Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: debitMemoKey",
      "placeholder": "Enter debit memo key"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
