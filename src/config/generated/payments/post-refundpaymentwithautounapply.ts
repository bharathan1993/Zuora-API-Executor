import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_refundpaymentwithautounapplyEndpoint: ApiEndpoint = {
  "id": "post-refundpaymentwithautounapply",
  "name": "Refund a payment with auto-unapplying",
  "description": "**Note:** This operation is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information.",
  "method": "POST",
  "path": "/v1/payments/{paymentKey}/refunds/unapply",
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
      "description": "The unique ID or number of an unapplied payment. For example, `8a8082e65b27f6c3015b89e4344c16b1`, or `P-00000001`."
    }
  ],
  "bodyFields": [
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Comments about the refund.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "financeInformation",
      "label": "Finance Information",
      "type": "object",
      "required": false,
      "description": "Container for the finance information related to the refund.",
      "fields": [
        {
          "name": "bankAccountAccountingCode",
          "label": "Bank Account Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code that maps to a bank account in your accounting system.",
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "transferredToAccounting",
          "label": "Transferred To Accounting",
          "type": "string",
          "required": false,
          "description": "Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.",
          "enum": [
            "Processing",
            "Yes",
            "No",
            "Error",
            "Ignore"
          ],
          "section": "Account Settings"
        },
        {
          "name": "unappliedPaymentAccountingCode",
          "label": "Unapplied Payment Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for the unapplied payment.",
          "maxLength": 100,
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "methodType",
      "label": "Method Type",
      "type": "string",
      "required": false,
      "description": "How an external refund was issued to a customer. This field is required for an external refund and must be left empty for an electronic refund. You can issue an external refund on an electronic payment.",
      "enum": [
        "ACH",
        "Cash",
        "Check",
        "CreditCard",
        "PayPal",
        "WireTransfer",
        "DebitCard",
        "CreditCardReferenceTransaction",
        "BankTransfer",
        "Other"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "reasonCode",
      "label": "Reason Code",
      "type": "string",
      "required": false,
      "description": "A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.",
      "section": "Additional Fields"
    },
    {
      "name": "referenceId",
      "label": "Reference Id",
      "type": "string",
      "required": false,
      "description": "The transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments.",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "refundDate",
      "label": "Refund Date",
      "type": "date",
      "required": false,
      "description": "The date when the refund takes effect, in `yyyy-mm-dd` format. The date of the refund cannot be before the payment date. Specify this field only for external refunds. Zuora automatically generates this field for electronic refunds.",
      "section": "Additional Fields"
    },
    {
      "name": "secondRefundReferenceId",
      "label": "Second Refund Reference Id",
      "type": "string",
      "required": false,
      "description": "The transaction ID returned by the payment gateway if there is an additional transaction for the refund. Use this field to reconcile payments between your gateway and Zuora Payments.",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "softDescriptor",
      "label": "Soft Descriptor",
      "type": "string",
      "required": false,
      "description": "A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.",
      "maxLength": 35,
      "section": "Additional Fields"
    },
    {
      "name": "softDescriptorPhone",
      "label": "Soft Descriptor Phone",
      "type": "string",
      "required": false,
      "description": "A payment gateway-specific field that maps to Zuora for the gateways, Orbital, Vantiv and Verifi.",
      "maxLength": 20,
      "section": "Additional Fields"
    },
    {
      "name": "totalAmount",
      "label": "Total Amount",
      "type": "number",
      "required": false,
      "description": "The total amount of the refund. If you do not specify a value, Zuora initiates a full refund of the payment amount, which is the sum of the applied and unapplied payment amounts. - `Full Refund`: If the refund amount and debit memo/ invoice are not specified, then the payment will be unapplied completely, followed by processing a full refund. - `Partial Refund`: - If the total amount is specified, and the debit memo/invoice is not specified, you can unapply the refund amount from the available debit memo/invoice and refund the unapplied payment to the customer. - If the total amount is specified, along with the debit memo and the invoice, you can unapply the applied payments from the mentioned invoices and debit memos, and refund the unapplied payments to customers.",
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "description": "The type of the refund.",
      "enum": [
        "External",
        "Electronic"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "refundTransactionType",
      "label": "Refund Transaction Type",
      "type": "string",
      "required": false,
      "description": "The transaction type of the refund.",
      "enum": [
        "Chargeback",
        "PaymentReversal"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "writeOff",
      "label": "Write Off",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to write off a document.",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "writeOffOptions",
      "label": "Write Off Options",
      "type": "object",
      "required": false,
      "description": "Container for the write-off information to create credit memo.",
      "fields": [
        {
          "name": "comment",
          "label": "Comment",
          "type": "string",
          "required": false,
          "description": "Comments about the credit memo which is created as a result of the write off.",
          "maxLength": 100,
          "section": "Additional Fields"
        },
        {
          "name": "memoDate",
          "label": "Memo Date",
          "type": "date",
          "required": false,
          "description": "The date when the credit memo takes effect.",
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "reasonCode",
          "label": "Reason Code",
          "type": "string",
          "required": false,
          "description": "A code identifying the reason for the credit memo.",
          "section": "Additional Fields"
        },
        {
          "name": "taxAutoCalculation",
          "label": "Tax Auto Calculation",
          "type": "boolean",
          "required": false,
          "description": "Specifies whether taxes are automatically recalculated for the credit memo generated during the write-off process. When set to `true`, the system fetches the latest tax rates from the tax vendor instead of copying the tax amounts from the original invoice. The default value is `false`. **Note**: This feature is in the **Early Availability** phase. Contact Zuora Global Support to enable this feature before using it.",
          "section": "Tax Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "description": "Status of the refund's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Origin__NS",
      "label": "Origin N S",
      "type": "string",
      "required": false,
      "description": "Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the refund was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SynctoNetSuite__NS",
      "label": "Syncto Net Suite N S",
      "type": "string",
      "required": false,
      "description": "Specifies whether the refund should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "debitMemos",
      "label": "Debit Memos",
      "type": "array",
      "required": false,
      "description": "Container for debit memos. The maximum number of debit memos is 1,000.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The amount that is applied from the payment to the debit memo.",
          "section": "Additional Fields"
        },
        {
          "name": "debitMemoId",
          "label": "Debit Memo Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the debit memo that the payment is applied to. If `debitMemoId` or `debitMemoNumber` is specified, the `writeOff` value can be set to true. This enables writing off a debit memo at the time of refund. **Note:** - The Payment Cross Account (PCA) feature is in the Early Adopter phase. - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.",
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "debitMemoNumber",
          "label": "Debit Memo Number",
          "type": "string",
          "required": false,
          "description": "The number of the debit memo that the payment is applied to. **Note:** - The Payment Cross Account (PCA) feature is in the Early Adopter phase. - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.",
          "section": "Account Settings"
        },
        {
          "name": "items",
          "label": "Items",
          "type": "array",
          "required": false,
          "description": "Container for debit memo items. The maximum number of items is 1,000. **Note:** This field is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": true,
              "description": "The amount of the payment that is applied to the specific debit memo or taxation item.",
              "section": "Additional Fields"
            },
            {
              "name": "debitMemoItemId",
              "label": "Debit Memo Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the specific debit memo item.",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "taxItemId",
              "label": "Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the specific taxation item.",
              "section": "Tax Settings"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "description": "The field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in [Zuora Knowledge Center](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways). Zuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts.",
      "fields": [
        {
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "description": "The name of a gateway-specific parameter.",
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "description": "The value of the gateway-specific parameter.",
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "description": "Container for invoices. The maximum number of invoices is 1,000.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The amount that is applied from the payment to the invoice.",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceId",
          "label": "Invoice Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the invoice that the payment is applied to. If `invoiceId` or `invoiceNumber` is specified, the `writeOff` value can be set to true. This enables writing off a debit memo at the time of refund. **Note:** - The Payment Cross Account (PCA) feature is in the Early Adopter phase. - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "invoiceNumber",
          "label": "Invoice Number",
          "type": "string",
          "required": false,
          "description": "The number of the invoice that the payment is applied to. For example, `INV00000001`. **Note:** When both the `invoiceNumber` and `invoiceId` fields are specified, the two fields must match with each other. - The Payment Cross Account (PCA) feature is in the Early Adopter phase. - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.",
          "section": "Account Settings"
        },
        {
          "name": "items",
          "label": "Items",
          "type": "array",
          "required": false,
          "description": "Container for invoice items. The maximum number of items is 1,000. **Note:** This field is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amount",
              "label": "Amount",
              "type": "number",
              "required": true,
              "description": "The amount of the payment that is applied to the specific invoice or taxation item.",
              "section": "Additional Fields"
            },
            {
              "name": "invoiceItemId",
              "label": "Invoice Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the specific invoice item.",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "taxItemId",
              "label": "Tax Item Id",
              "type": "string",
              "required": false,
              "description": "The ID of the specific taxation item.",
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
