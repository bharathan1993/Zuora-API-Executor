import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_sequencesetsEndpoint: ApiEndpoint = {
  "id": "post-sequencesets",
  "name": "Create sequence sets",
  "description": "Creates sequence sets, allowing distinct numbering sequences for billing documents, payments, and refunds. Billing documents include invoices, credit memos, and debit memos.",
  "method": "POST",
  "path": "/v1/sequence-sets",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "sequenceSets",
      "label": "Sequence Sets",
      "type": "array",
      "required": false,
      "description": "Array of sequence sets configured for billing documents, payments, and refunds.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "creditMemo",
          "label": "Credit Memo",
          "type": "object",
          "required": true,
          "description": "Container for the prefix and starting document number of credit memos. **Note:** This field is only available if you have the Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
          "fields": [
            {
              "name": "prefix",
              "label": "Prefix",
              "type": "string",
              "required": false,
              "description": "The prefix of credit memos.",
              "section": "Additional Fields"
            },
            {
              "name": "startNumber",
              "label": "Start Number",
              "type": "number",
              "required": false,
              "description": "The starting document number of credit memos.",
              "section": "Account Settings"
            }
          ],
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "debitMemo",
          "label": "Debit Memo",
          "type": "object",
          "required": true,
          "description": "Container for the prefix and starting document number of debit memos. **Note:** This field is only available if you have the Invoice Settlement feature enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
          "fields": [
            {
              "name": "prefix",
              "label": "Prefix",
              "type": "string",
              "required": false,
              "description": "The prefix of debit memos.",
              "section": "Additional Fields"
            },
            {
              "name": "startNumber",
              "label": "Start Number",
              "type": "number",
              "required": false,
              "description": "The starting document number of debit memos.",
              "section": "Account Settings"
            }
          ],
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "invoice",
          "label": "Invoice",
          "type": "object",
          "required": true,
          "description": "Container for the prefix and starting document number of invoices.",
          "fields": [
            {
              "name": "prefix",
              "label": "Prefix",
              "type": "string",
              "required": false,
              "description": "The prefix of invoices.",
              "section": "Additional Fields"
            },
            {
              "name": "startNumber",
              "label": "Start Number",
              "type": "number",
              "required": false,
              "description": "The starting document number of invoices.",
              "section": "Account Settings"
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "The name of the sequence set to configure for billing documents, payments, and refunds.",
          "section": "Account Settings"
        },
        {
          "name": "payment",
          "label": "Payment",
          "type": "object",
          "required": false,
          "description": "Container for the prefix and starting number of payments.",
          "fields": [
            {
              "name": "prefix",
              "label": "Prefix",
              "type": "string",
              "required": false,
              "description": "The prefix of payments.",
              "section": "Additional Fields"
            },
            {
              "name": "startNumber",
              "label": "Start Number",
              "type": "number",
              "required": false,
              "description": "The starting number of payments.",
              "section": "Account Settings"
            }
          ],
          "section": "Payment Settings"
        },
        {
          "name": "refund",
          "label": "Refund",
          "type": "object",
          "required": false,
          "description": "Container for the prefix and starting number of refunds.",
          "fields": [
            {
              "name": "prefix",
              "label": "Prefix",
              "type": "string",
              "required": false,
              "description": "The prefix of refunds.",
              "section": "Additional Fields"
            },
            {
              "name": "startNumber",
              "label": "Start Number",
              "type": "number",
              "required": false,
              "description": "The starting number of refunds.",
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
