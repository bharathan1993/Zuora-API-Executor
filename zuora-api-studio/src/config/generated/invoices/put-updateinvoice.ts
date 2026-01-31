import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateinvoiceEndpoint: ApiEndpoint = {
  "id": "put-updateinvoice",
  "name": "Update an invoice",
  "description": "Updates a specific invoice.",
  "method": "PUT",
  "path": "/v1/invoices/{invoiceKey}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: invoiceKey",
      "placeholder": "Enter invoice key"
    }
  ],
  "bodyFields": [
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "description": "Whether invoices are automatically picked up for processing in the corresponding payment run.\nBy default, invoices are automatically picked up for processing in the corresponding payment run.\n",
      "section": "Payment Settings"
    },
    {
      "name": "comments",
      "label": "Comments",
      "type": "string",
      "required": false,
      "description": "Additional information related to the invoice that a Zuora user added to the invoice.\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "dueDate",
      "label": "Due Date",
      "type": "date",
      "required": false,
      "description": "The date by which the payment for this invoice is due.\n",
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
      "description": "Status of the invoice's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the invoice was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "invoiceDate",
      "label": "Invoice Date",
      "type": "date",
      "required": false,
      "description": "The new invoice date of the invoice. The new invoice date cannot fall in a closed accounting period.\nYou can only specify `invoiceDate` or `dueDate` in one request. Otherwise, an error occurs.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceItems",
      "label": "Invoice Items",
      "type": "array",
      "required": false,
      "description": "Container for invoice items, The maximum number of items is 1,000.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountingCode",
          "label": "Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code associated with the invoice item.\n",
          "section": "Account Settings"
        },
        {
          "name": "adjustmentLiabilityAccountingCode",
          "label": "Adjustment Liability Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for adjustment liability. \n      \n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled. \n",
          "section": "Account Settings"
        },
        {
          "name": "adjustmentRevenueAccountingCode",
          "label": "Adjustment Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for adjustment revenue. \n      \n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled. \n",
          "section": "Account Settings"
        },
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": false,
          "description": "The amount of the invoice item. \n\n- For tax-inclusive invoice items, the amount indicates the invoice item amount including tax. \n- For tax-exclusive invoice items, the amount indicates the invoice item amount excluding tax.\n",
          "section": "Additional Fields"
        },
        {
          "name": "bookingReference",
          "label": "Booking Reference",
          "type": "string",
          "required": false,
          "description": "The booking reference of the invoice item.  \n\n\n**Note**: This field is only available if `id` is null.\n",
          "section": "Additional Fields"
        },
        {
          "name": "chargeDate",
          "label": "Charge Date",
          "type": "date",
          "required": false,
          "description": "The date when the invoice item is charged, in `yyyy-mm-dd hh:mm:ss` format.\n",
          "section": "Additional Fields"
        },
        {
          "name": "chargeName",
          "label": "Charge Name",
          "type": "string",
          "required": false,
          "description": "The name of the charge associated with the invoice item. \n\nThis field is required if the `productRatePlanChargeId` field is not specified in the request.\n",
          "section": "Account Settings"
        },
        {
          "name": "contractAssetAccountingCode",
          "label": "Contract Asset Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for contract asset. \n      \n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled. \n",
          "section": "Account Settings"
        },
        {
          "name": "contractLiabilityAccountingCode",
          "label": "Contract Liability Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for contract liability. \n      \n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled. \n",
          "section": "Account Settings"
        },
        {
          "name": "contractRecognizedRevenueAccountingCode",
          "label": "Contract Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for contract recognized revenue. \n      \n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled. \n",
          "section": "Account Settings"
        },
        {
          "name": "deferredRevenueAccountingCode",
          "label": "Deferred Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for the deferred revenue, such as Monthly Recurring Liability.\n\n**Note:** This field is only available if you have Zuora Finance enabled.\n",
          "section": "Account Settings"
        },
        {
          "name": "delete",
          "label": "Delete",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether to delete the existing invoice item.\n\n\n**Note**: Set this field to `true` and specify an item `id` to delete an item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "The description of the invoice item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "discountItems",
          "label": "Discount Items",
          "type": "array",
          "required": false,
          "description": "Container for discount items. The maximum number of discount items is 10.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "accountingCode",
              "label": "Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code associated with the discount item.\n",
              "section": "Account Settings"
            },
            {
              "name": "adjustmentLiabilityAccountingCode",
              "label": "Adjustment Liability Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for adjustment liability.\n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "adjustmentRevenueAccountingCode",
              "label": "Adjustment Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for adjustment revenue.\n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "amount",
              "label": "Amount",
              "type": "string",
              "required": true,
              "description": "The amount of the discount item.\n- Should be a negative number. For example, `-10`.\n- Always a fixed amount no matter whether the discount charge associated with the discount item uses the [fixed-amount model or percentage model](https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/B_Charge_Models/B_Discount_Charge_Models#Fixed_amount_model_and_percentage_model).\n- For tax-exclusive discount items, this amount indicates the discount item amount excluding tax.\n- For tax-inclusive discount items, this amount indicates the discount item amount including tax.\n",
              "section": "Additional Fields"
            },
            {
              "name": "bookingReference",
              "label": "Booking Reference",
              "type": "string",
              "required": false,
              "description": "The booking reference of the discount item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "chargeDate",
              "label": "Charge Date",
              "type": "date",
              "required": false,
              "description": "The date when the discount item is charged, in `yyyy-mm-dd hh:mm:ss` format.\n",
              "section": "Additional Fields"
            },
            {
              "name": "chargeName",
              "label": "Charge Name",
              "type": "string",
              "required": false,
              "description": "The name of the charge associated with the discount item.\nThis field is required if the `productRatePlanChargeId` field is not specified in the request.\n",
              "section": "Account Settings"
            },
            {
              "name": "contractAssetAccountingCode",
              "label": "Contract Asset Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for contract asset.\n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "contractLiabilityAccountingCode",
              "label": "Contract Liability Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for contract liability.\n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "contractRecognizedRevenueAccountingCode",
              "label": "Contract Recognized Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for contract recognized revenue.\n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "deferredRevenueAccountingCode",
              "label": "Deferred Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the deferred revenue, such as Monthly Recurring Liability.\n**Note:** This field is only available if you have Zuora Finance enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "description",
              "label": "Description",
              "type": "string",
              "required": false,
              "description": "The description of the discount item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "description": "The unique ID of the discount item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "itemType",
              "label": "Item Type",
              "type": "string",
              "required": false,
              "description": "The type of the discount item.\n",
              "section": "Additional Fields"
            },
            {
              "name": "purchaseOrderNumber",
              "label": "Purchase Order Number",
              "type": "string",
              "required": false,
              "description": "The purchase order number associated with the discount item.\n",
              "section": "Account Settings"
            },
            {
              "name": "recognizedRevenueAccountingCode",
              "label": "Recognized Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.\n**Note:** This field is only available if you have Zuora Finance enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "revRecCode",
              "label": "Rev Rec Code",
              "type": "string",
              "required": false,
              "description": "The revenue recognition code.\n",
              "section": "Additional Fields"
            },
            {
              "name": "revRecTriggerCondition",
              "label": "Rev Rec Trigger Condition",
              "type": "string",
              "required": false,
              "description": "The date when revenue recognition is triggered.\n",
              "enum": [
                "ContractEffectiveDate",
                "ServiceActivationDate",
                "CustomerAcceptanceDate"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "revenueRecognitionRuleName",
              "label": "Revenue Recognition Rule Name",
              "type": "string",
              "required": false,
              "description": "The name of the revenue recognition rule governing the revenue schedule.\n**Note:** This field is only available if you have Zuora Finance enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "sku",
              "label": "Sku",
              "type": "string",
              "required": false,
              "description": "The SKU of the invoice item. The SKU of the discount item must be different from the SKU of any existing product.\n",
              "section": "Additional Fields"
            },
            {
              "name": "unbilledReceivablesAccountingCode",
              "label": "Unbilled Receivables Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for unbilled receivables.\n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.\n",
              "section": "Account Settings"
            },
            {
              "name": "unitPrice",
              "label": "Unit Price",
              "type": "string",
              "required": false,
              "description": "The per-unit price of the discount item.\nIf the discount charge associated with the discount item uses the percentage model, the unit price will display as a percentage amount in PDF. For example: if unit price is 5.00, it will display as 5.00% in PDF.\n",
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
              "description": "Status of the invoice item's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "SyncDate__NS",
              "label": "Sync Date N S",
              "type": "string",
              "required": false,
              "description": "Date when the invoice item was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
              "maxLength": 255,
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "excludeItemBillingFromRevenueAccounting",
          "label": "Exclude Item Billing From Revenue Accounting",
          "type": "boolean",
          "required": false,
          "description": "The flag to exclude the invoice item from revenue accounting.\n\n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled. \n",
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the invoice item.\n- Specify this field when updating or deleting an existing memo item. \n- Do not specify this field when creating a memo item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "itemType",
          "label": "Item Type",
          "type": "string",
          "required": false,
          "description": "The type of the invoice item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanChargeId",
          "label": "Product Rate Plan Charge Id",
          "type": "string",
          "required": false,
          "description": "The ID of the product rate plan charge that the invoice item is created from. \n\nIf you specify the ID of a product rate plan charge in this field, no matter whether the following fields are specified with values, the following fields use the values from the corresponding product rate plan charge instead of the specified values:\n  - `chargeName`\n  - `sku`\n  - `uom`\n  - `taxCode`\n  - `taxMode`\n  - `accountingCode`\n  - `deferredRevenueAccountingCode`\n  - `recognizedRevenueAccountingCode`\n\n\n**Note**: Do not specify the invoice item `id` when specifying this field. \n",
          "section": "Additional Fields"
        },
        {
          "name": "purchaseOrderNumber",
          "label": "Purchase Order Number",
          "type": "string",
          "required": false,
          "description": "The purchase order number associated the invoice item.\n",
          "section": "Account Settings"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "string",
          "required": false,
          "description": "The number of units for the invoice item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "recognizedRevenueAccountingCode",
          "label": "Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges.\n\n**Note:** This field is only available if you have Zuora Finance enabled.\n",
          "section": "Account Settings"
        },
        {
          "name": "revRecCode",
          "label": "Rev Rec Code",
          "type": "string",
          "required": false,
          "description": "The revenue recognition code.\n",
          "section": "Additional Fields"
        },
        {
          "name": "revRecTriggerCondition",
          "label": "Rev Rec Trigger Condition",
          "type": "string",
          "required": false,
          "description": "The date when revenue recognition is triggered.\n",
          "enum": [
            "ContractEffectiveDate",
            "ServiceActivationDate",
            "CustomerAcceptanceDate"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "revenueRecognitionRuleName",
          "label": "Revenue Recognition Rule Name",
          "type": "string",
          "required": false,
          "description": "The name of the revenue recognition rule governing the revenue schedule.\n\n**Note:** This field is only available if you have Zuora Finance enabled.\n",
          "section": "Account Settings"
        },
        {
          "name": "serviceEndDate",
          "label": "Service End Date",
          "type": "date",
          "required": false,
          "description": "The service end date of the invoice item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "serviceStartDate",
          "label": "Service Start Date",
          "type": "date",
          "required": false,
          "description": "The service start date of the invoice item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "sku",
          "label": "Sku",
          "type": "string",
          "required": false,
          "description": "The SKU of the invoice item. The SKU of the invoice item must be different from the SKU of any existing product.\n",
          "section": "Additional Fields"
        },
        {
          "name": "taxCode",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "description": "The tax code identifies which tax rules and tax rates to apply to the invoice item.\n\n**Note:** \n- This field is only available if you have Taxation enabled.\n- If the values of both `taxCode` and `taxMode` fields are changed to `null` when updating a standalone invoice, the corresponding `invoiceItems` > `taxItems` field and its nested fields specified in the creation request will be removed.\n",
          "section": "Tax Settings"
        },
        {
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.\n\n**Note:** \n- This field is only available if you have Taxation enabled.\n- If the values of both `taxCode` and `taxMode` fields are changed to `null` when updating a standalone invoice, the corresponding `invoiceItems` > `taxItems` field and its nested fields specified in the creation request will be removed.\n",
          "enum": [
            "TaxInclusive",
            "TaxExclusive"
          ],
          "section": "Tax Settings"
        },
        {
          "name": "unbilledReceivablesAccountingCode",
          "label": "Unbilled Receivables Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for unbilled receivables. \n      \n**Note**: This field is only available if you have the Billing - Revenue Integration feature enabled. \n",
          "section": "Account Settings"
        },
        {
          "name": "unitPrice",
          "label": "Unit Price",
          "type": "string",
          "required": false,
          "description": "The per-unit price of the invoice item.\n",
          "section": "Additional Fields"
        },
        {
          "name": "uom",
          "label": "Uom",
          "type": "string",
          "required": false,
          "description": "The unit of measure.\n",
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
          "description": "Status of the invoice item's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SyncDate__NS",
          "label": "Sync Date N S",
          "type": "string",
          "required": false,
          "description": "Date when the invoice item was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
          "maxLength": 255,
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "templateId",
      "label": "Template Id",
      "type": "string",
      "required": false,
      "description": "The ID of the invoice template associated with the invoice.\n\n**Note**: This field is only available if you have the <a\nhref=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\"\ntarget=\"_blank\">Flexible Billing Attributes</a> feature enabled.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "description": "Whether the invoice was transferred to an external accounting system.\n",
      "enum": [
        "Processing",
        "Yes",
        "Error",
        "Ignore"
      ],
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
