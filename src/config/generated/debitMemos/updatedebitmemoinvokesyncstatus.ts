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
      "description": "The debit memo ID or number. The system checks the latest notification response from the configured e-Invoicing provider and updates the e-Invoice status of the debit memo."
    }
  ],
  "queryParams": [
    {
      "name": "shouldIncludeAcknowledged",
      "label": "Should Include Acknowledged",
      "type": "boolean",
      "required": false,
      "description": "Controls how Zuora pulls e-invoice notifications from the e-invoicing service provider when resyncing the e-invoice status. - If `false` (default), Zuora refreshes only the latest notifications that have not yet been acknowledged. - If `true`, Zuora performs a full re-sync and reprocesses all notifications from the beginning, which is useful if incremental requests return incomplete results (for example, after recreating notifications in Sovos). **Note:** This parameter is primarily applicable to Sovos. For other providers, Zuora may ignore this parameter and apply the provider’s default resync behavior.",
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
