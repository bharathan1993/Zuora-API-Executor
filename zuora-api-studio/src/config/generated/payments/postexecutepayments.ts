import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const postexecutepaymentsEndpoint: ApiEndpoint = {
  "id": "postexecutepayments",
  "name": "Execute payments",
  "description": "For all active retry cycles associated with the invoice, debit memo, and/or account IDs provided, schedules the next payment retry attempt to occur in the next hourly payment processor run.",
  "method": "POST",
  "path": "/api/v1/payments/execute_payments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "account_ids",
      "label": "Account Ids",
      "type": "array",
      "required": false,
      "description": "IDs of accounts.",
      "itemType": "string",
      "section": "Account Settings"
    },
    {
      "name": "debit_memo_ids",
      "label": "Debit Memo Ids",
      "type": "array",
      "required": false,
      "description": "IDs of debit memos.",
      "itemType": "string",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "invoice_ids",
      "label": "Invoice Ids",
      "type": "array",
      "required": false,
      "description": "IDs of invoices.",
      "itemType": "string",
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
