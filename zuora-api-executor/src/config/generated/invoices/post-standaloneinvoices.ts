import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_standaloneinvoicesEndpoint: ApiEndpoint = {
  "id": "post-standaloneinvoices",
  "name": "Create standalone invoices",
  "description": "Creates multiple standalone invoices for selling physical goods, services or other items on a non-recurring basis to your subscription customers.",
  "method": "POST",
  "path": "/v1/invoices/batch",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "invoices",
      "label": "Invoices",
      "type": "array",
      "required": false,
      "description": "Container for standalone invoices.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "accountId",
          "label": "Account Id",
          "type": "string",
          "required": false,
          "description": "The ID of the account associated with the invoice. \n\nYou must specify either `accountNumber` or `accountId` for a customer account. If both of them are specified, they must refer to the same customer account.\n",
          "section": "Account Settings"
        },
        {
          "name": "accountNumber",
          "label": "Account Number",
          "type": "string",
          "required": false,
          "description": "The Number of the account associated with the invoice.\nYou must specify either `accountNumber` or `accountId` for a customer account. If both of them are specified, they must refer to the same customer account.\n",
          "section": "Account Settings"
        },
        {
          "name": "autoPay",
          "label": "Auto Pay",
          "type": "boolean",
          "required": false,
          "description": "Whether invoices are automatically picked up for processing in the corresponding payment run.\n",
          "defaultValue": false,
          "section": "Payment Settings"
        },
        {
          "name": "billToContact",
          "label": "Bill To Contact",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "address1",
              "label": "Address1",
              "type": "string",
              "required": false,
              "description": "First address line, 255 characters or less.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second address line, 255 characters or less.\n",
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "City, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the ship-to or sold-to contact to calculate tax. A bill-to contact may be used if no ship-to or sold-to contact is provided.\n",
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "County; 32 characters or less. May optionally be used by Zuora Tax to calculate county tax.\n",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "description": "Fax phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "description": "First name, 100 characters or less.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "description": "Home phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": true,
              "description": "Last name, 100 characters or less.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "mobilePhone",
              "label": "Mobile Phone",
              "type": "string",
              "required": false,
              "description": "Mobile phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "description": "Nickname for this contact\n",
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "description": "Other phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "personalEmail",
              "label": "Personal Email",
              "type": "email",
              "required": false,
              "description": "Personal email address.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "State; must be a valid subregion (state or province) name or code.\nFor more information, see <a\nhref=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\"\ntarget=\"_blank\">View subregions of a specific country or region</a>.\nIf using Zuora Tax, be aware that Zuora Tax requires a\nstate (in the US) or province (in Canada) in this field for the\nship-to or sold-to contact to calculate tax, and that a bill-to contact may be\nused if no ship-to or sold-to contact is provided.\n",
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.\n",
              "section": "Tax Settings"
            },
            {
              "name": "workEmail",
              "label": "Work Email",
              "type": "string",
              "required": false,
              "description": "Work email address, 80 characters or less.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "description": "Work phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": false,
              "description": "Zip code, 20 characters or less.\n",
              "maxLength": 20,
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "billToContactId",
          "label": "Bill To Contact Id",
          "type": "string",
          "required": false,
          "description": "The ID of the bill-to contact associated with the invoice. This field is mutually exclusive with the `billToContact` field.\n\n**Note**: If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "comments",
          "label": "Comments",
          "type": "string",
          "required": false,
          "description": "Comments about the invoice.\n",
          "section": "Additional Fields"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": false,
          "description": "The code of a currency as defined in Billing Settings through the Zuora UI.\n\nIf you do not specify a currency during standalone invoice creation, the default account currency is applied. The currency that you specify in the request must be configured and activated in Billing Settings.\n**Note**: This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Multiple_Currencies\" target=\"_blank\">Multiple Currencies</a> feature enabled.\n",
          "section": "Additional Fields"
        },
        {
          "name": "customRates",
          "label": "Custom Rates",
          "type": "array",
          "required": false,
          "description": "It contains Home currency and Reporting currency custom rates currencies. The maximum number of items is 2 (you can pass the Home currency item or Reporting currency item or both).\n      \n**Note**:\n  \n- This field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n- You cannot set the custom rates, if both the **Automatically include additional Currency Conversion information in data source exports** option and **Fx data** feature are enabled.\n- Invoice, InvoiceItem, and TaxationItem will utilize the provided custom Fx rate to convert amounts from the transactional currency to the home currency.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "currency",
              "label": "Currency",
              "type": "string",
              "required": true,
              "description": "The currency code for either Reporting or Home currency.\n\n**Note**: This field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or later.\n",
              "section": "Additional Fields"
            },
            {
              "name": "customFxRate",
              "label": "Custom Fx Rate",
              "type": "number",
              "required": true,
              "description": "The Custom FX conversion rate between Home/Reporting and Transactional currency items.\n\n**Note**: This field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or later.\n",
              "section": "Additional Fields"
            },
            {
              "name": "rateDate",
              "label": "Rate Date",
              "type": "date",
              "required": false,
              "description": "The date on which a particular currency rate is fixed or obtained on.\n\n**Note**: This field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `224.0` or later.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "dueDate",
          "label": "Due Date",
          "type": "date",
          "required": false,
          "description": "The date by which the payment for this invoice is due, in `yyyy-mm-dd` format.\n",
          "section": "Additional Fields"
        },
        {
          "name": "invoiceDate",
          "label": "Invoice Date",
          "type": "date",
          "required": true,
          "description": "The date that appears on the invoice being created, in `yyyy-mm-dd` format. The value cannot fall in a closed accounting period.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "invoiceItems",
          "label": "Invoice Items",
          "type": "array",
          "required": false,
          "description": "Container for invoice items. The maximum number of invoice items is 1,000.\n\nYou must have corresponding billing permissions to create invoice items from existing product rate plan charges or new charges. For more information about billing permissions, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Platform/System_Management/Administrator_Settings/User_Roles/d_Billing_Roles\" target=\"_blank\">Billing Roles</a>.\n- To create an invoice item from an existing charge, you must have the **Create Standalone Invoice With Product Catalog** permission and specify the charge ID in the `productRatePlanChargeId` field.\n- To create an invoice item from a new charge, you must have the **Create Standalone Invoice Without Product Catalog** permission without specifying the `productRatePlanChargeId` field.\n\n**Note**: For the \"Create a standalone invoice\" and \"Create standalone invoices\" operations, note the following:\n  - If tax has been calculated by an external tax engine, you need to create a standalone invoice with both `invoiceItems` and `taxItems`. The `taxItems` corresponds to the tax information processed by this external tax engine. In this case, you should not specify the `taxMode` and `taxCode` nested fields of the `invoiceItems` field. Instead, you need to specify the `taxMode` and `taxCode` nested fields of the `taxItems` field. You need to specify the `taxMode` field as `TaxExclusive`.\n  - If tax has not been calculated by an external tax engine, you can create a standalone invoice only with `invoiceItems`, and decide whether Zuora includes the tax in the quoted charge price and invoice item by specifying the `taxMode` nested field of the `invoiceItems` field as either `TaxExclusive` or `TaxInclusive`. Meanwhile, you need to specify the `taxCode` field, indicating the charge price and invoice item are taxable.\n",
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
              "required": true,
              "description": "The amount of the invoice item. \n\n- For tax-inclusive invoice items, the amount indicates the invoice item amount including tax. \n- For tax-exclusive invoice items, the amount indicates the invoice item amount excluding tax.\n",
              "section": "Additional Fields"
            },
            {
              "name": "bookingReference",
              "label": "Booking Reference",
              "type": "string",
              "required": false,
              "description": "The booking reference of the invoice item.\n",
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
                  "name": "accountsReceivableAccountingCode",
                  "label": "Accounts Receivable Accounting Code",
                  "type": "string",
                  "required": false,
                  "description": "The accounting code for accounts receivable.\n",
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
                  "type": "number",
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
                  "description": "The name of the charge associated with the discount item.\nThis field is required if the `productRatePlanChargeId` field is not specified in the request body.\n",
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
                  "name": "itemType",
                  "label": "Item Type",
                  "type": "string",
                  "required": false,
                  "description": "The type of the discount item.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "productRatePlanChargeId",
                  "label": "Product Rate Plan Charge Id",
                  "type": "string",
                  "required": false,
                  "description": "The ID of the product rate plan charge that the discount item is created from.\n\nIf you specify a value for the `productRatePlanChargeId` field in the request, Zuora directly copies the values of the following fields from the corresponding product rate plan charge, regardless of the values specified in the request body:\n- `chargeName`\n- `sku`\n\nIf you specify a value for the `productRatePlanChargeId` field in the request, Zuora directly copies the values of the following fields from the corresponding discount charge that [uses discount specific accounting codes, rule and segment to manage revenue](https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/B_Charge_Models/Manage_Discount_Charges#Use_discount_specific_accounting_codes.2C_rule_and_segment_to_manage_revenue), regardless of the values specified in the request body:\n- `accountingCode`\n- `deferredRevenueAccountingCode`\n- `recognizedRevenueAccountingCode`\n\nIf you specify a value for the `productRatePlanChargeId` field in the request, Zuora directly copies the values of the following fields from the corresponding invoice item charge if the discount charge DOES NOT [use discount specific accounting codes, rule and segment to manage revenue](https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/B_Charge_Models/Manage_Discount_Charges#Use_discount_specific_accounting_codes.2C_rule_and_segment_to_manage_revenue), regardless of the values specified in the request body:\n- `accountingCode`\n- `deferredRevenueAccountingCode`\n- `recognizedRevenueAccountingCode`\n",
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
                  "name": "taxItems",
                  "label": "Tax Items",
                  "type": "array",
                  "required": false,
                  "description": "Container for taxation items. The maximum number of taxation items is 5.\n\n**Note**: This field is only available only if you have Taxation enabled.\n",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "exemptAmount",
                      "label": "Exempt Amount",
                      "type": "string",
                      "required": false,
                      "description": "The calculated tax amount excluded due to the exemption.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "jurisdiction",
                      "label": "Jurisdiction",
                      "type": "string",
                      "required": false,
                      "description": "The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "locationCode",
                      "label": "Location Code",
                      "type": "string",
                      "required": false,
                      "description": "The identifier for the location based on the value of the `taxCode` field.\n",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "name",
                      "label": "Name",
                      "type": "string",
                      "required": true,
                      "description": "The name of taxation.\n",
                      "section": "Account Settings"
                    },
                    {
                      "name": "taxAmount",
                      "label": "Tax Amount",
                      "type": "string",
                      "required": true,
                      "description": "The amount of the taxation item in the invoice item.\n",
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxCode",
                      "label": "Tax Code",
                      "type": "string",
                      "required": false,
                      "description": "The tax code identifies which tax rules and tax rates to apply to a specific invoice item.\n",
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxCodeDescription",
                      "label": "Tax Code Description",
                      "type": "string",
                      "required": false,
                      "description": "The description of the tax code.\n",
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxDate",
                      "label": "Tax Date",
                      "type": "date",
                      "required": true,
                      "description": "The date that the tax is applied to the invoice item, in `yyyy-mm-dd` format.\n",
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxMode",
                      "label": "Tax Mode",
                      "type": "string",
                      "required": true,
                      "description": "The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.\n",
                      "enum": [
                        "TaxInclusive",
                        "TaxExclusive"
                      ],
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxRate",
                      "label": "Tax Rate",
                      "type": "string",
                      "required": true,
                      "description": "The tax rate applied to the invoice item.\n",
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxRateDescription",
                      "label": "Tax Rate Description",
                      "type": "string",
                      "required": false,
                      "description": "The description of the tax rate.\n",
                      "section": "Tax Settings"
                    },
                    {
                      "name": "taxRateType",
                      "label": "Tax Rate Type",
                      "type": "string",
                      "required": true,
                      "description": "The type of the tax rate applied to the invoice item.\n",
                      "enum": [
                        "Percentage",
                        "FlatFee"
                      ],
                      "section": "Tax Settings"
                    }
                  ],
                  "section": "Tax Settings"
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
                  "type": "number",
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
              "section": "Account Settings"
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
              "description": "The ID of the product rate plan charge that the invoice item is created from.\n\nYou must have the **Create Standalone Invoice With Product Catalog** permission to create an invoice item from an existing charge.\n\nIf you specify a value for the `productRatePlanChargeId` field in the request, Zuora directly copies the values of the following fields from the corresponding product rate plan charge, regardless of the values specified in the request body:\n- `chargeName`\n- `sku`\n- `uom`\n- `taxCode`\n- `taxMode`\n- `accountingCode`\n- `deferredRevenueAccountingCode` \n- `recognizedRevenueAccountingCode`\n",
              "section": "Additional Fields"
            },
            {
              "name": "purchaseOrderNumber",
              "label": "Purchase Order Number",
              "type": "string",
              "required": false,
              "description": "The purchase order number associated with the invoice item.\n",
              "section": "Account Settings"
            },
            {
              "name": "quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "description": "The number of units for the invoice item.\n",
              "defaultValue": 1,
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
              "required": true,
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
              "description": "The tax code identifies which tax rules and tax rates to apply to the invoice item.\n\n**Note**: This field is only available only if you have Taxation enabled.\n",
              "section": "Tax Settings"
            },
            {
              "name": "taxItems",
              "label": "Tax Items",
              "type": "array",
              "required": false,
              "description": "Container for taxation items. The maximum number of taxation items is 5.\n\n**Note**: This field is only available only if you have Taxation enabled.\n",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "exemptAmount",
                  "label": "Exempt Amount",
                  "type": "string",
                  "required": false,
                  "description": "The calculated tax amount excluded due to the exemption.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "jurisdiction",
                  "label": "Jurisdiction",
                  "type": "string",
                  "required": false,
                  "description": "The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "locationCode",
                  "label": "Location Code",
                  "type": "string",
                  "required": false,
                  "description": "The identifier for the location based on the value of the `taxCode` field.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": true,
                  "description": "The name of taxation.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "taxAmount",
                  "label": "Tax Amount",
                  "type": "string",
                  "required": true,
                  "description": "The amount of the taxation item in the invoice item.\n",
                  "section": "Tax Settings"
                },
                {
                  "name": "taxCode",
                  "label": "Tax Code",
                  "type": "string",
                  "required": false,
                  "description": "The tax code identifies which tax rules and tax rates to apply to a specific invoice item.\n",
                  "section": "Tax Settings"
                },
                {
                  "name": "taxCodeDescription",
                  "label": "Tax Code Description",
                  "type": "string",
                  "required": false,
                  "description": "The description of the tax code.\n",
                  "section": "Tax Settings"
                },
                {
                  "name": "taxDate",
                  "label": "Tax Date",
                  "type": "date",
                  "required": true,
                  "description": "The date that the tax is applied to the invoice item, in `yyyy-mm-dd` format.\n",
                  "section": "Tax Settings"
                },
                {
                  "name": "taxMode",
                  "label": "Tax Mode",
                  "type": "string",
                  "required": true,
                  "description": "The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.\n",
                  "enum": [
                    "TaxInclusive",
                    "TaxExclusive"
                  ],
                  "section": "Tax Settings"
                },
                {
                  "name": "taxRate",
                  "label": "Tax Rate",
                  "type": "string",
                  "required": true,
                  "description": "The tax rate applied to the invoice item.\n",
                  "section": "Tax Settings"
                },
                {
                  "name": "taxRateDescription",
                  "label": "Tax Rate Description",
                  "type": "string",
                  "required": false,
                  "description": "The description of the tax rate.\n",
                  "section": "Tax Settings"
                },
                {
                  "name": "taxRateType",
                  "label": "Tax Rate Type",
                  "type": "string",
                  "required": true,
                  "description": "The type of the tax rate applied to the invoice item.\n",
                  "enum": [
                    "Percentage",
                    "FlatFee"
                  ],
                  "section": "Tax Settings"
                }
              ],
              "section": "Tax Settings"
            },
            {
              "name": "taxMode",
              "label": "Tax Mode",
              "type": "string",
              "required": false,
              "description": "The tax mode of the invoice item, indicating whether the amount of the invoice item includes tax.\n\n**Note**: This field is only available only if you have Taxation enabled.\n",
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
              "type": "number",
              "required": false,
              "description": "The per-unit price of the invoice item. To pass Level 3 data to the gateway, this field is required and must be greater than zero.\n",
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
          "name": "invoiceNumber",
          "label": "Invoice Number",
          "type": "string",
          "required": false,
          "description": "A customized invoice number with the following format requirements:\n- Max length: 32 characters\n- Acceptable characters: a-z,A-Z,0-9,-,_,\n\nPurely numerical prefixes or prefixes ending with a number are supported for standalone invoices. For example, you can use `202310000300`, `2003`, `INV202310000300`, or `2023-09-100009785` as invoice numbers.\n\nThe value must be unique in the system, otherwise it may cause issues with bill runs and subscribe/amend. Check out [things to note and troubleshooting steps](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/IA_Invoices/Unified_Invoicing/Import_external_invoices_as_standalone_invoices?#Customizing_invoice_number). \n",
          "section": "Account Settings"
        },
        {
          "name": "paymentTerm",
          "label": "Payment Term",
          "type": "string",
          "required": false,
          "description": "The ID or name of the payment term associated with the invoice. For example, `Net 30`. The payment term determines the due dates of invoices.\n\n**Note**: If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body.\n",
          "section": "Payment Settings"
        },
        {
          "name": "sequenceSet",
          "label": "Sequence Set",
          "type": "string",
          "required": false,
          "description": "The ID or name of the sequence set associated with the invoice.\n\n**Note**: If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body.\n",
          "section": "Additional Fields"
        },
        {
          "name": "shipToContact",
          "label": "Ship To Contact",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "address1",
              "label": "Address1",
              "type": "string",
              "required": false,
              "description": "First address line, 255 characters or less.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second address line, 255 characters or less.\n",
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "City, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the ship-to or sold-to contact to calculate tax. A bill-to contact may be used if no ship-to or sold-to contact is provided.\n",
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "County; 32 characters or less. May optionally be used by Zuora Tax to calculate county tax.\n",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "description": "Fax phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "description": "First name, 100 characters or less.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "description": "Home phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": true,
              "description": "Last name, 100 characters or less.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "mobilePhone",
              "label": "Mobile Phone",
              "type": "string",
              "required": false,
              "description": "Mobile phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "description": "Nickname for this contact\n",
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "description": "Other phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "personalEmail",
              "label": "Personal Email",
              "type": "email",
              "required": false,
              "description": "Personal email address.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "State; must be a valid subregion (state or province) name or code.\nFor more information, see <a\nhref=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\"\ntarget=\"_blank\">View subregions of a specific country or region</a>.\nIf using Zuora Tax, be aware that Zuora Tax requires a\nstate (in the US) or province (in Canada) in this field for the\nship-to or sold-to contact to calculate tax, and that a bill-to contact may be\nused if no ship-to or sold-to contact is provided.\n",
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.\n",
              "section": "Tax Settings"
            },
            {
              "name": "workEmail",
              "label": "Work Email",
              "type": "string",
              "required": false,
              "description": "Work email address, 80 characters or less.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "description": "Work phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": false,
              "description": "Zip code, 20 characters or less.\n",
              "maxLength": 20,
              "section": "Additional Fields"
            }
          ],
          "section": "Contact Information"
        },
        {
          "name": "shipToContactId",
          "label": "Ship To Contact Id",
          "type": "string",
          "required": false,
          "description": "The ID of the ship-to contact associated with the invoice. This field is mutually exclusive with the `shipToContact` field.\n**Note**: If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body.\n",
          "section": "Contact Information"
        },
        {
          "name": "shipToSameAsBillTo",
          "label": "Ship To Same As Bill To",
          "type": "boolean",
          "required": false,
          "description": "Whether the ship-to contact and bill-to contact are the same entity. This field is mutually exclusive with the `shipToContact` and `shipToContactId` fields.\n\nThe created invoice has the same bill-to contact and ship-to contact entity only when all the following conditions are met in the request body:\n\n- This field is set to `true`. \n- A bill-to contact or bill-to contact ID is specified.\n- Neither ship-to contact nor ship-to contact ID is specified.\n\n**Note**: If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body.\n",
          "defaultValue": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "soldToContact",
          "label": "Sold To Contact",
          "type": "object",
          "required": false,
          "fields": [
            {
              "name": "address1",
              "label": "Address1",
              "type": "string",
              "required": false,
              "description": "First address line, 255 characters or less.\n",
              "maxLength": 255,
              "section": "Additional Fields"
            },
            {
              "name": "address2",
              "label": "Address2",
              "type": "string",
              "required": false,
              "description": "Second address line, 255 characters or less.\n",
              "section": "Additional Fields"
            },
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "City, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "Country; must be a valid country name or abbreviation. If using Zuora Tax, you must specify a country in the ship-to or sold-to contact to calculate tax. A bill-to contact may be used if no ship-to or sold-to contact is provided.\n",
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "County; 32 characters or less. May optionally be used by Zuora Tax to calculate county tax.\n",
              "maxLength": 32,
              "section": "Additional Fields"
            },
            {
              "name": "fax",
              "label": "Fax",
              "type": "string",
              "required": false,
              "description": "Fax phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "firstName",
              "label": "First Name",
              "type": "string",
              "required": true,
              "description": "First name, 100 characters or less.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "homePhone",
              "label": "Home Phone",
              "type": "string",
              "required": false,
              "description": "Home phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "lastName",
              "label": "Last Name",
              "type": "string",
              "required": true,
              "description": "Last name, 100 characters or less.\n",
              "maxLength": 100,
              "section": "Account Settings"
            },
            {
              "name": "mobilePhone",
              "label": "Mobile Phone",
              "type": "string",
              "required": false,
              "description": "Mobile phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "nickname",
              "label": "Nickname",
              "type": "string",
              "required": false,
              "description": "Nickname for this contact\n",
              "section": "Account Settings"
            },
            {
              "name": "otherPhone",
              "label": "Other Phone",
              "type": "string",
              "required": false,
              "description": "Other phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "otherPhoneType",
              "label": "Other Phone Type",
              "type": "string",
              "required": false,
              "description": "Possible values are: `Work`, `Mobile`, `Home`, `Other`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "personalEmail",
              "label": "Personal Email",
              "type": "email",
              "required": false,
              "description": "Personal email address.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "State; must be a valid subregion (state or province) name or code.\nFor more information, see <a\nhref=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/A_Manage_countries_and_regions#View_subregions_of_a_specific_country_or_region\"\ntarget=\"_blank\">View subregions of a specific country or region</a>.\nIf using Zuora Tax, be aware that Zuora Tax requires a\nstate (in the US) or province (in Canada) in this field for the\nship-to or sold-to contact to calculate tax, and that a bill-to contact may be\nused if no ship-to or sold-to contact is provided.\n",
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "If using Zuora Tax, a region string as optionally defined in your tax rules. Not required.\n",
              "section": "Tax Settings"
            },
            {
              "name": "workEmail",
              "label": "Work Email",
              "type": "string",
              "required": false,
              "description": "Work email address, 80 characters or less.\n",
              "maxLength": 80,
              "section": "Communication Settings"
            },
            {
              "name": "workPhone",
              "label": "Work Phone",
              "type": "string",
              "required": false,
              "description": "Work phone number, 40 characters or less.\n",
              "maxLength": 40,
              "section": "Additional Fields"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": false,
              "description": "Zip code, 20 characters or less.\n",
              "maxLength": 20,
              "section": "Additional Fields"
            }
          ],
          "section": "Contact Information"
        },
        {
          "name": "soldToContactId",
          "label": "Sold To Contact Id",
          "type": "string",
          "required": false,
          "description": "The ID of the sold-to contact associated with the invoice. This field is mutually exclusive with the `soldToContact` field.\n\n**Note**: If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body.\n",
          "section": "Contact Information"
        },
        {
          "name": "soldToSameAsBillTo",
          "label": "Sold To Same As Bill To",
          "type": "boolean",
          "required": false,
          "description": "Whether the sold-to contact and bill-to contact are the same entity. This field is mutually exclusive with the `soldToContact` and `soldToContactId` fields.\n\nThe created invoice has the same bill-to contact and sold-to contact entity only when all the following conditions are met in the request body:\n\n- This field is set to `true`. \n- A bill-to contact or bill-to contact ID is specified.\n- Neither sold-to contact nor sold-to contact ID is specified.\n\n**Note**: If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body.\n",
          "defaultValue": false,
          "section": "Invoice & Document Settings"
        },
        {
          "name": "status",
          "label": "Status",
          "type": "string",
          "required": false,
          "description": "The status of invoice. By default, the invoice status is Draft.\n\nWhen creating an invoice, if you set this field to `Posted`, the invoice is created and posted directly.\n",
          "defaultValue": "Draft",
          "enum": [
            "Draft",
            "Posted"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "templateId",
          "label": "Template Id",
          "type": "string",
          "required": false,
          "description": "The ID of the invoice template associated with the invoice.\n\n**Note**: If you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes\" target=\"_blank\">Flexible Billing Attributes</a> feature disabled, this field is unavailable in the request body.\n",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "transferredToAccounting",
          "label": "Transferred To Accounting",
          "type": "string",
          "required": false,
          "enum": [
            "Processing",
            "Error",
            "Ignore",
            "Yes",
            "No"
          ],
          "section": "Account Settings"
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
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "useSingleTransaction",
      "label": "Use Single Transaction",
      "type": "boolean",
      "required": false,
      "description": "Whether a batch request is handled with a single transaction.\n\n- `true` indicates that a batch request will be handled with a single transaction.\n- `false`  indicates that the standalone invoices to be created in a batch request will be handled with separated transactions.\n\nIf the field is set to `false`, a failure in the batch request will not cause the whole request to fail, so you have to retry the whole batch request.\n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
