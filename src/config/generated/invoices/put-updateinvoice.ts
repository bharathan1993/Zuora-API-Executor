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
      "description": "The ID or number of the invoice. For example, 2c92c8955bd63cc1015bd7c151af02ab or INV-0000001."
    }
  ],
  "bodyFields": [
    {
      "name": "autoPay",
      "label": "Auto Pay",
      "type": "boolean",
      "required": false,
      "description": "Whether invoices are automatically picked up for processing in the corresponding payment run. By default, invoices are automatically picked up for processing in the corresponding payment run.",
      "section": "Payment Settings"
    },
    {
      "name": "comments",
      "label": "Comments",
      "type": "string",
      "required": false,
      "description": "Additional information related to the invoice that a Zuora user added to the invoice.",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "dueDate",
      "label": "Due Date",
      "type": "date",
      "required": false,
      "description": "The date by which the payment for this invoice is due.",
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
      "description": "Status of the invoice's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the invoice was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "invoiceDate",
      "label": "Invoice Date",
      "type": "date",
      "required": false,
      "description": "The new invoice date of the invoice. The new invoice date cannot fall in a closed accounting period. You can only specify `invoiceDate` or `dueDate` in one request. Otherwise, an error occurs.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceItems",
      "label": "Invoice Items",
      "type": "array",
      "required": false,
      "description": "Container for invoice items, The maximum number of items is 1,000.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountingCode",
          "label": "Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code associated with the invoice item.",
          "section": "Account Settings"
        },
        {
          "name": "adjustmentLiabilityAccountingCode",
          "label": "Adjustment Liability Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for adjustment liability. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "section": "Account Settings"
        },
        {
          "name": "adjustmentRevenueAccountingCode",
          "label": "Adjustment Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for adjustment revenue. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "section": "Account Settings"
        },
        {
          "name": "amount",
          "label": "Amount",
          "type": "number",
          "required": false,
          "description": "The amount of the invoice item. - For tax-inclusive invoice items, the amount indicates the invoice item amount including tax. - For tax-exclusive invoice items, the amount indicates the invoice item amount excluding tax.",
          "section": "Additional Fields"
        },
        {
          "name": "bookingReference",
          "label": "Booking Reference",
          "type": "string",
          "required": false,
          "description": "The booking reference of the invoice item. **Note**: This field is only available if `id` is null.",
          "section": "Additional Fields"
        },
        {
          "name": "chargeDate",
          "label": "Charge Date",
          "type": "date",
          "required": false,
          "description": "The date when the invoice item is charged, in `yyyy-mm-dd hh:mm:ss` format.",
          "section": "Additional Fields"
        },
        {
          "name": "chargeName",
          "label": "Charge Name",
          "type": "string",
          "required": false,
          "description": "The name of the charge associated with the invoice item. This field is required if the `productRatePlanChargeId` field is not specified in the request.",
          "section": "Account Settings"
        },
        {
          "name": "contractAssetAccountingCode",
          "label": "Contract Asset Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for contract asset. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "section": "Account Settings"
        },
        {
          "name": "contractLiabilityAccountingCode",
          "label": "Contract Liability Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for contract liability. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "section": "Account Settings"
        },
        {
          "name": "contractRecognizedRevenueAccountingCode",
          "label": "Contract Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for contract recognized revenue. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "section": "Account Settings"
        },
        {
          "name": "deferredRevenueAccountingCode",
          "label": "Deferred Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for the deferred revenue, such as Monthly Recurring Liability. **Note:** This field is only available if you have Zuora Finance enabled.",
          "section": "Account Settings"
        },
        {
          "name": "delete",
          "label": "Delete",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether to delete the existing invoice item. **Note**: Set this field to `true` and specify an item `id` to delete an item.",
          "section": "Additional Fields"
        },
        {
          "name": "discountItems",
          "label": "Discount Items",
          "type": "array",
          "required": false,
          "description": "Container for discount items. The maximum number of discount items is 10.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "accountingCode",
              "label": "Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code associated with the discount item.",
              "section": "Account Settings"
            },
            {
              "name": "adjustmentLiabilityAccountingCode",
              "label": "Adjustment Liability Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for adjustment liability. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
              "section": "Account Settings"
            },
            {
              "name": "adjustmentRevenueAccountingCode",
              "label": "Adjustment Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for adjustment revenue. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
              "section": "Account Settings"
            },
            {
              "name": "amount",
              "label": "Amount",
              "type": "string",
              "required": true,
              "description": "The amount of the discount item. - Should be a negative number. For example, `-10`. - Always a fixed amount no matter whether the discount charge associated with the discount item uses the [fixed-amount model or percentage model](https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/B_Charge_Models/B_Discount_Charge_Models#Fixed_amount_model_and_percentage_model). - For tax-exclusive discount items, this amount indicates the discount item amount excluding tax. - For tax-inclusive discount items, this amount indicates the discount item amount including tax.",
              "section": "Additional Fields"
            },
            {
              "name": "bookingReference",
              "label": "Booking Reference",
              "type": "string",
              "required": false,
              "description": "The booking reference of the discount item.",
              "section": "Additional Fields"
            },
            {
              "name": "chargeDate",
              "label": "Charge Date",
              "type": "date",
              "required": false,
              "description": "The date when the discount item is charged, in `yyyy-mm-dd hh:mm:ss` format.",
              "section": "Additional Fields"
            },
            {
              "name": "chargeName",
              "label": "Charge Name",
              "type": "string",
              "required": false,
              "description": "The name of the charge associated with the discount item. This field is required if the `productRatePlanChargeId` field is not specified in the request.",
              "section": "Account Settings"
            },
            {
              "name": "contractAssetAccountingCode",
              "label": "Contract Asset Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for contract asset. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
              "section": "Account Settings"
            },
            {
              "name": "contractLiabilityAccountingCode",
              "label": "Contract Liability Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for contract liability. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
              "section": "Account Settings"
            },
            {
              "name": "contractRecognizedRevenueAccountingCode",
              "label": "Contract Recognized Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for contract recognized revenue. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
              "section": "Account Settings"
            },
            {
              "name": "deferredRevenueAccountingCode",
              "label": "Deferred Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the deferred revenue, such as Monthly Recurring Liability. **Note:** This field is only available if you have Zuora Finance enabled.",
              "section": "Account Settings"
            },
            {
              "name": "id",
              "label": "Id",
              "type": "string",
              "required": false,
              "description": "The unique ID of the discount item.",
              "section": "Additional Fields"
            },
            {
              "name": "itemType",
              "label": "Item Type",
              "type": "string",
              "required": false,
              "description": "The type of the discount item.",
              "section": "Additional Fields"
            },
            {
              "name": "purchaseOrderNumber",
              "label": "Purchase Order Number",
              "type": "string",
              "required": false,
              "description": "The purchase order number associated with the discount item.",
              "section": "Account Settings"
            },
            {
              "name": "recognizedRevenueAccountingCode",
              "label": "Recognized Revenue Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. **Note:** This field is only available if you have Zuora Finance enabled.",
              "section": "Account Settings"
            },
            {
              "name": "revRecCode",
              "label": "Rev Rec Code",
              "type": "string",
              "required": false,
              "description": "The revenue recognition code.",
              "section": "Additional Fields"
            },
            {
              "name": "revRecTriggerCondition",
              "label": "Rev Rec Trigger Condition",
              "type": "string",
              "required": false,
              "description": "The date when revenue recognition is triggered.",
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
              "description": "The name of the revenue recognition rule governing the revenue schedule. **Note:** This field is only available if you have Zuora Finance enabled.",
              "section": "Account Settings"
            },
            {
              "name": "sku",
              "label": "Sku",
              "type": "string",
              "required": false,
              "description": "The SKU of the invoice item. The SKU of the discount item must be different from the SKU of any existing product.",
              "section": "Additional Fields"
            },
            {
              "name": "unbilledReceivablesAccountingCode",
              "label": "Unbilled Receivables Accounting Code",
              "type": "string",
              "required": false,
              "description": "The accounting code for unbilled receivables. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
              "section": "Account Settings"
            },
            {
              "name": "unitPrice",
              "label": "Unit Price",
              "type": "string",
              "required": false,
              "description": "The per-unit price of the discount item. If the discount charge associated with the discount item uses the percentage model, the unit price will display as a percentage amount in PDF. For example: if unit price is 5.00, it will display as 5.00% in PDF.",
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
              "description": "Status of the invoice item's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "SyncDate__NS",
              "label": "Sync Date N S",
              "type": "string",
              "required": false,
              "description": "Date when the invoice item was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
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
          "description": "The flag to exclude the invoice item from revenue accounting. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "defaultValue": false,
          "section": "Account Settings"
        },
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": false,
          "description": "The unique ID of the invoice item. - Specify this field when updating or deleting an existing memo item. - Do not specify this field when creating a memo item.",
          "section": "Additional Fields"
        },
        {
          "name": "itemType",
          "label": "Item Type",
          "type": "string",
          "required": false,
          "description": "The type of the invoice item.",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanChargeId",
          "label": "Product Rate Plan Charge Id",
          "type": "string",
          "required": false,
          "description": "The ID of the product rate plan charge that the invoice item is created from. If you specify the ID of a product rate plan charge in this field, no matter whether the following fields are specified with values, the following fields use the values from the corresponding product rate plan charge instead of the specified values: - `chargeName` - `sku` - `uom` - `taxCode` - `taxMode` - `accountingCode` - `deferredRevenueAccountingCode` - `recognizedRevenueAccountingCode` **Note**: Do not specify the invoice item `id` when specifying this field.",
          "section": "Additional Fields"
        },
        {
          "name": "purchaseOrderNumber",
          "label": "Purchase Order Number",
          "type": "string",
          "required": false,
          "description": "The purchase order number associated the invoice item.",
          "section": "Account Settings"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "string",
          "required": false,
          "description": "The number of units for the invoice item.",
          "section": "Additional Fields"
        },
        {
          "name": "recognizedRevenueAccountingCode",
          "label": "Recognized Revenue Accounting Code",
          "type": "string",
          "required": false,
          "description": "The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. **Note:** This field is only available if you have Zuora Finance enabled.",
          "section": "Account Settings"
        },
        {
          "name": "revRecCode",
          "label": "Rev Rec Code",
          "type": "string",
          "required": false,
          "description": "The revenue recognition code.",
          "section": "Additional Fields"
        },
        {
          "name": "revRecTriggerCondition",
          "label": "Rev Rec Trigger Condition",
          "type": "string",
          "required": false,
          "description": "The date when revenue recognition is triggered.",
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
          "description": "The name of the revenue recognition rule governing the revenue schedule. **Note:** This field is only available if you have Zuora Finance enabled.",
          "section": "Account Settings"
        },
        {
          "name": "serviceEndDate",
          "label": "Service End Date",
          "type": "date",
          "required": false,
          "description": "The service end date of the invoice item.",
          "section": "Additional Fields"
        },
        {
          "name": "serviceStartDate",
          "label": "Service Start Date",
          "type": "date",
          "required": false,
          "description": "The service start date of the invoice item.",
          "section": "Additional Fields"
        },
        {
          "name": "sku",
          "label": "Sku",
          "type": "string",
          "required": false,
          "description": "The SKU of the invoice item. The SKU of the invoice item must be different from the SKU of any existing product.",
          "section": "Additional Fields"
        },
        {
          "name": "taxCode",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "description": "The tax code identifies which tax rules and tax rates to apply to the invoice item. **Note:** - This field is only available if you have Taxation enabled. - If the values of both `taxCode` and `taxMode` fields are changed to `null` when updating a standalone invoice, the corresponding `invoiceItems` > `taxItems` field and its nested fields specified in the creation request will be removed.",
          "section": "Tax Settings"
        },
        {
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax. **Note:** - This field is only available if you have Taxation enabled. - If the values of both `taxCode` and `taxMode` fields are changed to `null` when updating a standalone invoice, the corresponding `invoiceItems` > `taxItems` field and its nested fields specified in the creation request will be removed.",
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
          "description": "The accounting code for unbilled receivables. **Note**: This field is only available if you have the Billing - Revenue Integration feature enabled.",
          "section": "Account Settings"
        },
        {
          "name": "unitPrice",
          "label": "Unit Price",
          "type": "string",
          "required": false,
          "description": "The per-unit price of the invoice item.",
          "section": "Additional Fields"
        },
        {
          "name": "uom",
          "label": "Uom",
          "type": "string",
          "required": false,
          "description": "The unit of measure.",
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
          "description": "Status of the invoice item's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SyncDate__NS",
          "label": "Sync Date N S",
          "type": "string",
          "required": false,
          "description": "Date when the invoice item was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
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
      "description": "The ID of the invoice template associated with the invoice. **Note**: This field is only available if you have the Flexible Billing Attributes feature enabled.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "transferredToAccounting",
      "label": "Transferred To Accounting",
      "type": "string",
      "required": false,
      "description": "Whether the invoice was transferred to an external accounting system.",
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
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
