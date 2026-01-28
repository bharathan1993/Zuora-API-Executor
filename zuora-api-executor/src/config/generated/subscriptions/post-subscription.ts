import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_subscriptionEndpoint: ApiEndpoint = {
  "id": "post-subscription",
  "name": "Create a subscription",
  "description": "This operation describes how to create a new subscription for an existing customer account.",
  "method": "POST",
  "path": "/v1/subscriptions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": true,
      "description": "Customer account number or ID\n",
      "section": "Account Settings"
    },
    {
      "name": "invoiceOwnerAccountKey",
      "label": "Invoice Owner Account Key",
      "type": "string",
      "required": false,
      "description": "Invoice owner account number or ID.\n\n**Note:** This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).\n",
      "section": "Account Settings"
    },
    {
      "name": "subscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": false,
      "description": "Subscription Number. The value can be up to 1000 characters.\n\nIf you do not specify a subscription number when creating a subscription, Zuora will generate a subscription number automatically.\n\nIf the account is created successfully, the subscription number is returned in the `subscriptionNumber` response field.\n",
      "section": "Account Settings"
    },
    {
      "name": "OpportunityName__QT",
      "label": "Opportunity Name Q T",
      "type": "string",
      "required": false,
      "description": "The unique identifier of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "QuoteNumber__QT",
      "label": "Quote Number Q T",
      "type": "string",
      "required": false,
      "description": "The unique identifier of the Quote. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
      "maxLength": 32,
      "section": "Account Settings"
    },
    {
      "name": "applicationOrder",
      "label": "Application Order",
      "type": "array",
      "required": false,
      "description": "The priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: `CreditMemo`, `UnappliedPayment`.\n\n**Note:**\n  - This field is valid only if the `applyCredit` field is set to `true`.\n  - If no value is specified for this field, the default priority order is used, [\"CreditMemo\", \"UnappliedPayment\"], to apply credit memos first and then apply unapplied payments.\n  - If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is `[\"CreditMemo\"]`, only credit memos are used to apply to invoices.\n",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "autoRenew",
      "label": "Auto Renew",
      "type": "boolean",
      "required": false,
      "description": "If true, this subscription automatically renews at the end of the subscription term.\n\nThis field is only required if the `termType` field is set to `TERMED`.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "contractEffectiveDate",
      "label": "Contract Effective Date",
      "type": "date",
      "required": true,
      "description": "Effective contract date for this subscription, as yyyy-mm-dd\n",
      "section": "Additional Fields"
    },
    {
      "name": "customerAcceptanceDate",
      "label": "Customer Acceptance Date",
      "type": "date",
      "required": false,
      "description": "The date on which the services or products within a subscription have been accepted by the customer, as yyyy-mm-dd.\n\nDefault value is dependent on the value of other fields. See **Notes** section for more details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "externallyManagedBy",
      "label": "Externally Managed By",
      "type": "string",
      "required": false,
      "description": "An enum field on the Subscription object to indicate the name of a third-party store. This field is used to represent subscriptions created through third-party stores.\n",
      "enum": [
        "Amazon",
        "Apple",
        "Google",
        "Roku"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "initialTerm",
      "label": "Initial Term",
      "type": "number",
      "required": false,
      "description": "The length of the period for the first subscription term. If `termType` is `TERMED`, then this field is required, and the value must be greater than `0`. If `termType` is `EVERGREEN`, this field is ignored.\n",
      "section": "Additional Fields"
    },
    {
      "name": "initialTermPeriodType",
      "label": "Initial Term Period Type",
      "type": "string",
      "required": false,
      "description": "The period type for the first subscription term.\n\nThis field is used with the `InitialTerm` field to specify the initial subscription term.\n\nValues are:\n\n* `Month` (default)\n* `Year`\n* `Day`\n* `Week`\n",
      "section": "Additional Fields"
    },
    {
      "name": "lastBookingDate",
      "label": "Last Booking Date",
      "type": "date",
      "required": false,
      "description": "The last booking date of the subscription object. This field is writable only when the subscription is newly created as a first version subscription. You can override the date value when creating a subscription through the Subscribe and Amend API or the subscription creation UI (non-Orders). Otherwise, the default value `today` is set per the user's timezone. The value of this field is as follows:\n* For a new subscription created by the [Subscribe and Amend APIs](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Migration_Guidance#Subscribe_and_Amend_APIs_to_Migrate), this field has the value of the subscription creation date.\n* For a subscription changed by an amendment, this field has the value of the amendment booking date.\n* For a subscription created or changed by an order, this field has the value of the order date. ",
      "section": "Additional Fields"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "required": false,
      "description": "The notes for the subscription.\n",
      "maxLength": 1000,
      "section": "Additional Fields"
    },
    {
      "name": "renewalSetting",
      "label": "Renewal Setting",
      "type": "string",
      "required": false,
      "description": "Specifies whether a termed subscription will remain termed or change to evergreen when it is renewed.\n\nValues:\n\n* `RENEW_WITH_SPECIFIC_TERM` (default)\n* `RENEW_TO_EVERGREEN`\n",
      "section": "Additional Fields"
    },
    {
      "name": "renewalTerm",
      "label": "Renewal Term",
      "type": "number",
      "required": true,
      "description": "The length of the period for the subscription renewal term. Default is `0`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "renewalTermPeriodType",
      "label": "Renewal Term Period Type",
      "type": "string",
      "required": false,
      "description": "The period type for the subscription renewal term.\n\nThis field is used with the `renewalTerm` field to specify the subscription renewal term.\n\nValues are:\n\n* `Month` (default)\n* `Year`\n* `Day`\n* `Week`\n",
      "section": "Additional Fields"
    },
    {
      "name": "subscribeToRatePlans",
      "label": "Subscribe To Rate Plans",
      "type": "array",
      "required": true,
      "description": "Container for one or more rate plans for this subscription.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "chargeOverrides",
          "label": "Charge Overrides",
          "type": "array",
          "required": false,
          "description": "This optional container is used to override the quantity of one or more product rate plan charges for this subscription.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amendedByOrderOn",
              "label": "Amended By Order On",
              "type": "string",
              "required": false,
              "description": "The date when the rate plan charge is amended through an order or amendment. This field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.\n",
              "section": "Additional Fields"
            },
            {
              "name": "applyDiscountTo",
              "label": "Apply Discount To",
              "type": "string",
              "required": false,
              "description": "Specifies the type of charges that you want a specific discount to apply to.\n\nValues:\n\n* `ONETIME`\n* `RECURRING`\n* `USAGE`\n* `ONETIMERECURRING`\n* `ONETIMEUSAGE`\n* `RECURRINGUSAGE`\n* `ONETIMERECURRINGUSAGE`\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "billCycleDay",
              "label": "Bill Cycle Day",
              "type": "string",
              "required": false,
              "description": "Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month the customer is billed.\n\nValues: `1`-`31`\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billCycleType",
              "label": "Bill Cycle Type",
              "type": "string",
              "required": false,
              "description": "Specifies how to determine the billing day for the charge. When this field is set to `SpecificDayofMonth`, set the `BillCycleDay` field. When this field is set to `SpecificDayofWeek`, set the `weeklyBillCycleDay` field.\n\nValues:\n\n* `DefaultFromCustomer`\n* `SpecificDayofMonth`\n* `SubscriptionStartDay`\n* `ChargeTriggerDay`\n* `SpecificDayofWeek`\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingPeriod",
              "label": "Billing Period",
              "type": "string",
              "required": false,
              "description": "Billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD).\nValues:\n\n* `Month`\n* `Quarter`\n* `Semi_Annual`\n* `Annual`\n* `Eighteen_Months`\n* `Two_Years`\n* `Three_Years`\n* `Five_Years`\n* `Specific_Months`\n* `Subscription_Term`\n* `Week`\n* `Specific_Weeks`\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingPeriodAlignment",
              "label": "Billing Period Alignment",
              "type": "string",
              "required": false,
              "description": "Aligns charges within the same subscription if multiple charges begin on different dates.\n\nValues:\n\n* `AlignToCharge`\n* `AlignToSubscriptionStart`\n* `AlignToTermStart`\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingTiming",
              "label": "Billing Timing",
              "type": "string",
              "required": false,
              "description": "Billing timing for the charge for recurring charge types. Not avaliable for one time, usage, and discount charges.\n\nValues:\n\n* `IN_ADVANCE` (default)\n* `IN_ARREARS`\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "chargeModelConfiguration",
              "label": "Charge Model Configuration",
              "type": "object",
              "required": false,
              "description": "Container for charge model configuration data.\n\n**Note**: This field is only available if you have the High Water Mark, Pre-Rated Pricing, or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
              "fields": [
                {
                  "name": "customFieldPerUnitRate",
                  "label": "Custom Field Per Unit Rate",
                  "type": "string",
                  "required": false,
                  "description": "The custom field that carries the per-unit rate for each usage record. For example, `perUnitAmount__c`.\n    \nThis field is only available for the usage-based charges that use the Pre-Rated Per Unit Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "customFieldTotalAmount",
                  "label": "Custom Field Total Amount",
                  "type": "string",
                  "required": false,
                  "description": "The custom field that carries the total amount to charge for a usage record. For example, `totalAmount__c`. \n    \nThis field is only available for the usage-based charges that use the Pre-Rated Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "formula",
                  "label": "Formula",
                  "type": "string",
                  "required": false,
                  "description": "The pricing formula to calculate actual rating amount for each usage record.\n\nThis field is only available for the usage-based charges that use the Multi-Attribute Pricing charge model. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "description",
              "label": "Description",
              "type": "string",
              "required": false,
              "description": "Description of the charge.\n",
              "section": "Additional Fields"
            },
            {
              "name": "discountAmount",
              "label": "Discount Amount",
              "type": "number",
              "required": false,
              "description": "Specifies the amount of fixed-amount discount.\n",
              "section": "Additional Fields"
            },
            {
              "name": "discountLevel",
              "label": "Discount Level",
              "type": "string",
              "required": false,
              "description": "Specifies if the discount applies to the product rate plan only, the entire subscription, or to any activity in the account.\n\nValues:\n\n* `rateplan`\n* `subscription`\n* `account`\n",
              "section": "Additional Fields"
            },
            {
              "name": "discountPercentage",
              "label": "Discount Percentage",
              "type": "number",
              "required": false,
              "description": "Percentage of discount for a percentage discount. \n",
              "section": "Additional Fields"
            },
            {
              "name": "endDateCondition",
              "label": "End Date Condition",
              "type": "string",
              "required": false,
              "description": "Defines when the charge ends after the charge trigger date. If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.\n\nValues:\n\n* `Subscription_End`\n* `Fixed_Period`\n* `Specific_End_Date`\n* `One_Time`\n",
              "section": "Additional Fields"
            },
            {
              "name": "excludeItemBillingFromRevenueAccounting",
              "label": "Exclude Item Billing From Revenue Accounting",
              "type": "boolean",
              "required": false,
              "description": "The flag to exclude rate plan charge related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.\n\n**Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.\n",
              "defaultValue": false,
              "section": "Account Settings"
            },
            {
              "name": "excludeItemBookingFromRevenueAccounting",
              "label": "Exclude Item Booking From Revenue Accounting",
              "type": "boolean",
              "required": false,
              "description": "The flag to exclude rate plan charges from revenue accounting.\n\n**Note**: This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled.\n",
              "defaultValue": false,
              "section": "Account Settings"
            },
            {
              "name": "includedUnits",
              "label": "Included Units",
              "type": "number",
              "required": false,
              "description": "Specifies the number of units in the base set of units for this charge. Must be >=`0`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "isAllocationEligible",
              "label": "Is Allocation Eligible",
              "type": "boolean",
              "required": false,
              "description": "This field is used to identify if the charge segment is allocation\neligible in revenue recognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
              "section": "Additional Fields"
            },
            {
              "name": "isUnbilled",
              "label": "Is Unbilled",
              "type": "boolean",
              "required": false,
              "description": "This field is used to dictate how to perform the accounting during\nrevenue recognition.\n\n\n**Note**: The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "listPriceBase",
              "label": "List Price Base",
              "type": "string",
              "required": false,
              "description": "The list price base for the product rate plan charge.\n\nValues:\n\n* `Per_Billing_Period`\n* `Per_Month`\n* `Per_Week`\n* `Per_Year`\n* `Per_Specific_Months`\n",
              "section": "Additional Fields"
            },
            {
              "name": "number",
              "label": "Number",
              "type": "string",
              "required": false,
              "description": "Unique number that identifies the charge. Max 50 characters. System-generated if not provided.\n",
              "section": "Account Settings"
            },
            {
              "name": "numberOfPeriods",
              "label": "Number Of Periods",
              "type": "number",
              "required": false,
              "description": "Specifies the number of periods to use when calculating charges in an overage smoothing charge model.\n",
              "section": "Account Settings"
            },
            {
              "name": "originalOrderDate",
              "label": "Original Order Date",
              "type": "date",
              "required": false,
              "description": "The date when the rate plan charge is created through an order or amendment. This field is not updatable.\n\nThis field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.\n",
              "section": "Additional Fields"
            },
            {
              "name": "overagePrice",
              "label": "Overage Price",
              "type": "number",
              "required": false,
              "description": "Price for units over the allowed amount.\n",
              "section": "Additional Fields"
            },
            {
              "name": "overageUnusedUnitsCreditOption",
              "label": "Overage Unused Units Credit Option",
              "type": "string",
              "required": false,
              "description": "Determines whether to credit the customer with unused units of usage.\n\nValues:\n\n* `NoCredit`\n* `CreditBySpecificRate`\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "price",
              "label": "Price",
              "type": "number",
              "required": false,
              "description": "Price for units in the subscription rate plan.\n",
              "section": "Additional Fields"
            },
            {
              "name": "priceChangeOption",
              "label": "Price Change Option",
              "type": "string",
              "required": false,
              "description": "Applies an automatic price change when a termed subscription is renewed. The Billing Admin setting **Enable Automatic Price Change When Subscriptions are Renewed?** must be set to Yes to use this field.\nValues:\n\n* `NoChange` (default)\n* `SpecificPercentageValue`\n* `UseLatestProductCatalogPricing`\n",
              "section": "Additional Fields"
            },
            {
              "name": "priceIncreasePercentage",
              "label": "Price Increase Percentage",
              "type": "number",
              "required": false,
              "description": "Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`. \n\nValue must be a decimal between `-100` and `100`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeId",
              "label": "Product Rate Plan Charge Id",
              "type": "string",
              "required": true,
              "description": "ID of a product rate-plan charge for this subscription.\n",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeNumber",
              "label": "Product Rate Plan Charge Number",
              "type": "string",
              "required": false,
              "description": "Number of a product rate-plan charge for this subscription.\n",
              "section": "Account Settings"
            },
            {
              "name": "quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "description": "Number of units. Must be a decimal >=`0`. \n\nWhen using `chargeOverrides` for creating subscriptions with recurring charge types, the `quantity` field must be populated when the charge model is \"Tiered Pricing\" or \"Volume Pricing\". It is not required for \"Flat Fee Pricing\" charge model.\n",
              "section": "Additional Fields"
            },
            {
              "name": "ratingGroup",
              "label": "Rating Group",
              "type": "string",
              "required": false,
              "description": "Specifies a rating group based on which usage records are rated.\n\nPossible values:\n\n- `ByBillingPeriod` (default): The rating is based on all the usages in a billing period.\n- `ByUsageStartDate`: The rating is based on all the usages on the same usage start date. \n- `ByUsageRecord`: The rating is based on each usage record.\n- `ByUsageUpload`: The rating is based on all the  usages in a uploaded usage file (`.xls` or `.csv`).\n- `ByGroupId`: The rating is based on all the usages in a custom group.\n\n**Note:** \n- The `ByBillingPeriod` value can be applied for all charge models. \n- The `ByUsageStartDate`, `ByUsageRecord`, and `ByUsageUpload` values can only be applied for per unit, volume pricing, and tiered pricing charge models. \n- The `ByGroupId` value is only available if you have the Active Rating feature enabled.\n- Use this field only for Usage charges. One-Time Charges and Recurring Charges return `NULL`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "specificBillingPeriod",
              "label": "Specific Billing Period",
              "type": "number",
              "required": false,
              "description": "Specifies the number of month or week for the charges billing period. Required if you set the value of the `billingPeriod` field to `Specific_Months` or `Specific_Weeks`.\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "specificEndDate",
              "label": "Specific End Date",
              "type": "date",
              "required": false,
              "description": "Defines when the charge ends after the charge trigger date.\n\n**Note**:\n\n* This field is only applicable when the `endDateCondition` field is set to `Specific_End_Date`.\n\n* If the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.\n",
              "section": "Additional Fields"
            },
            {
              "name": "specificListPriceBase",
              "label": "Specific List Price Base",
              "type": "number",
              "required": false,
              "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `listPriceBase` field to `Per_Specific_Months`.\n\n**Note**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - The value of this field is `null` if you do not set the value of the `listPriceBase` field to `Per_Specific_Months`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "tiers",
              "label": "Tiers",
              "type": "array",
              "required": false,
              "description": "Container for Volume, Tiered, or Tiered with Overage charge models. Supports the following charge types:\n\n* One-time\n* Recurring\n* Usage-based\n",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "endingUnit",
                  "label": "Ending Unit",
                  "type": "number",
                  "required": false,
                  "description": "End number of a range of units for the tier.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "price",
                  "label": "Price",
                  "type": "number",
                  "required": true,
                  "description": "Price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "priceFormat",
                  "label": "Price Format",
                  "type": "string",
                  "required": false,
                  "description": "Indicates if pricing is a flat fee or is per unit.\n\nValues:\n\n* `FlatFee`\n* `PerUnit`\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "startingUnit",
                  "label": "Starting Unit",
                  "type": "number",
                  "required": false,
                  "description": "Starting number of a range of units for the tier.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "tier",
                  "label": "Tier",
                  "type": "number",
                  "required": true,
                  "description": "Unique number that identifies the tier that the price applies to.\n",
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
              "description": "Specifies when to start billing the customer for the charge. Required if the `triggerEvent` field is set to `USD`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "triggerEvent",
              "label": "Trigger Event",
              "type": "string",
              "required": false,
              "description": "Specifies when to start billing the customer for the charge.\n\nValues:\n\n* `UCE`\n* `USA`\n* `UCA`\n* `USD`\n",
              "section": "Additional Fields"
            },
            {
              "name": "unusedUnitsCreditRates",
              "label": "Unused Units Credit Rates",
              "type": "number",
              "required": false,
              "description": "Specifies the rate to credit a customer for unused units of usage. This field applies only for overage charge models when the `OverageUnusedUnitsCreditOption` field is set to `CreditBySpecificRate`.\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "upToPeriods",
              "label": "Up To Periods",
              "type": "number",
              "required": false,
              "description": "Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends.\n\n**Note:** You must use this field together with the `upToPeriodsType` field to specify the time period.\n\n* This field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. \n* If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.\n",
              "section": "Additional Fields"
            },
            {
              "name": "upToPeriodsType",
              "label": "Up To Periods Type",
              "type": "string",
              "required": false,
              "description": "\nThe period type used to define when the charge ends. \n\nValues:\n\n* `Billing_Periods`\n* `Days`\n* `Weeks`\n* `Months`\n* `Years`\n\nYou must use this field together with the `upToPeriods` field to specify the time period.\n\nThis field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. \n",
              "section": "Additional Fields"
            },
            {
              "name": "weeklyBillCycleDay",
              "label": "Weekly Bill Cycle Day",
              "type": "string",
              "required": false,
              "description": "Specifies which day of the week is the bill cycle day (BCD) for the charge. \n\nValues:\n\n* `Sunday`\n* `Monday`\n* `Tuesday`\n* `Wednesday`\n* `Thursday`\n* `Friday`\n* `Saturday`\n",
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
          "description": "An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan.\n\n**Note:** If both `externalCatalogPlanId` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
          "section": "Additional Fields"
        },
        {
          "name": "externalIdSourceSystem",
          "label": "External Id Source System",
          "type": "string",
          "required": false,
          "description": "The ID of the external source system. You can use this field and `externalCatalogPlanId` to specify a product rate plan that is imported from an external system.\n\n**Note:** If both `externalCatalogPlanId`, `externalIdSourceSystem` and `productRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
          "section": "Additional Fields"
        },
        {
          "name": "externallyManagedPlanId",
          "label": "Externally Managed Plan Id",
          "type": "string",
          "required": false,
          "description": "Indicates the unique identifier for the rate plan purchased on a third-party store. This field is used to represent a subscription rate plan created through third-party stores.\n",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanId",
          "label": "Product Rate Plan Id",
          "type": "string",
          "required": false,
          "description": "ID of a product rate plan for this subscription.\n",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanNumber",
          "label": "Product Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a product rate plan for this subscription.\n",
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
      "description": "Date through which to calculate charges if an invoice or a credit memo is generated, as\nyyyy-mm-dd. Default is current date.\n\n**Note**:  - This field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `211.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n\n- The credit memo is only available if you have the Invoice Settlement feature enabled.\n",
      "section": "Additional Fields"
    },
    {
      "name": "termStartDate",
      "label": "Term Start Date",
      "type": "date",
      "required": false,
      "description": "The date on which the subscription term begins, as yyyy-mm-dd. If this is a renewal subscription, this date is different from the subscription start date.\n",
      "section": "Additional Fields"
    },
    {
      "name": "termType",
      "label": "Term Type",
      "type": "string",
      "required": true,
      "description": "Possible values are: `TERMED`, `EVERGREEN`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "CpqBundleJsonId__QT",
      "label": "Cpq Bundle Json Id Q T",
      "type": "string",
      "required": false,
      "description": "The Bundle product structures from Zuora Quotes if you utilize Bundling in Salesforce. Do not change the value in this field.\n",
      "maxLength": 32,
      "section": "Additional Fields"
    },
    {
      "name": "OpportunityCloseDate__QT",
      "label": "Opportunity Close Date Q T",
      "type": "date",
      "required": false,
      "description": "The closing date of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
      "section": "Additional Fields"
    },
    {
      "name": "QuoteBusinessType__QT",
      "label": "Quote Business Type Q T",
      "type": "string",
      "required": false,
      "description": "The specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
      "maxLength": 32,
      "section": "Additional Fields"
    },
    {
      "name": "QuoteType__QT",
      "label": "Quote Type Q T",
      "type": "string",
      "required": false,
      "description": "The Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes.\n",
      "maxLength": 32,
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
      "description": "Status of the subscription's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Project__NS",
      "label": "Project N S",
      "type": "string",
      "required": false,
      "description": "The NetSuite project that the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SalesOrder__NS",
      "label": "Sales Order N S",
      "type": "string",
      "required": false,
      "description": "The NetSuite sales order than the subscription was created from. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the subscription was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "applyCredit",
      "label": "Apply Credit",
      "type": "boolean",
      "required": false,
      "description": "If the value is true, the credit memo or unapplied payment on the order account will be automatically applied to the invoices generated by this order. The credit memo generated by this order will not be automatically applied to any invoices.\n\n\n**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "applyCreditBalance",
      "label": "Apply Credit Balance",
      "type": "boolean",
      "required": false,
      "description": "Whether to automatically apply a credit balance to an invoice.\n\nIf the value is `true`, the credit balance is applied to the invoice. If the value is `false`, no action is taken.\n\n\nTo view the credit balance adjustment, retrieve the details of the invoice using the Get Invoices method.\n\nPrerequisite: `invoice` must be `true`. \n\n**Note:** \n  - If you are using the field `invoiceCollect` rather than the field `invoice`, the `invoiceCollect` value must be `true`.\n  - This field is deprecated if you have the Invoice Settlement feature enabled.\n",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "creditMemoReasonCode",
      "label": "Credit Memo Reason Code",
      "type": "string",
      "required": false,
      "description": "A code identifying the reason for the credit memo transaction that is generated by the request. The value must be an existing reason code. If you do not pass the field or pass the field with empty value, Zuora uses the default reason code.",
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "collect",
      "label": "Collect",
      "type": "boolean",
      "required": false,
      "description": "Collects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account.\n\nIf the value is `true`, the automatic payment is collected. If the value is `false`, no action is taken.\n\nPrerequisite: The `invoice` or `runBilling` field must be `true`. \n\n**Note**: This field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `196.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n",
      "defaultValue": true,
      "section": "Subscription Settings"
    },
    {
      "name": "documentDate",
      "label": "Document Date",
      "type": "date",
      "required": false,
      "description": "The date of the billing document, in `yyyy-mm-dd` format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.\n\n- If this field is specified, the specified date is used as the billing document date. \n- If this field is not specified, the date specified in the `targetDate` is used as the billing document date.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "invoiceSeparately",
      "label": "Invoice Separately",
      "type": "boolean",
      "required": false,
      "description": "Separates a single subscription from other subscriptions and invoices the charge independently. \n\nIf the value is `true`, the subscription is billed separately from other subscriptions. If the value is `false`, the subscription is included with other subscriptions in the account invoice.\n\nThe default value is `false`.\n\nPrerequisite: The default subscription setting Enable Subscriptions to be Invoiced Separately must be set to Yes.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "runBilling",
      "label": "Run Billing",
      "type": "boolean",
      "required": false,
      "description": "Creates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos).  \n\n\nThe billing documents generated\nin this operation is only for this subscription, not for the entire\ncustomer account.\n**Note**: This field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `211.0` or [a later available version](https://developer.zuora.com/v1-api-reference/api-versions/#minor-version).\n\nPossible values:\n\n- `true`: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.\n\n- `false`: No invoice is created.\n",
      "defaultValue": true,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "gatewayId",
      "label": "Gateway Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment gateway instance. For example, `2c92c0f86078c4d5016091674bcc3e92`.\n\nIf <a href=\"https://knowledgecenter.zuora.com/Zuora_Payments/Payment_gateway_integrations/Payment_Gateway_Routing\" target=\"_blank\">Payment Gateway Routing</a> is enabled: \n  - If this field is not specified, gateway routing rules will be invoked.\n  - If this field is specified, the specified gateway will be used to process the payment.\n\nIf Payment Gateway Routing is disabled:\n  - If this field is not specified, the default payment gateway will be used to process the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant. \n  - If this field is specified, the specified gateway will be used to process the payment.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentMethodId",
      "label": "Payment Method Id",
      "type": "string",
      "required": false,
      "description": "The ID of the payment method used for the payment.\n",
      "section": "Payment Settings"
    },
    {
      "name": "prepayment",
      "label": "Prepayment",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the subscription will consume the reserved payment amount of the customer account. See [Prepaid Cash with Drawdown](https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Invoicing/JA_Advanced_Consumption_Billing/Prepaid_Cash_with_Drawdown) for more information. \n",
      "section": "Payment Settings"
    },
    {
      "name": "serviceActivationDate",
      "label": "Service Activation Date",
      "type": "date",
      "required": false,
      "description": "The date on which the services or products within a subscription have been activated and access has been provided to the customer, as yyyy-mm-dd.\n\nDefault value is dependent on the value of other fields. See **Notes** section for more details.\n",
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
