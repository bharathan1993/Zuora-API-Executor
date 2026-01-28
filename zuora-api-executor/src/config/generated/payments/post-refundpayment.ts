import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_refundpaymentEndpoint: ApiEndpoint = {
  "id": "post-refundpayment",
  "name": "Refund a payment",
  "description": "**Note:** This operation is only available if you have <a href=\"https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement\" target=\"_blank\">Invoice Settlement</a> enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see <a href=\"https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide\" target=\"_blank\">Invoice Settlement Enablement and Checklist Guide</a> for more information. ",
  "method": "POST",
  "path": "/v1/payments/{paymentKey}/refunds",
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
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Comments about the refund.\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "customRates",
      "label": "Custom Rates",
      "type": "array",
      "required": false,
      "description": "It contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item, Reporting currency item, or both).\n\n**Note**:\n  \n- This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n- You cannot set the custom rates, if both the **Automatically include additional Currency Conversion information in data source exports** option and **Fx data** feature are enabled.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "description": "The currency code for either Reporting or Home currency.\n\n**Note**: This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n",
          "section": "Additional Fields"
        },
        {
          "name": "customFxRate",
          "label": "Custom Fx Rate",
          "type": "number",
          "required": true,
          "description": "The Custom FX conversion rate between Home/Reporting and Transactional currency items.\n\n**Note**: This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n",
          "section": "Additional Fields"
        },
        {
          "name": "rateDate",
          "label": "Rate Date",
          "type": "date",
          "required": false,
          "description": "The date on which a particular currency rate is fixed or obtained on.\n\n**Note**: This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n",
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
      "description": "Container for the finance information related to the refund.\n",
      "fields": [
        {
          "name": "bankAccountAccountingCode",
          "label": "Bank Account Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code that maps to a bank account in your accounting system.\n",
          "maxLength": 100,
          "section": "Account Settings"
        },
        {
          "name": "transferredToAccounting",
          "label": "Transferred To Accounting",
          "type": "string",
          "required": false,
          "description": "Whether the refund was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite. \n",
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
          "description": "The accounting code for the unapplied payment.\n",
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
      "description": "How an external refund was issued to a customer. This field is required for an external refund and must be left empty for an electronic refund. You can issue an external refund on an electronic payment.\n",
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
      "description": "A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.\n",
      "section": "Additional Fields"
    },
    {
      "name": "referenceId",
      "label": "Reference Id",
      "type": "string",
      "required": false,
      "description": "The transaction ID returned by the payment gateway for an electronic refund. Use this field to reconcile refunds between your gateway and Zuora Payments.\n",
      "maxLength": 100,
      "section": "Additional Fields"
    },
    {
      "name": "refundDate",
      "label": "Refund Date",
      "type": "date",
      "required": false,
      "description": "The date when the refund takes effect, in `yyyy-mm-dd` format. The date of the refund cannot be before the payment date. Specify this field only for external refunds. Zuora automatically generates this field for electronic refunds.\n",
      "section": "Additional Fields"
    },
    {
      "name": "secondRefundReferenceId",
      "label": "Second Refund Reference Id",
      "type": "string",
      "required": false,
      "description": "The transaction ID returned by the payment gateway if there is an additional transaction for the refund. Use this field to reconcile payments between your gateway and Zuora Payments.\n",
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
      "description": "The total amount of the refund. The amount cannot exceed the unapplied amount of the associated payment. If the original payment was applied to one or more invoices or debit memos, you have to unapply a full or partial payment from the invoices or debit memos, and then refund the full or partial unapplied payment to your customers. \n",
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "description": "The type of the refund.\n",
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
      "description": "The transaction type of the refund.\n",
      "enum": [
        "Chargeback",
        "PaymentReversal"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationId__NS",
      "label": "Integration Id N S",
      "type": "string",
      "required": false,
      "description": "ID of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IntegrationStatus__NS",
      "label": "Integration Status N S",
      "type": "string",
      "required": false,
      "description": "Status of the refund's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Origin__NS",
      "label": "Origin N S",
      "type": "string",
      "required": false,
      "description": "Origin of the corresponding object in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the refund was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SynctoNetSuite__NS",
      "label": "Syncto Net Suite N S",
      "type": "string",
      "required": false,
      "description": "Specifies whether the refund should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "gatewayOptions",
      "label": "Gateway Options",
      "type": "object",
      "required": false,
      "description": "The field used to pass gateway-specific parameters and parameter values. The fields supported by gateways vary. For more information, see the Overview topic of each gateway integration in [Zuora Knowledge Center](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/M_Payment_Gateways/Supported_Payment_Gateways).\n\nZuora sends all the information that you specified to the gateway. If you specify any unsupported gateway option parameters, they will be ignored without error prompts.\n",
      "fields": [
        {
          "name": "key",
          "label": "Key",
          "type": "string",
          "required": false,
          "description": "The name of a gateway-specific parameter.\n",
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "description": "The value of the gateway-specific parameter.\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
