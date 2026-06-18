import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createpaymentEndpoint: ApiEndpoint = {
  "id": "post-createpayment",
  "name": "Create a payment",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/payments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "The ID of the customer account that the payment is created for.",
      "section": "Account Settings"
    },
    {
      "name": "accountNumber",
      "label": "Account Number",
      "type": "string",
      "required": false,
      "description": "The number of the customer account that the payment is created for, such as `A00000001`. You can specify either `accountNumber` or `accountId` for a customer account. If both of them are specified, they must refer to the same customer account.",
      "section": "Account Settings"
    },
    {
      "name": "paymentGatewayNumber",
      "label": "Payment Gateway Number",
      "type": "string",
      "required": false,
      "description": "The natural key for the payment gateway. Use the same gateway instance if both `paymentGatewayNumber` and `gatewayId` are sent in the request.",
      "section": "Account Settings"
    },
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "required": true,
      "description": "The total amount of the payment.",
      "section": "Additional Fields"
    },
    {
      "name": "authTransactionId",
      "label": "Auth Transaction Id",
      "type": "string",
      "required": false,
      "description": "The authorization transaction ID from the payment gateway. Use this field for electronic payments, such as credit cards. When you create a payment for capturing the authorized funds, it is highly recommended to pass in the gatewayOrderId that you used when authorizing the funds by using the [Create authorization](https://www.zuora.com/developer/api-references/api/operation/POST_CreateAuthorization) operation, together with the `authTransactionId` field. The following payment gateways support this field: - Adyen Integration v2.0 - CyberSource 1.28 - CyberSource 1.97 - CyberSource 2.0 - Chase Paymentech Orbital - Ingenico ePayments - SlimPay - Stripe v2 - Verifi Global Payment Gateway - WePay Payment Gateway Integration",
      "maxLength": 50,
      "section": "Additional Fields"
    },
    {
      "name": "comment",
      "label": "Comment",
      "type": "string",
      "required": false,
      "description": "Additional information related to the payment.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": true,
      "description": "When Standalone Payment is not enabled, the `currency` of the payment must be the same as the payment currency defined in the customer account settings through Zuora UI. But if you have the [Multiple Currencies](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Multiple_Currencies) feature enabled, you can have a different payment currency. When Standalone Payment is enabled and `standalone` is `true`, the `currency` of the standalone payment can be different from the payment currency defined in the customer account settings. The amount will not be summed up to the account balance or key metrics regardless of currency.",
      "section": "Additional Fields"
    },
    {
      "name": "customRates",
      "label": "Custom Rates",
      "type": "array",
      "required": false,
      "description": "It contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item or Reporting currency item or both). **Note**: - This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version). - You cannot set the custom rates, if both the **Automatically include additional Currency Conversion information in data source exports** option and **Fx data** feature are enabled. - Payment, PaymentApplication, and PaymentApplicationItem will utilize the provided custom Fx rate to convert amounts from the transactional currency to the home currency.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "description": "The currency code for either Reporting or Home currency. **Note**: This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        },
        {
          "name": "customFxRate",
          "label": "Custom Fx Rate",
          "type": "number",
          "required": true,
          "description": "The Custom FX conversion rate between Home/Reporting and Transactional currency items. **Note**: This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        },
        {
          "name": "rateDate",
          "label": "Rate Date",
          "type": "date",
          "required": false,
          "description": "The date on which a particular currency rate is fixed or obtained on. **Note**: This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "effectiveDate",
      "label": "Effective Date",
      "type": "date",
      "required": false,
      "description": "The date when the payment takes effect, in `yyyy-mm-dd` format. **Note:** - This field is required for only electronic payments. It's an optional field for external payments. - When specified, this field must be set to the date of today. - When applying or transferring payments, this field must be later than or equal to the maximum effective date of the payment.",
      "section": "Additional Fields"
    },
    {
      "name": "financeInformation",
      "label": "Finance Information",
      "type": "object",
      "required": false,
      "description": "Container for the finance information related to the payment.",
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
          "description": "Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite.",
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
      "name": "mitTransactionSource",
      "label": "Mit Transaction Source",
      "type": "string",
      "required": false,
      "description": "Payment transaction source used to differentiate the transaction source in Stored Credential Transaction framework. - `C_Unscheduled`: Cardholder-initiated transaction (CIT) that does not occur on scheduled or regularly occurring dates. - `M_Recurring`: Merchant-initiated transaction (MIT) that occurs at regular intervals. - `M_Unscheduled`: Merchant-initiated transaction (MIT) that does not occur on scheduled or regularly occurring dates. - `M_MOTO`: Mail Order Telephone Order (MOTO) payment transaction. This option is only available for credit card payments on Stripe v2. See [Overview of Stripe payment gateway integration](https://knowledgecenter.zuora.com/Zuora_Collect/Payment_gateway_integrations/Supported_payment_gateways/Stripe_Payment_Gateway/A_Overview_of_Stripe_payment_gateway_integration) for more information.",
      "enum": [
        "C_Unscheduled",
        "M_Recurring",
        "M_Unscheduled",
        "M_MOTO"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "referenceId",
      "label": "Reference Id",
      "type": "string",
      "required": false,
      "description": "The transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Zuora Payments.",
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
      "name": "standalone",
      "label": "Standalone",
      "type": "boolean",
      "required": false,
      "description": "This field is only available if support for standalone payments is enabled. Specify `true` to create a standalone payment that will be processed in Zuora through Zuora gateway integration but will be settled outside of Zuora. When `standalone` is set to `true`: - `accountId`, `amount`, `currency`, and `type` are required. - `type` must be `Electronic`. - `currency` of the payment can be different from the payment currency in the customer account settings. - The amount will not be summed up into the account balance and key metrics regardless of the payment currency. - No settlement data will be created. - Either the applied amount or the unapplied amount of the payment is zero. - The standalone payment cannot be applied, unapplied, or transferred. Specify `false` to create an ordinary payment that will be created, processed, and settled in Zuora. The `currency` of an ordinary payment must be the same as the currency in the customer account settings.",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "description": "The type of the payment. **Note**: If you specify the type as `Electronic`, you must specify the value for `accountId` or `accountNumber`.",
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
      "description": "Status of the payment's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
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
      "description": "Date when the payment was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Transaction__NS",
      "label": "Transaction N S",
      "type": "string",
      "required": false,
      "description": "Related transaction in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
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
          "required": false,
          "description": "The amount of the payment associated with the debit memo.",
          "section": "Additional Fields"
        },
        {
          "name": "debitMemoId",
          "label": "Debit Memo Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the debit memo that the payment is created on. **Note:** - The Payment Cross Account (PCA) feature is in the Early Adopter stage. To gain access to this capability, please create a Zuora support ticket. - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.",
          "section": "Credit & Settlement Settings"
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
              "description": "The amount of the payment associated with the specific debit memo or taxation item.",
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
      "name": "gatewayId",
      "label": "Gateway Id",
      "type": "string",
      "required": false,
      "description": "The ID of the gateway instance that processes the payment. The ID must be a valid gateway instance ID and this gateway must support the specific payment method. - If Payment Gateway Routing is enabled, when creating electronic payments, this field is optional. - If this field is not specified, gateway routing rules will be invoked. - If this field is specified, the specified gateway will be used to process the payment. - If Payment Gateway Routing is disabled, when creating electronic payments, this field is required. - When creating external payments, this field is optional. Use the same gateway instance if both `paymentGatewayNumber` and `gatewayId` are sent in the request.",
      "section": "Payment Settings"
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
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "value",
          "label": "Value",
          "type": "string",
          "required": false,
          "description": "The value of the gateway-specific parameter.",
          "maxLength": 255,
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "gatewayOrderId",
      "label": "Gateway Order Id",
      "type": "string",
      "required": false,
      "description": "A merchant-specified natural key value that can be passed to the electronic payment gateway when a payment is created. If not specified, the payment number will be passed in instead. Gateways check duplicates on the gateway order ID to ensure that the merchant do not accidentally enter the same transaction twice. This ID can also be used to do reconciliation and tie the payment to a natural key in external systems. The source of this ID varies by merchant. Some merchants use their shopping cart order IDs, and others use something different. Merchants use this ID to track transactions in their eCommerce systems. When you create a payment for capturing the authorized funds, it is highly recommended to pass in the gatewayOrderId that you used when authorizing the funds by using the [Create authorization](https://www.zuora.com/developer/api-references/api/operation/POST_CreateAuthorization) operation, together with the `authTransactionId` field.",
      "maxLength": 50,
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethodId",
      "label": "Payment Method Id",
      "type": "string",
      "required": false,
      "description": "The unique ID of the payment method that the customer used to make the payment. If no payment method ID is specified in the request body, the default payment method for the customer account is used automatically. If the default payment method is different from the type of payments that you want to create, an error occurs.",
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethodType",
      "label": "Payment Method Type",
      "type": "string",
      "required": false,
      "description": "The type of the payment method that the customer used to make the payment. Specify this value when you are creating an external payment method. If both `paymentMethodType` and `paymentMethodId` are specified, only the `paymentMethodId` value is used to create the payment.",
      "defaultValue": null,
      "section": "Payment Settings"
    },
    {
      "name": "paymentOption",
      "label": "Payment Option",
      "type": "array",
      "required": false,
      "description": "Container for the paymentOption items, which describe the transactional level rules for processing payments. Currently, only the Gateway Options type is supported. Here is an example: ``` \"paymentOption\": [ { \"type\": \"GatewayOptions\", \"detail\": { \"SecCode\":\"WEB\" } } ] ``` `paymentOption` of the payment schedule takes precedence over `paymentOption` of the payment schedule item. You can use this field or the `gatewayOptions` field to pass the Gateway Options fields supported by a payment gateway. However, the Gateway Options fields passed through the `paymentOption` field will be stored in the Payment Option object and can be easily retrieved.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "detail",
          "label": "Detail",
          "type": "object",
          "required": false,
          "description": "The field used to pass the transactional payment data to the gateway side in the key-value format.",
          "fields": [
            {
              "name": "key",
              "label": "Key",
              "type": "string",
              "required": false,
              "description": "The name of the field.",
              "section": "Additional Fields"
            },
            {
              "name": "value",
              "label": "Value",
              "type": "string",
              "required": false,
              "description": "The value of the field.",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "description": "The type of the payment option. Currently, only `GatewayOptions` is supported for specifying Gateway Options fields supported by a payment gateway.",
          "section": "Additional Fields"
        }
      ],
      "section": "Payment Settings"
    },
    {
      "name": "paymentScheduleKey",
      "label": "Payment Schedule Key",
      "type": "string",
      "required": false,
      "description": "The unique ID or the number of the payment schedule to be linked with the payment. See [Link payments to payment schedules](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Payment_Schedules/Link_payments_with_payment_schedules) for more information.",
      "section": "Payment Settings"
    },
    {
      "name": "prepayment",
      "label": "Prepayment",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the payment will be used as a reserved payment. See [Prepaid Cash with Drawdown](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Invoicing/JA_Advanced_Consumption_Billing/Prepaid_Cash_with_Drawdown) for more information.",
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
          "required": false,
          "description": "The amount of the payment associated with the invoice. This amount must be equal to or lesser than the balance of the invoice.",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceId",
          "label": "Invoice Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the invoice that the payment is created on. The balance of the invoice specified must not be `0`. **Note:** - The Payment Cross Account (PCA) feature is in the Early Adopter stage. To gain access to this capability, please create a Zuora support ticket. - When PCA is enabled for the tenant, you can specify a debit memo / invoice that is different from the account that is specified in the request body.",
          "section": "Invoice & Document Settings"
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
              "description": "The amount of the payment associated with the specific invoice or taxation item.",
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
