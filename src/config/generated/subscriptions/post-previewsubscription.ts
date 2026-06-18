import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_previewsubscriptionEndpoint: ApiEndpoint = {
  "id": "post-previewsubscription",
  "name": "Preview a subscription",
  "description": "The REST API reference describes how to create a new subscription in preview mode. This call does not require a valid customer account. It can be used to show potential new customers a preview of a subscription with complete details and charges before creating an account, or to let existing customers preview a subscription with all charges before committing.",
  "method": "POST",
  "path": "/v1/subscriptions/preview",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "description": "Customer account number or ID. You must specify the account information either in this field or in the `previewAccountInfo` field with the following conditions: * If you already have a customer account, specify the account number or ID in this field. * If you do not have a customer account, provide account information in the `previewAccountInfo` field.",
      "section": "Account Settings"
    },
    {
      "name": "invoiceOwnerAccountKey",
      "label": "Invoice Owner Account Key",
      "type": "string",
      "required": false,
      "description": "Invoice owner account number or ID. **Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).",
      "section": "Account Settings"
    },
    {
      "name": "previewAccountInfo",
      "label": "Preview Account Info",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "billCycleDay",
          "label": "Bill Cycle Day",
          "type": "number",
          "required": true,
          "description": "The account's bill cycle day (BCD), when bill runs generate invoices for the account. Specify any day of the month (`1`-`31`, where `31` = end-of-month), or `0` for auto-set.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "billToContact",
          "label": "Bill To Contact",
          "type": "object",
          "required": true,
          "description": "Container for bill-to contact information of this account.",
          "fields": [
            {
              "name": "city",
              "label": "City",
              "type": "string",
              "required": false,
              "description": "The city of the bill-to address. The value should be 40 characters or less.",
              "section": "Additional Fields"
            },
            {
              "name": "country",
              "label": "Country",
              "type": "string",
              "required": false,
              "description": "The country of the bill-to address. The value must be a valid country name or abbreviation. **Note:** You must specify this field if you are using Zuora Tax for this account.",
              "section": "Additional Fields"
            },
            {
              "name": "county",
              "label": "County",
              "type": "string",
              "required": false,
              "description": "The county of the bill-to address. The value should be 32 characters or less.",
              "section": "Additional Fields"
            },
            {
              "name": "state",
              "label": "State",
              "type": "string",
              "required": false,
              "description": "The state of the bill-to address. The value must be a valid subregion (state or province) name or code. For more information, see View subregions of a specific country or region. **Note:** You must specify this field if you are using Zuora Tax for this account and the country is `USA` or `Canada`.",
              "section": "Additional Fields"
            },
            {
              "name": "taxRegion",
              "label": "Tax Region",
              "type": "string",
              "required": false,
              "description": "If using Zuora Tax, a region string as optionally defined in your tax rules.",
              "section": "Tax Settings"
            },
            {
              "name": "zipCode",
              "label": "Zip Code",
              "type": "string",
              "required": false,
              "description": "The zip code of the bill-to address. The value should be 20 characters or less.",
              "section": "Additional Fields"
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": true,
          "description": "A currency as defined in Billing Settings.",
          "section": "Additional Fields"
        },
        {
          "name": "Class__NS",
          "label": "Class N S",
          "type": "string",
          "required": false,
          "description": "Value of the Class field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "CustomerType__NS",
          "label": "Customer Type N S",
          "type": "string",
          "required": false,
          "description": "Value of the Customer Type field for the corresponding customer account in NetSuite. The Customer Type field is used when the customer account is created in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "enum": [
            "Company",
            "Individual"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "Department__NS",
          "label": "Department N S",
          "type": "string",
          "required": false,
          "description": "Value of the Department field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
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
          "description": "Status of the account's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "Location__NS",
          "label": "Location N S",
          "type": "string",
          "required": false,
          "description": "Value of the Location field for the corresponding customer account in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "Subsidiary__NS",
          "label": "Subsidiary N S",
          "type": "string",
          "required": false,
          "description": "Value of the Subsidiary field for the corresponding customer account in NetSuite. The Subsidiary field is required if you use NetSuite OneWorld. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SyncDate__NS",
          "label": "Sync Date N S",
          "type": "string",
          "required": false,
          "description": "Date when the account was sychronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "maxLength": 255,
          "section": "Additional Fields"
        },
        {
          "name": "SynctoNetSuite__NS",
          "label": "Syncto Net Suite N S",
          "type": "string",
          "required": false,
          "description": "Specifies whether the account should be synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).",
          "enum": [
            "Yes",
            "No"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Account Settings"
    },
    {
      "name": "contractEffectiveDate",
      "label": "Contract Effective Date",
      "type": "date",
      "required": true,
      "description": "Effective contract date for this subscription, as yyyy-mm-dd.",
      "section": "Additional Fields"
    },
    {
      "name": "customerAcceptanceDate",
      "label": "Customer Acceptance Date",
      "type": "date",
      "required": false,
      "description": "The date on which the services or products within a subscription have been accepted by the customer, as yyyy-mm-dd. Default value is dependent on the value of other fields. See **Notes** section for more details.",
      "section": "Additional Fields"
    },
    {
      "name": "includeExistingDraftDocItems",
      "label": "Include Existing Draft Doc Items",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether to include draft invoice items in subscription previews. Values are: * `true` (default). Includes draft invoice items in the preview result. * `false`. Excludes draft invoice items in the preview result. **Note**: This field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `207.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
      "section": "Additional Fields"
    },
    {
      "name": "initialTerm",
      "label": "Initial Term",
      "type": "number",
      "required": false,
      "description": "Duration of the first term of the subscription, in whole months. If `termType` is `TERMED`, then this field is required, and the value must be greater than `0`. If `termType` is `EVERGREEN`, this field is ignored.",
      "section": "Additional Fields"
    },
    {
      "name": "initialTermPeriodType",
      "label": "Initial Term Period Type",
      "type": "string",
      "required": false,
      "description": "The period type of the initial term. Supported values are: * `Month` * `Year` * `Day` * `Week` The default period type is `Month`.",
      "section": "Additional Fields"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "required": false,
      "description": "The notes for the subscription.",
      "maxLength": 1000,
      "section": "Additional Fields"
    },
    {
      "name": "previewType",
      "label": "Preview Type",
      "type": "string",
      "required": false,
      "description": "The type of preview you will receive. **Note**: If your API minor version is earlier than `206.0` or you specify the `Zuora-Version` header for this request to `206.0` or earlier, the following values are supported for the `previewType` field: - `InvoiceItem` (default) - `ChargeMetrics` - `InvoiceItemChargeMetrics`",
      "defaultValue": "LegalDoc",
      "enum": [
        "LegalDoc",
        "ChargeMetrics",
        "LegalDocChargeMetrics"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "subscribeToRatePlans",
      "label": "Subscribe To Rate Plans",
      "type": "array",
      "required": true,
      "description": "Container for one or more rate plans for this subscription.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "chargeOverrides",
          "label": "Charge Overrides",
          "type": "array",
          "required": false,
          "description": "This optional container is used to override the quantity of one or more product rate plan charges for this subscription.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amendedByOrderOn",
              "label": "Amended By Order On",
              "type": "string",
              "required": false,
              "description": "The date when the rate plan charge is amended through an order or amendment. This field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.",
              "section": "Additional Fields"
            },
            {
              "name": "applyDiscountTo",
              "label": "Apply Discount To",
              "type": "string",
              "required": false,
              "description": "Specifies the type of charges that you want a specific discount to apply to. Values: * `ONETIME` * `RECURRING` * `USAGE` * `ONETIMERECURRING` * `ONETIMEUSAGE` * `RECURRINGUSAGE` * `ONETIMERECURRINGUSAGE`",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "billCycleDay",
              "label": "Bill Cycle Day",
              "type": "string",
              "required": false,
              "description": "Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month the customer is billed. Values: `1`-`31`",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billCycleType",
              "label": "Bill Cycle Type",
              "type": "string",
              "required": false,
              "description": "Specifies how to determine the billing day for the charge. When this field is set to `SpecificDayofMonth`, set the `BillCycleDay` field. When this field is set to `SpecificDayofWeek`, set the `weeklyBillCycleDay` field. Values: * `DefaultFromCustomer` * `SpecificDayofMonth` * `SubscriptionStartDay` * `ChargeTriggerDay` * `SpecificDayofWeek`",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingPeriod",
              "label": "Billing Period",
              "type": "string",
              "required": false,
              "description": "Billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD). Values: * `Month` * `Quarter` * `Semi_Annual` * `Annual` * `Eighteen_Months` * `Two_Years` * `Three_Years` * `Five_Years` * `Specific_Months` * `Subscription_Term` * `Week` * `Specific_Weeks`",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingPeriodAlignment",
              "label": "Billing Period Alignment",
              "type": "string",
              "required": false,
              "description": "Aligns charges within the same subscription if multiple charges begin on different dates. Values: * `AlignToCharge` * `AlignToSubscriptionStart` * `AlignToTermStart`",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingTiming",
              "label": "Billing Timing",
              "type": "string",
              "required": false,
              "description": "Billing timing for the charge for recurring charge types. Not avaliable for one time, usage, and discount charges. Values: * `IN_ADVANCE` (default) * `IN_ARREARS`",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "chargeModelConfiguration",
              "label": "Charge Model Configuration",
              "type": "object",
              "required": false,
              "description": "Container for charge model configuration data. **Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
              "fields": [
                {
                  "name": "customFieldPerUnitRate",
                  "label": "Custom Field Per Unit Rate",
                  "type": "string",
                  "required": false,
                  "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "customFieldTotalAmount",
                  "label": "Custom Field Total Amount",
                  "type": "string",
                  "required": false,
                  "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. This field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                  "section": "Additional Fields"
                },
                {
                  "name": "formula",
                  "label": "Formula",
                  "type": "string",
                  "required": false,
                  "description": "The pricing formula to calculate actual rating amount for each usage record. This field is only available for the usage-based charges that use the Multi-Attribute Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "discountAmount",
              "label": "Discount Amount",
              "type": "number",
              "required": false,
              "description": "Specifies the amount of fixed-amount discount.",
              "section": "Additional Fields"
            },
            {
              "name": "discountLevel",
              "label": "Discount Level",
              "type": "string",
              "required": false,
              "description": "Specifies if the discount applies to the product rate plan only, the entire subscription, or to any activity in the account. Values: * `rateplan` * `subscription` * `account`",
              "section": "Additional Fields"
            },
            {
              "name": "discountPercentage",
              "label": "Discount Percentage",
              "type": "number",
              "required": false,
              "description": "Percentage of discount for a percentage discount.",
              "section": "Additional Fields"
            },
            {
              "name": "endDateCondition",
              "label": "End Date Condition",
              "type": "string",
              "required": false,
              "description": "Defines when the charge ends after the charge trigger date. If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date. Values: * `Subscription_End` * `Fixed_Period` * `Specific_End_Date` * `One_Time`",
              "section": "Additional Fields"
            },
            {
              "name": "excludeItemBillingFromRevenueAccounting",
              "label": "Exclude Item Billing From Revenue Accounting",
              "type": "boolean",
              "required": false,
              "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.",
              "defaultValue": false,
              "section": "Account Settings"
            },
            {
              "name": "excludeItemBookingFromRevenueAccounting",
              "label": "Exclude Item Booking From Revenue Accounting",
              "type": "boolean",
              "required": false,
              "description": "The flag to exclude rate plan charges from revenue accounting. **Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.",
              "defaultValue": false,
              "section": "Account Settings"
            },
            {
              "name": "includedUnits",
              "label": "Included Units",
              "type": "number",
              "required": false,
              "description": "Specifies the number of units in the base set of units for this charge. Must be >=`0`.",
              "section": "Additional Fields"
            },
            {
              "name": "isAllocationEligible",
              "label": "Is Allocation Eligible",
              "type": "boolean",
              "required": false,
              "description": "This field is used to identify if the charge segment is allocation eligible in revenue recognition. **Note**: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.",
              "section": "Additional Fields"
            },
            {
              "name": "isUnbilled",
              "label": "Is Unbilled",
              "type": "boolean",
              "required": false,
              "description": "This field is used to dictate how to perform the accounting during revenue recognition. **Note**: The field is only available if you have the Order to Revenue feature enabled. To enable this field, submit a request at Zuora Global Support.",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "listPriceBase",
              "label": "List Price Base",
              "type": "string",
              "required": false,
              "description": "The list price base for the product rate plan charge. Values: * `Per_Billing_Period` * `Per_Month` * `Per_Week` * `Per_Year` * `Per_Specific_Months`",
              "section": "Additional Fields"
            },
            {
              "name": "number",
              "label": "Number",
              "type": "string",
              "required": false,
              "description": "Unique number that identifies the charge. Max 50 characters. System-generated if not provided.",
              "section": "Account Settings"
            },
            {
              "name": "numberOfPeriods",
              "label": "Number Of Periods",
              "type": "number",
              "required": false,
              "description": "Specifies the number of periods to use when calculating charges in an overage smoothing charge model.",
              "section": "Account Settings"
            },
            {
              "name": "originalOrderDate",
              "label": "Original Order Date",
              "type": "date",
              "required": false,
              "description": "The date when the rate plan charge is created through an order or amendment. This field is not updatable. This field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.",
              "section": "Additional Fields"
            },
            {
              "name": "overagePrice",
              "label": "Overage Price",
              "type": "number",
              "required": false,
              "description": "Price for units over the allowed amount.",
              "section": "Additional Fields"
            },
            {
              "name": "overageUnusedUnitsCreditOption",
              "label": "Overage Unused Units Credit Option",
              "type": "string",
              "required": false,
              "description": "Determines whether to credit the customer with unused units of usage. Values: * `NoCredit` * `CreditBySpecificRate`",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "price",
              "label": "Price",
              "type": "number",
              "required": false,
              "description": "Price for units in the subscription rate plan.",
              "section": "Additional Fields"
            },
            {
              "name": "priceChangeOption",
              "label": "Price Change Option",
              "type": "string",
              "required": false,
              "description": "Applies an automatic price change when a termed subscription is renewed. The Billing Admin setting **Enable Automatic Price Change When Subscriptions are Renewed?** must be set to Yes to use this field. Values: * `NoChange` (default) * `SpecificPercentageValue` * `UseLatestProductCatalogPricing`",
              "section": "Additional Fields"
            },
            {
              "name": "priceIncreasePercentage",
              "label": "Price Increase Percentage",
              "type": "number",
              "required": false,
              "description": "Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`. Value must be a decimal between `-100` and `100`.",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeId",
              "label": "Product Rate Plan Charge Id",
              "type": "string",
              "required": true,
              "description": "ID of a product rate-plan charge for this subscription.",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeNumber",
              "label": "Product Rate Plan Charge Number",
              "type": "string",
              "required": false,
              "description": "Number of a product rate-plan charge for this subscription.",
              "section": "Account Settings"
            },
            {
              "name": "quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "description": "Number of units. Must be a decimal >=`0`. When using `chargeOverrides` for creating subscriptions with recurring charge types, the `quantity` field must be populated when the charge model is \"Tiered Pricing\" or \"Volume Pricing\". It is not required for \"Flat Fee Pricing\" charge model.",
              "section": "Additional Fields"
            },
            {
              "name": "ratingGroup",
              "label": "Rating Group",
              "type": "string",
              "required": false,
              "description": "Specifies a rating group based on which usage records are rated. Possible values: - `ByBillingPeriod` (default): The rating is based on all the usages in a billing period. - `ByUsageStartDate`: The rating is based on all the usages on the same usage start date. - `ByUsageRecord`: The rating is based on each usage record. - `ByUsageUpload`: The rating is based on all the usages in a uploaded usage file (`.xls` or `.csv`). - `ByGroupId`: The rating is based on all the usages in a custom group. **Note:** - The `ByBillingPeriod` value can be applied for all charge models. - The `ByUsageStartDate`, `ByUsageRecord`, and `ByUsageUpload` values can only be applied for per unit, volume pricing, and tiered pricing charge models. - The `ByGroupId` value is only available if you have the Active Rating feature enabled. - Use this field only for Usage charges. One-Time Charges and Recurring Charges return `NULL`.",
              "section": "Additional Fields"
            },
            {
              "name": "specificBillingPeriod",
              "label": "Specific Billing Period",
              "type": "number",
              "required": false,
              "description": "Specifies the number of month or week for the charges billing period. Required if you set the value of the `billingPeriod` field to `Specific_Months` or `Specific_Weeks`.",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "specificEndDate",
              "label": "Specific End Date",
              "type": "date",
              "required": false,
              "description": "Defines when the charge ends after the charge trigger date. **Note**: * This field is only applicable when the `endDateCondition` field is set to `Specific_End_Date`. * If the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.",
              "section": "Additional Fields"
            },
            {
              "name": "specificListPriceBase",
              "label": "Specific List Price Base",
              "type": "number",
              "required": false,
              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`. **Note**: - This field is available only if you have the Annual List Price feature enabled. - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.",
              "section": "Additional Fields"
            },
            {
              "name": "tiers",
              "label": "Tiers",
              "type": "array",
              "required": false,
              "description": "Container for Volume, Tiered, or Tiered with Overage charge models. Supports the following charge types: * One-time * Recurring * Usage-based",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "endingUnit",
                  "label": "Ending Unit",
                  "type": "number",
                  "required": false,
                  "description": "End number of a range of units for the tier.",
                  "section": "Additional Fields"
                },
                {
                  "name": "price",
                  "label": "Price",
                  "type": "number",
                  "required": true,
                  "description": "Price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.",
                  "section": "Additional Fields"
                },
                {
                  "name": "priceFormat",
                  "label": "Price Format",
                  "type": "string",
                  "required": false,
                  "description": "Indicates if pricing is a flat fee or is per unit. Values: * `FlatFee` * `PerUnit`",
                  "section": "Additional Fields"
                },
                {
                  "name": "startingUnit",
                  "label": "Starting Unit",
                  "type": "number",
                  "required": false,
                  "description": "Starting number of a range of units for the tier.",
                  "section": "Additional Fields"
                },
                {
                  "name": "tier",
                  "label": "Tier",
                  "type": "number",
                  "required": true,
                  "description": "Unique number that identifies the tier that the price applies to.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "triggerDate",
              "label": "Trigger Date",
              "type": "date",
              "required": false,
              "description": "Specifies when to start billing the customer for the charge. Required if the `triggerEvent` field is set to `USD`.",
              "section": "Additional Fields"
            },
            {
              "name": "triggerEvent",
              "label": "Trigger Event",
              "type": "string",
              "required": false,
              "description": "Specifies when to start billing the customer for the charge. Values: * `UCE` * `USA` * `UCA` * `USD`",
              "section": "Additional Fields"
            },
            {
              "name": "unusedUnitsCreditRates",
              "label": "Unused Units Credit Rates",
              "type": "number",
              "required": false,
              "description": "Specifies the rate to credit a customer for unused units of usage. This field applies only for overage charge models when the `OverageUnusedUnitsCreditOption` field is set to `CreditBySpecificRate`.",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "upToPeriods",
              "label": "Up To Periods",
              "type": "number",
              "required": false,
              "description": "Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends. **Note:** You must use this field together with the `upToPeriodsType` field to specify the time period. * This field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. * If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.",
              "section": "Additional Fields"
            },
            {
              "name": "upToPeriodsType",
              "label": "Up To Periods Type",
              "type": "string",
              "required": false,
              "description": "The period type used to define when the charge ends. Values: * `Billing_Periods` * `Days` * `Weeks` * `Months` * `Years` You must use this field together with the `upToPeriods` field to specify the time period. This field is applicable only when the `endDateCondition` field is set to `Fixed_Period`.",
              "section": "Additional Fields"
            },
            {
              "name": "weeklyBillCycleDay",
              "label": "Weekly Bill Cycle Day",
              "type": "string",
              "required": false,
              "description": "Specifies which day of the week is the bill cycle day (BCD) for the charge. Values: * `Sunday` * `Monday` * `Tuesday` * `Wednesday` * `Thursday` * `Friday` * `Saturday`",
              "section": "Invoice & Document Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "externalCatalogPlanId",
          "label": "External Catalog Plan Id",
          "type": "string",
          "required": false,
          "description": "An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. **Note:** If both `externalCatalogPlanId` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.",
          "section": "Additional Fields"
        },
        {
          "name": "externalIdSourceSystem",
          "label": "External Id Source System",
          "type": "string",
          "required": false,
          "description": "The ID of the external source system. You can use this field and `externalCatalogPlanId` to specify a product rate plan that is imported from an external system. **Note:** If both `externalCatalogPlanId`, `externalIdSourceSystem` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.",
          "section": "Additional Fields"
        },
        {
          "name": "externallyManagedPlanId",
          "label": "Externally Managed Plan Id",
          "type": "string",
          "required": false,
          "description": "Indicates the unique identifier for the rate plan purchased on a third-party store. This field is used to represent a subscription rate plan created through third-party stores.",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanId",
          "label": "Product Rate Plan Id",
          "type": "string",
          "required": false,
          "description": "ID of a product rate plan for this subscription.",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanNumber",
          "label": "Product Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a product rate plan for this subscription.",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "description": "Date through which to calculate charges if an invoice is generated, as yyyy-mm-dd. Default is current date. **Note:** This field is only available if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `207.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).",
      "section": "Additional Fields"
    },
    {
      "name": "termStartDate",
      "label": "Term Start Date",
      "type": "date",
      "required": false,
      "description": "The date on which the subscription term begins, as yyyy-mm-dd. If this is a renewal subscription, this date is different from the subscription start date.",
      "section": "Additional Fields"
    },
    {
      "name": "termType",
      "label": "Term Type",
      "type": "string",
      "required": true,
      "description": "Possible values are: `TERMED`, `EVERGREEN`.",
      "section": "Additional Fields"
    },
    {
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
      "required": false,
      "description": "The date of the billing document, in `yyyy-mm-dd` format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos. - If this field is specified, the specified date is used as the billing document date. - If this field is not specified, the date specified in the `targetDate` is used as the billing document date.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "serviceActivationDate",
      "label": "Service Activation Date",
      "type": "date",
      "required": false,
      "description": "The date on which the services or products within a subscription have been activated and access has been provided to the customer, as yyyy-mm-dd. Default value is dependent on the value of other fields. See **Notes** section for more details.",
      "section": "Tax Settings"
    },
    {
      "name": "skipTax",
      "label": "Skip Tax",
      "type": "boolean",
      "required": false,
      "description": "If set to `true`, the system will bypass the tax calculation during subscription preview.",
      "defaultValue": false,
      "section": "Tax Settings"
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
