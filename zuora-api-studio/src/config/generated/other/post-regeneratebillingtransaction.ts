import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_regeneratebillingtransactionEndpoint: ApiEndpoint = {
  "id": "post-regeneratebillingtransaction",
  "name": "Regenerate billing transactions",
  "description": "Use this operation to generate billing transactions. This call is useful in the following two use cases: ",
  "method": "POST",
  "path": "/v1/uno-regenerate/billing-transaction",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": false,
      "description": "ID of Invoice, CreditMemo, DebitMemo, or InvoiceItemAdjustment.\n",
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": false,
      "description": "The type of business object for which you want to generate the transactions.\n",
      "enum": [
        "Invoice",
        "CreditMemo",
        "DebitMemo",
        "InvoiceItemAdjustment"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "number",
      "label": "Number",
      "type": "string",
      "required": false,
      "description": "Number of Invoice, CreditMemo, DebitMemo, or InvoiceItemAdjustment.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
