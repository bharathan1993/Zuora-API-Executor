import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_refundcreditmemoEndpoint: ApiEndpoint = {
  "id": "post-refundcreditmemo",
  "name": "Refund a credit memo",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/credit-memos/{creditMemoKey}/refund",
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
      "description": "The ID or number of the credit memo. For example, 2c92c8955bd63cc1015bd7c151af02ab or CM00000001."
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
      "name": "customRates",
      "label": "Custom Rates",
      "type": "array",
      "required": false,
      "description": "It contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item, Reporting currency item, or both). **Note**: - This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `224.0` or a later version. - You cannot set the custom rates, if both the **Automatically include additional Currency Conversion information in data source exports** option and **Fx data** feature are enabled.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "description": "The currency code for either Reporting or Home currency. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        },
        {
          "name": "customFxRate",
          "label": "Custom Fx Rate",
          "type": "number",
          "required": true,
          "description": "The Custom FX conversion rate between Home/Reporting and Transactional currency items. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        },
        {
          "name": "rateDate",
          "label": "Rate Date",
          "type": "date",
          "required": false,
          "description": "The date on which a particular currency rate is fixed or obtained on. **Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        }
      ],
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
          "name": "onAccountAccountingCode",
          "label": "On Account Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code that maps to an on account in your accounting system.",
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
      "name": "items",
      "label": "Items",
      "type": "array",
      "required": false,
      "description": "Container for credit memo items. The maximum number of items is 1,000. **Note:** This field is only available if you have the [Invoice Item Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/C_Invoice_Item_Settlement) feature enabled. Invoice Item Settlement must be used together with other Invoice Settlement features (Unapplied Payments, and Credit and Debit memos). If you wish to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": true,
          "description": "The amount of the refund on the specific item.",
          "section": "Additional Fields"
        },
        {
          "name": "creditMemoItemId",
          "label": "Credit Memo Item Id",
          "type": "string",
          "required": false,
          "description": "The ID of the credit memo item that is refunded.",
          "section": "Credit & Settlement Settings"
        },
        {
          "name": "creditTaxItemId",
          "label": "Credit Tax Item Id",
          "type": "string",
          "required": false,
          "description": "The ID of the credit memo taxation item that is refunded.",
          "section": "Tax Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "methodType",
      "label": "Method Type",
      "type": "string",
      "required": false,
      "description": "How an external refund was issued to a customer. This field is required for an external refund and must be left empty for an electronic refund. You can issue an external refund on a credit memo.",
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
      "description": "The date when the refund takes effect, in `yyyy-mm-dd` format. The date of the refund cannot be before the credit memo date. Specify this field only for external refunds. Zuora automatically generates this field for electronic refunds.",
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
      "required": true,
      "description": "The total amount of the refund. The amount cannot exceed the unapplied amount of the associated credit memo. If the original credit memo was applied to one or more invoices or debit memos, you have to unapply a full or partial credit memo from the invoices or debit memos, and then refund the full or partial unapplied credit memo to your customers.",
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
      "name": "gatewayId",
      "label": "Gateway Id",
      "type": "string",
      "required": false,
      "description": "The ID of the gateway instance that processes the refund. This field can be specified only for electronic refunds. The ID must be a valid gateway instance ID, and this gateway must support the specific payment method. If no gateway ID is specified, the default gateway in the billing account configuration will be used. If no gateway is specified in the billing account, the default gateway of the corresponding tenant will be used.",
      "section": "Payment Settings"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "description": "The field used to pass gateway-specific parameters and parameter values.",
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
      "name": "paymentMethodId",
      "label": "Payment Method Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment method used for the refund. This field is required for an electronic refund, and the value must be an electronic payment method ID. This field must be left empty for an external refund.",
      "section": "Payment Settings"
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
