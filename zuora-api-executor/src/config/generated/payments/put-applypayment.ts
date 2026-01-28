import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_applypaymentEndpoint: ApiEndpoint = {
  "id": "put-applypayment",
  "name": "Apply a payment",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information. ",
  "method": "PUT",
  "path": "/v1/payments/{paymentKey}/apply",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "paymentKey",
      "label": "Payment Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: paymentKey",
      "placeholder": "Enter payment key"
    }
  ],
  "bodyFields": [
    {
      "name": "debitMemos",
      "label": "Debit Memos",
      "type": "array",
      "required": false,
      "description": "Container for debit memos. The maximum number of debit memos is 1,000.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The amount that is applied from the payment to the debit memo.\n",
          "section": "Additional Fields"
        },
        {
          "name": "debitMemoId",
          "label": "Debit Memo Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the debit memo that the payment is applied to.\n\nIf `debitMemoId` or `debitMemoNumber` is specified, the `writeOff` value can be set to true. This enables writing off a debit memo at the time of refund.\n\n**Note:**\n  - The Payment Cross Account (PCA) feature is in the Early Adopter phase.\n  - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.\n",
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "debitMemoNumber",
          "label": "Debit Memo Number",
          "type": "string",
          "required": false,
          "description": "The number of the debit memo that the payment is applied to.\n\n**Note:**\n  - The Payment Cross Account (PCA) feature is in the Early Adopter phase. \n  - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.\n",
          "section": "Account Settings"
        },
        {
          "name": "items",
          "label": "Items",
          "type": "array",
          "required": false,
          "description": "Container for debit memo items. The maximum number of items is 1,000.\n\n**Note:** This field is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": true,
              "description": "The amount of the payment that is applied to the specific debit memo or taxation item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "debitMemoItemId",
              "label": "Debit Memo Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the specific debit memo item.\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "taxItemId",
              "label": "Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the specific taxation item.\n",
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
      "description": "The date when the payment application takes effect, in `yyyy-mm-dd` format. The effective date must be later than or equal to the maximum effective date of the payment.\n",
      "section": "Additional Fields"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "description": "Container for invoices. The maximum number of invoices is 1,000.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The amount that is applied from the payment to the invoice.\n",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceId",
          "label": "Invoice Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the invoice that the payment is applied to.\n\nIf `invoiceId` or `invoiceNumber` is specified, the `writeOff` value can be set to true. This enables writing off a debit memo at the time of refund.\n\n**Note:**\n  - The Payment Cross Account (PCA) feature is in the Early Adopter phase.\n  - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "invoiceNumber",
          "label": "Invoice Number",
          "type": "string",
          "required": false,
          "description": "The number of the invoice that the payment is applied to. For example, `INV00000001`. \n\n**Note:** When both the `invoiceNumber` and `invoiceId` fields are specified, the two fields must match with each other.\n\n  - The Payment Cross Account (PCA) feature is in the Early Adopter phase.\n  - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.\n",
          "section": "Account Settings"
        },
        {
          "name": "items",
          "label": "Items",
          "type": "array",
          "required": false,
          "description": "Container for invoice items. The maximum number of items is 1,000.\n\n**Note:** This field is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos).  If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": true,
              "description": "The amount of the payment that is applied to the specific invoice or taxation item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "invoiceItemId",
              "label": "Invoice Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the specific invoice item.\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "taxItemId",
              "label": "Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the specific taxation item.\n",
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
    "Content-Type": "application/json"
  }
};
