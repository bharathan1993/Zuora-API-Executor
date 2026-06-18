import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_applycreditmemoEndpoint: ApiEndpoint = {
  "id": "put-applycreditmemo",
  "name": "Apply a credit memo",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "PUT",
  "path": "/v1/credit-memos/{creditMemoKey}/apply",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoKey",
      "label": "Credit Memo Key",
      "type": "string",
      "required": true,
      "description": "The unique ID or number of a credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172."
    }
  ],
  "bodyFields": [
    {
      "name": "debitMemos",
      "label": "Debit Memos",
      "type": "array",
      "required": false,
      "description": "Container for debit memos that the credit memo is applied to. The maximum number of debit memos is 1,000.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The credit memo amount to be applied to the debit memo.",
          "section": "Additional Fields"
        },
        {
          "name": "debitMemoId",
          "label": "Debit Memo Id",
          "type": "string",
          "required": true,
          "description": "The unique ID of the debit memo that the credit memo is applied to.",
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "items",
          "label": "Items",
          "type": "array",
          "required": false,
          "description": "Container for items. The maximum number of items is 1,000. If `creditMemoItemId` is the source, then it should be accompanied by a target `debitMemoItemId`. If `creditTaxItemId` is the source, then it should be accompanied by a target `taxItemId`.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": true,
              "description": "The amount that is applied to the specific item.",
              "section": "Additional Fields"
            },
            {
              "name": "creditMemoItemId",
              "label": "Credit Memo Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the credit memo item.",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "creditTaxItemId",
              "label": "Credit Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the credit memo taxation item.",
              "section": "Tax Settings"
            },
            {
              "name": "debitMemoItemId",
              "label": "Debit Memo Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the debit memo item that the credit memo item is applied to.",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "taxItemId",
              "label": "Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the debit memo taxation item that the credit memo taxation item is applied to.",
              "section": "Tax Settings"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "date",
      "required": false,
      "description": "The date when the credit memo is applied.",
      "section": "Additional Fields"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "description": "Container for invoices that the credit memo is applied to. The maximum number of invoices is 1,000.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The credit memo amount to be applied to the invoice.",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceId",
          "label": "Invoice Id",
          "type": "string",
          "required": true,
          "description": "The unique ID of the invoice that the credit memo is applied to.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "items",
          "label": "Items",
          "type": "array",
          "required": false,
          "description": "Container for items. The maximum number of items is 1,000. If `creditMemoItemId` is the source, then it should be accompanied by a target `invoiceItemId`. If `creditTaxItemId` is the source, then it should be accompanied by a target `taxItemId`.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": true,
              "description": "The amount that is applied to the specific item.",
              "section": "Additional Fields"
            },
            {
              "name": "creditMemoItemId",
              "label": "Credit Memo Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the credit memo item.",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "creditTaxItemId",
              "label": "Credit Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the credit memo taxation item.",
              "section": "Tax Settings"
            },
            {
              "name": "invoiceItemId",
              "label": "Invoice Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the invoice item that the credit memo item is applied to.",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "taxItemId",
              "label": "Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the invoice taxation item that the credit memo taxation item is applied to.",
              "section": "Tax Settings"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
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
