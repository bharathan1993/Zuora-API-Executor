import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_postproductrateplanchargeEndpoint: ApiEndpoint = {
  "id": "object-postproductrateplancharge",
  "name": "CRUD: Create a product rate plan charge",
  "description": "Creates a product rate plan charge for a specified rate plan charge. ",
  "method": "POST",
  "path": "/v1/object/product-rate-plan-charge",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "AccountingCode",
      "label": "Accounting Code",
      "type": "string",
      "required": false,
      "description": "The accounting code for the charge. Accounting codes group transactions that contain similar accounting attributes.\n",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "DeferredRevenueAccount",
      "label": "Deferred Revenue Account",
      "type": "string",
      "required": false,
      "description": "The name of the deferred revenue account for this charge.\n\nThis feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). \n",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "ExcludeItemBillingFromRevenueAccounting",
      "label": "Exclude Item Billing From Revenue Accounting",
      "type": "boolean",
      "required": false,
      "description": "The flag to exclude the related invoice items, invoice item adjustments, credit memo items, and debit memo items from revenue accounting.\n\n**Notes**: \n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to `115` or later. Otherwise, an error occurs.\n  - This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled. \n",
      "defaultValue": false,
      "section": "Account Settings"
    },
    {
      "name": "ExcludeItemBookingFromRevenueAccounting",
      "label": "Exclude Item Booking From Revenue Accounting",
      "type": "boolean",
      "required": false,
      "description": "The flag to exclude the related rate plan charges and order line items from revenue accounting.\n\n**Notes**: \n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to `115` or later. Otherwise, an error occurs.\n  - This field is only available if you have the Order to Revenue or Billing - Revenue Integration feature enabled. \n",
      "defaultValue": false,
      "section": "Account Settings"
    },
    {
      "name": "Name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "The name of the product rate plan charge.\n",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "NumberOfPeriod",
      "label": "Number Of Period",
      "type": "number",
      "required": false,
      "description": "Specifies the number of periods to use when calculating charges in an overage smoothing charge model. The valid value is a positive whole number.\n",
      "section": "Account Settings"
    },
    {
      "name": "ProductRatePlanChargeNumber",
      "label": "Product Rate Plan Charge Number",
      "type": "string",
      "required": false,
      "description": "The natural key of the product rate plan charge.\n\n**Values**:\n\n  - leave null for automatically generated string\n  - an alphanumeric string of 100 characters or fewer\n\n**Note**: This field is only available if you set the `X-Zuora-WSDL-Version` request header to `133` or later.\n",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "RecognizedRevenueAccount",
      "label": "Recognized Revenue Account",
      "type": "string",
      "required": false,
      "description": "The name of the recognized revenue account for this charge.\n  - Required when the Allow Blank Accounting Code setting is No.\n  - Optional when the Allow Blank Accounting Code setting is Yes.\n\n  This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). \n",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "RevenueRecognitionRuleName",
      "label": "Revenue Recognition Rule Name",
      "type": "string",
      "required": false,
      "description": "Determines when to recognize the revenue for this charge.\n",
      "enum": [
        "Recognize upon invoicing",
        "Recognize daily over time"
      ],
      "section": "Account Settings"
    },
    {
      "name": "UseDiscountSpecificAccountingCode",
      "label": "Use Discount Specific Accounting Code",
      "type": "boolean",
      "required": true,
      "description": "Determines whether to define a new accounting code for the new discount charge.\n\n**Character limit**: 5\n\n**Values**: `True`, `False`\n",
      "section": "Account Settings"
    },
    {
      "name": "DeferredRevAccount__NS",
      "label": "Deferred Rev Account N S",
      "type": "string",
      "required": false,
      "description": "Deferrred revenue account associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "RecognizedRevAccount__NS",
      "label": "Recognized Rev Account N S",
      "type": "string",
      "required": false,
      "description": "Recognized revenue account associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Account Settings"
    },
    {
      "name": "ApplyDiscountTo",
      "label": "Apply Discount To",
      "type": "string",
      "required": false,
      "description": "Specifies the type of charges that you want a specific discount to apply to. All field values are case sensitive and in all-caps.\n",
      "enum": [
        "ONETIME (1)",
        "RECURRING (2)",
        "USAGE (4)",
        "ONETIMERECURRING (3)",
        "ONETIMEUSAGE (5)",
        "RECURRINGUSAGE (6)",
        "ONETIMERECURRINGUSAGE (7)"
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "CreditOption",
      "label": "Credit Option",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs. \n\nThe way to calculate credit. See [Credit Option](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge#Credit_Option) for more information. \n",
      "enum": [
        "TimeBased",
        "ConsumptionBased",
        "FullCreditBack"
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "OverageUnusedUnitsCreditOption",
      "label": "Overage Unused Units Credit Option",
      "type": "string",
      "required": false,
      "description": "Determines whether to credit the customer with unused units of usage.\n",
      "enum": [
        "NoCredit",
        "CreditBySpecificRate",
        null
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "RolloverApply",
      "label": "Rollover Apply",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs.\n\nThis field defines the priority of rollover, which is either first or last.\n",
      "enum": [
        "ApplyFirst",
        "ApplyLast"
      ],
      "section": "Credit & Settlement Settings"
    },
    {
      "name": "BillCycleDay",
      "label": "Bill Cycle Day",
      "type": "number",
      "required": false,
      "description": "Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed. The BCD value in the account can override the BCD in this object.\n\n**Character limit**: 2\n\n**Values**: a valid BCD integer, 1 - 31\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "BillCycleType",
      "label": "Bill Cycle Type",
      "type": "string",
      "required": true,
      "description": "Specifies how to determine the billing day for the charge. \n\n**Notes**:\n  - If you set this field to `SpecificDayofMonth`, you must specify which day of the month as the billing day for the charge in the BillCycleDay field. \n  - If you set this field to `SpecificDayofWeek`, you must specify which day of the week as the billing day for the charge in the WeeklyBillCycleDay field. \n  - By default, `TermStartDay` and `TermEndDay` are only available for prepayment charges. But you can reach out to Zuora Global Support to request enabling it for non-prepaid recurring charges. Meanwhile, note the following rules applies to these options:\n    - The Term End Day option of the Billing Day field must be coupled with the Align to Term End option of the Billing Period Alignment field.\n    - For prepaid charges, the Term Start Day option of the Billing Day field must be coupled with the existing Align to Term Start option of the Billing Period Alignment field.\n    - For non-prepaid recurring charges: If Billing Day is set to Term Start Day, Billing Period Alignment must be Align to Term Start; If Billing Day is set to Term End Day, Billing Period Alignment can be set to other values.\n",
      "enum": [
        "DefaultFromCustomer",
        "SpecificDayofMonth",
        "SubscriptionStartDay",
        "ChargeTriggerDay",
        "SpecificDayofWeek",
        "TermStartDay",
        "TermEndDay"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "BillingPeriod",
      "label": "Billing Period",
      "type": "string",
      "required": true,
      "description": "The billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD).\n\n**Notes**:\n  - Specify the number of months or weeks in the SpecificBillingPeriod field if you set this field to `Specific Months` or `Specific Weeks`.\n  - The `Subscription Term` value is in **Limited Availability**.\n",
      "enum": [
        "Month",
        "Quarter",
        "Annual",
        "Semi-Annual",
        "Specific Months",
        "Subscription Term",
        "Week",
        "Specific Weeks",
        "Specific Days"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "BillingPeriodAlignment",
      "label": "Billing Period Alignment",
      "type": "string",
      "required": false,
      "description": "Aligns charges within the same subscription if multiple charges begin on different dates.\n\n**Note:** The `AlignToTermEnd` value is only available for prepayment charges by default. Reach out to Zuora Global Support to enable it for non-prepaid recurring charges.\n",
      "enum": [
        "AlignToCharge",
        "AlignToSubscriptionStart",
        "AlignToTermStart",
        "AlignToTermEnd"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "BillingTiming",
      "label": "Billing Timing",
      "type": "string",
      "required": false,
      "description": "The billing timing for the charge. You can choose to bill in advance or in arrears for recurring charge types. This field is not used in one-time or usage based charge types.\n\nThis feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). \n",
      "enum": [
        "In Advance",
        "In Arrears"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "IsUnbilled",
      "label": "Is Unbilled",
      "type": "boolean",
      "required": false,
      "description": "Specifies how to perform the accounting during revenue recognition. The default value is `False`.\n\n**Values**: `True`, `False`\n\n**Notes**: \n  - The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to 132 or later.    \n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "SpecificBillingPeriod",
      "label": "Specific Billing Period",
      "type": "number",
      "required": false,
      "description": "Customizes the number of months or weeks for the charges billing period. This field is required if you set the value of the BillingPeriod field to `Specific Months` or `Specific Weeks`.\nThe valid value is a positive integer.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "WeeklyBillCycleDay",
      "label": "Weekly Bill Cycle Day",
      "type": "string",
      "required": false,
      "description": "Specifies which day of the week as the bill cycle day (BCD) for the charge.\n\nThis feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). \n",
      "enum": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "ApplyToBillingPeriodPartially",
      "label": "Apply To Billing Period Partially",
      "type": "boolean",
      "required": false,
      "description": "Allow the discount duration to be aligned with the billing period partially.\n\n**Note**: You must enable the [Enhanced Discount](https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount) feature to access this field.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "RevRecTemplateType__NS",
      "label": "Rev Rec Template Type N S",
      "type": "string",
      "required": false,
      "description": "Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Invoice & Document Settings"
    },
    {
      "name": "ChargeFunction",
      "label": "Charge Function",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the Prepaid with Drawdown or Minimum Commitment feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to `141` or higher. Otherwise, an error occurs.\n\nThis field defines what type of charge it is:\n* Standard: Normal charge with no Prepayment or Commitment or Drawdown.\n* Prepayment: For recurring charges. Unit or currency based prepaid charge.\n* CommitmentTrueUp: For recurring charges. Currency based minimum commitment charge.\n* Drawdown: For usage charges. Drawdown from prepaid funds.\n* DrawdownAndCreditCommitment: For usage charges. Drawdown from prepaid funds and then credit to minimum commitment funds.\n* CreditCommitment: For usage charges. Credit to minimum commitment funds.\n",
      "enum": [
        "Standard",
        "Prepayment",
        "CommitmentTrueUp",
        "Drawdown",
        "CreditCommitment",
        "DrawdownAndCreditCommitment"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "CommitmentType",
      "label": "Commitment Type",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Prepaid_with_Drawdown\" target=\"_blank\">Prepaid with Drawdown</a> feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to `133` or higher. Otherwise, an error occurs. \n\nThis field defines the type of commitment. A prepaid charge can be `UNIT` or `CURRENCY`. A minimum commitment(in-arrears) charge can only be `CURRENCY` type. For topup(recurring or one-time) charges, this field indicates what type of funds are created. \n* If UNIT, it will create a fund with given prepaidUom.\n* If CURRENCY, it will create a fund with the currency amount calculated in list price.\n\nFor drawdown(usage) charges, this field indicates what type of funds are drawdown from that created from topup charges.\n",
      "enum": [
        "UNIT",
        "CURRENCY"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "ChargeModel",
      "label": "Charge Model",
      "type": "string",
      "required": true,
      "description": "Determines how to calculate charges. Charge models must be individually activated in Zuora Billing administration.\n\n**Notes:**\n  - The `Delivery Pricing` value is available only if you have the Delivery Pricing charge model enabled. The minimal required WSDL version is 128.\n  - The `MultiAttributePricing` value is available only if you have the Multi-Attribute Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information. The minimal required WSDL version is 102.      \n  - The `PreratedPerUnit` and  value is available only if you have the Pre-rated Per Unit Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information. The minimal required WSDL version is 102.      \n  - The `PreratedPricing` value is available only if you have the Pre-rated Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information. The minimal required WSDL version is 102.    \n  - The `HighWatermarkVolumePricing`value is available only if you have the High Water Mark Volume Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information. The minimal required WSDL version is 102.      \n  - The `HighWatermarkTieredPricing` value is available only if you have the High Water Mark Tiered Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information. The minimal required WSDL version is 102.\n",
      "enum": [
        "Discount-Fixed Amount",
        "Discount-Percentage",
        "Flat Fee Pricing",
        "Per Unit Pricing",
        "Overage Pricing",
        "Tiered Pricing",
        "Tiered with Overage Pricing",
        "Volume Pricing",
        "Delivery Pricing",
        "MultiAttributePricing",
        "PreratedPerUnit",
        "PreratedPricing`",
        "HighWatermarkVolumePricing",
        "HighWatermarkTieredPricing"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "ChargeModelConfiguration",
      "label": "Charge Model Configuration",
      "type": "object",
      "required": false,
      "description": "Container for charge model configuration data.\n\n**Notes**:\n  - This field is only available if you have the Pre-Rated Pricing or Multi-Attribute Pricing charge models enabled. These charge models are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to `102` or later. Otherwise, an error occurs with \"Code: INVALID_VALUE\".\n",
      "fields": [
        {
          "name": "ConfigurationItem",
          "label": "Configuration Item",
          "type": "array",
          "required": false,
          "description": "An array of Charge Model Configuration Key-Value pairs.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "Key",
              "label": "Key",
              "type": "string",
              "required": true,
              "description": "The name of the field that is specified for a specific charge model.\n\nConfiguration keys supported are as follows:\n\n* `formula` (only available if you have the Multi-Attribute Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.)\n* `customFieldPerUnitRate` (only available if you have the Pre-Rated Per Unit Pricing charge model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.)\n* `customFieldTotalAmount` (only available if you have the Pre-Rated Pricing model enabled. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.)\n",
              "section": "Additional Fields"
            },
            {
              "name": "Value",
              "label": "Value",
              "type": "string",
              "required": true,
              "description": "The value of the field that is specified in the `Key` field.\n\nPossible values are follows:\n\n* A valid pricing formula to calculate actual rating amount for each usage record. For example, `usageQuantity()*10`. Use it with Key `formula` when the Multi-Attribute Pricing charge model is used. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n* A name of a usage custom field that carries the per-unit rate for a usage record. For example, `perUnitRate__c`. Use it with Key `customFieldPerUnitRate` when the Pre-Rated Per Unit Pricing charge model is used. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n* A name of a usage custom field that carries the total amount for a usage record. For example, `totalAmount__c`. Use it with Key `customFieldTotalAmount` when the Pre-Rated Pricing model is used. The charge model is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://docs.zuora.com/en/entitlements/current-entitlements/zuora-editions) for pricing information.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "ChargeType",
      "label": "Charge Type",
      "type": "string",
      "required": true,
      "description": "Specifies the type of charge.\n",
      "enum": [
        "OneTime",
        "Recurring",
        "Usage"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "DefaultQuantity",
      "label": "Default Quantity",
      "type": "number",
      "required": false,
      "description": "The default quantity of units, such as the number of authors in a hosted wiki service. This field is required if you use a per-unit pricing model. \n\n**Character limit**: 16\n\n**Values**: a valid quantity value. \n\n**Note:** When the `ChargeModel` field is set to `Tiered Pricing` or `Volume Pricing`, if this field is not specified, the value will default to `0`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "DeliverySchedule",
      "label": "Delivery Schedule",
      "type": "object",
      "required": false,
      "fields": [
        {
          "name": "frequency",
          "label": "Frequency",
          "type": "string",
          "required": false,
          "description": "The frequency of the delivery. Only supports weekly now\n",
          "enum": [
            "Weekly"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "friday",
          "label": "Friday",
          "type": "boolean",
          "required": false,
          "description": "The flag to indicate should the delivery happen on Friday\n",
          "section": "Additional Fields"
        },
        {
          "name": "monday",
          "label": "Monday",
          "type": "boolean",
          "required": false,
          "description": "The flag to indicate should the delivery happen on Monday\n",
          "section": "Additional Fields"
        },
        {
          "name": "saturday",
          "label": "Saturday",
          "type": "boolean",
          "required": false,
          "description": "The flag to indicate should the delivery happen on Saturday\n",
          "section": "Additional Fields"
        },
        {
          "name": "sunday",
          "label": "Sunday",
          "type": "boolean",
          "required": false,
          "description": "The flag to indicate should the delivery happen on Sunday\n",
          "section": "Additional Fields"
        },
        {
          "name": "thursday",
          "label": "Thursday",
          "type": "boolean",
          "required": false,
          "description": "The flag to indicate should the delivery happen on Thursday\n",
          "section": "Additional Fields"
        },
        {
          "name": "tuesday",
          "label": "Tuesday",
          "type": "boolean",
          "required": false,
          "description": "The flag to indicate should the delivery happen on Tuesday\n",
          "section": "Additional Fields"
        },
        {
          "name": "wendesday",
          "label": "Wendesday",
          "type": "boolean",
          "required": false,
          "description": "The flag to indicate should the delivery happen on Wendesday\n",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "Description",
      "label": "Description",
      "type": "string",
      "required": false,
      "description": "A description of the charge.\n",
      "maxLength": 500,
      "section": "Additional Fields"
    },
    {
      "name": "DiscountLevel",
      "label": "Discount Level",
      "type": "string",
      "required": false,
      "description": "Specifies if the discount applies to just the product rate plan, the entire subscription, or to any activity in the account.\n",
      "enum": [
        "rateplan",
        "subscription",
        "account"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "DrawdownRate",
      "label": "Drawdown Rate",
      "type": "number",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs.\n\nThe [conversion rate](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge#UOM_Conversion) between Usage UOM and Drawdown UOM for a [drawdown charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge). See [Fields related to Prepaid with Drawdown](https://knowledgecenter.zuora.com/Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/ProductRatePlanCharge#Fields_related_to_Prepaid_with_Drawdown) for more information.\n",
      "section": "Additional Fields"
    },
    {
      "name": "DrawdownUom",
      "label": "Drawdown Uom",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs. \n\nUnit of measurement for a [drawdown charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_drawdown_charge). \n",
      "section": "Additional Fields"
    },
    {
      "name": "EndDateCondition",
      "label": "End Date Condition",
      "type": "string",
      "required": false,
      "description": "Defines when the charge ends after the charge trigger date.\n\n**Values**: \n  - `SubscriptionEnd`: The charge ends on the subscription end date after a specified period based on the trigger date of the charge.  \n  - `FixedPeriod`: The charge ends after a specified period based on the trigger date of the charge. If you set this field to `FixedPeriod`, you must specify the length of the period and a period type by defining the `UpToPeriods` and `UpToPeriodsType` fields. \n\n  \n**Note**: If the subscription ends before the charge end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the charge end date.\n",
      "defaultValue": "SubscriptionEnd",
      "enum": [
        "SubscriptionEnd",
        "FixedPeriod"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "IncludedUnits",
      "label": "Included Units",
      "type": "number",
      "required": false,
      "description": "Specifies the number of units in the base set of units.\n\n**Character limit**: 16\n\n**Values**: a positive decimal value\n",
      "section": "Additional Fields"
    },
    {
      "name": "IsAllocationEligible",
      "label": "Is Allocation Eligible",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the charge segment is allocation eligible in revenue recognition. The default value is `False`.\n\n**Values**: `True`, `False`\n\n**Notes**: \n  - The field is only available if you have the <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> feature enabled. To enable this field, submit a request at <a href=\"https://support.zuora.com/\" target=\"_blank\">Zuora Global Support</a>.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to 132 or later. \n",
      "section": "Additional Fields"
    },
    {
      "name": "IsPrepaid",
      "label": "Is Prepaid",
      "type": "boolean",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs. \n\nIndicates whether this charge is a prepayment (topup) charge or a drawdown charge. \n\n**Values**: `true` or `false`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "IsRollover",
      "label": "Is Rollover",
      "type": "boolean",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs.\n\nThe value is either \"True\" or \"False\". It determines whether the rollover fields are needed.\n",
      "section": "Additional Fields"
    },
    {
      "name": "IsStackedDiscount",
      "label": "Is Stacked Discount",
      "type": "boolean",
      "required": false,
      "description": "**Note**: This field is only applicable to the Discount - Percentage charge model.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 130 or higher. Otherwise, an error occurs.\n\nThis field indicates whether the discount is to be calculated as stacked discount. Possible values are as follows:\n  - `True`: This is a stacked discount, which should be calculated by stacking with other discounts.\n  - `False`: This is not a stacked discount, which should be calculated in sequence with other discounts.\n\nFor more information, see [Stacked discounts](https://knowledgecenter.zuora.com/Zuora_Billing/Products/Product_Catalog/B_Charge_Models/B_Discount_Charge_Models).\n",
      "section": "Additional Fields"
    },
    {
      "name": "LegacyRevenueReporting",
      "label": "Legacy Revenue Reporting",
      "type": "boolean",
      "required": false,
      "section": "Additional Fields"
    },
    {
      "name": "ListPriceBase",
      "label": "List Price Base",
      "type": "string",
      "required": false,
      "description": "The list price base for the product rate plan charge.\n\n**Note**: If the `ListBasePrice` field is not set in the request, the system will use the `BillingPeriod` value as the default value.\n",
      "enum": [
        "Per Billing Period",
        "Per Month",
        "Per Week",
        "Per Year",
        "Per Specific Months"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "MaxQuantity",
      "label": "Max Quantity",
      "type": "number",
      "required": false,
      "description": "Specifies the maximum number of units for this charge. Use this field and the `MinQuantity` field to create a range of units allowed in a product rate plan charge.\n\n**Character limit**: 16\n\n**Values**: a positive decimal value\n",
      "section": "Additional Fields"
    },
    {
      "name": "MinQuantity",
      "label": "Min Quantity",
      "type": "number",
      "required": false,
      "description": "Specifies the minimum number of units for this charge. Use this field and the `MaxQuantity` field to create a range of units allowed in a product rate plan charge.\n\n**Character limit**: 16\n\n**Values**: a positive decimal value\n",
      "section": "Additional Fields"
    },
    {
      "name": "OverageCalculationOption",
      "label": "Overage Calculation Option",
      "type": "string",
      "required": false,
      "description": "Determines when to calculate overage charges. If the value of the SmoothingMode field is not specified, the value of this field is ignored.\n\n**Values**: \n  - `EndOfSmoothingPeriod`: This option is used by default. The overage is charged at the end of the smoothing period.\n  - `PerBillingPeriod`: The overage is charged on-demand rather than waiting until the end of the smoothing period.\n",
      "enum": [
        "EndOfSmoothingPeriod",
        "PerBillingPeriod"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "PrepaidOperationType",
      "label": "Prepaid Operation Type",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs. \n\nThe type of this charge. It is either a prepayment (topup) charge or a drawdown charge. \n",
      "enum": [
        "topup",
        "drawdown"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "PrepaidQuantity",
      "label": "Prepaid Quantity",
      "type": "number",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs. \n\nThe number of units included in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge). Must be a positive number.\n",
      "section": "Additional Fields"
    },
    {
      "name": "PrepaidTotalQuantity",
      "label": "Prepaid Total Quantity",
      "type": "number",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs. \n\nThe total amount of units that end customers can use during a validity period when they subscribe to a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge).\n",
      "section": "Additional Fields"
    },
    {
      "name": "PrepaidUom",
      "label": "Prepaid Uom",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs.\n\nUnit of measurement for a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge).\n",
      "section": "Additional Fields"
    },
    {
      "name": "PriceChangeOption",
      "label": "Price Change Option",
      "type": "string",
      "required": false,
      "description": "Applies an automatic price change when a termed subscription is renewed.\n",
      "defaultValue": "NoChange",
      "enum": [
        "NoChange",
        "SpecificPercentageValue",
        "UseLatestProductCatalogPricing"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "PriceIncreaseOption",
      "label": "Price Increase Option",
      "type": "string",
      "required": false,
      "description": "Applies an automatic price change when a termed subscription is renewed.\n",
      "enum": [
        "FromTenantPercentageValue",
        "SpecificPercentageValue"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "PriceIncreasePercentage",
      "label": "Price Increase Percentage",
      "type": "number",
      "required": false,
      "description": "Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Use this field if you set the value to `SpecificPercentageValue`.\n\n**Character limit**: 16\n\n**Values**: a decimal value between -100 and 100\n",
      "section": "Additional Fields"
    },
    {
      "name": "ProductCategory",
      "label": "Product Category",
      "type": "string",
      "required": false,
      "description": "This field is used to maintain the product category for integration with Zuora Revenue. \n\n**Notes**: \n  - This field is available only if you have the Additional Revenue Fields property enabled.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to 132 or later. \n",
      "section": "Additional Fields"
    },
    {
      "name": "ProductClass",
      "label": "Product Class",
      "type": "string",
      "required": false,
      "description": "This field is used to maintain the product class for integration with Zuora Revenue. \n\n**Notes**: \n  - This field is available only if you have the Additional Revenue Fields property enabled.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to 132 or later. \n",
      "section": "Additional Fields"
    },
    {
      "name": "ProductFamily",
      "label": "Product Family",
      "type": "string",
      "required": false,
      "description": "This field is used to maintain the product family for integration with Zuora Revenue. \n\n**Notes**: \n  - This field is available only if you have the Additional Revenue Fields property enabled.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to 132 or later. \n",
      "section": "Additional Fields"
    },
    {
      "name": "ProductLine",
      "label": "Product Line",
      "type": "string",
      "required": false,
      "description": "This field is used to maintain the product line for integration with Zuora Revenue. \n\n**Notes**: \n  - This field is available only if you have the Additional Revenue Fields property enabled.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to 132 or later.         \n",
      "section": "Additional Fields"
    },
    {
      "name": "ReflectDiscountInNetAmount",
      "label": "Reflect Discount In Net Amount",
      "type": "boolean",
      "required": false,
      "description": "When you apply percentage discounts to either of the following charges, you need to set the `ReflectDiscountInNetAmount` field on your discount charge to `true`, to enable calculating and displaying the net amount of the following charges in Zuora Revenue.\n* delivery pricing charge\n* prepayment charge\n* drawdown charge\n\nNote the following:\n* If you are an <a href=\"https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/enable-order-to-revenue/overview-of-order-to-revenue\" target=\"_blank\">Order to Revenue</a> customer, when you set the `ReflectDiscountInNetAmount` field to `true`, you must also set both the `ExcludeItemBookingFromRevenueAccounting` and `ExcludeItemBillingFromRevenueAccounting` fields to `true`. \n* If you are a <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> customer, you must set the `ReflectDiscountInNetAmount` field to `false`, otherwise an error will be returned. Billing - Revenue Integration does not support discounts on the preceding charges.\n* If you are a Zuora Billing customer who does not enable the Order to Revenue or Billing - Revenue Integration feature, when you apply percentage discounts to the preceding charges, you also need to set the `ReflectDiscountInNetAmount` field to `true`.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "RevenueRecognitionTiming",
      "label": "Revenue Recognition Timing",
      "type": "string",
      "required": false,
      "description": "Specifies the type of revenue recognition timing.\n\nPredefined options are listed as enum values in this API Reference. \nOther options might also be avaliable depending on \nthe <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have the Order to Revenue feature enabled. \n",
      "enum": [
        "Upon Billing Document Posting Date",
        "Upon Order Activation Date"
      ],
      "maxLength": 200,
      "section": "Additional Fields"
    },
    {
      "name": "RevenueAmortizationMethod",
      "label": "Revenue Amortization Method",
      "type": "string",
      "required": false,
      "description": "Specifies the type of revenue amortization method.\n\nPredefined options are listed as enum values in this API Reference. \nOther options might also be avaliable depending on \nthe <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue/Configure_revenue_settings/Configure_revenue_recognition_policy\" target=\"_blank\">revenue recognition policy configuration</a> in the Zuora Billing UI.\n\n**Note**: This field is only available if you have the Order to Revenue feature enabled. \n",
      "enum": [
        "Immediate",
        "Ratable Using Start And End Dates"
      ],
      "maxLength": 200,
      "section": "Additional Fields"
    },
    {
      "name": "ProductRatePlanChargeTierData",
      "label": "Product Rate Plan Charge Tier Data",
      "type": "object",
      "required": true,
      "description": "Container for pricing information associated with the product rate plan charge.\n",
      "fields": [
        {
          "name": "ProductRatePlanChargeTier",
          "label": "Product Rate Plan Charge Tier",
          "type": "array",
          "required": false,
          "description": "Array of product rate plan charge tiers.\n\nYou should specify all relevant fields of all tiers, including pricing information for each currency.\n\nFor each currency, ensure that the tiers appear in ascending order of `StartingUnit`.\n\nFor example:\n\n```\n[\n  {\n    \"StartingUnit\": \"1\",\n    \"EndingUnit\": \"150\",\n    \"Currency\": \"USD\",\n    \"Price\": 1.95,\n    \"PriceFormat\": \"Per Unit\"\n  },\n  {\n    \"StartingUnit\": \"151\",\n    \"EndingUnit\": \"300\",\n    \"Currency\": \"USD\",\n    \"Price\": 1.45,\n    \"PriceFormat\": \"Per Unit\"\n  },\n  {\n    \"StartingUnit\": \"1\",\n    \"EndingUnit\": \"150\",\n    \"Currency\": \"EUR\",\n    \"Price\": 1.75,\n    \"PriceFormat\": \"Per Unit\"\n  },\n  {\n    \"StartingUnit\": \"151\",\n    \"EndingUnit\": \"300\",\n    \"Currency\": \"EUR\",\n    \"Price\": 1.30,\n    \"PriceFormat\": \"Per Unit\"\n  }\n]\n```\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "Currency",
              "label": "Currency",
              "type": "string",
              "required": false,
              "description": "The code corresponding to the currency for the tier's price.\n",
              "section": "Additional Fields"
            },
            {
              "name": "DiscountAmount",
              "label": "Discount Amount",
              "type": "number",
              "required": false,
              "description": "The specific amount for a fixed discount. Required if the charge model of the product rate plan charge is `Discount-Fixed Amount`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "DiscountPercentage",
              "label": "Discount Percentage",
              "type": "number",
              "required": false,
              "description": "The percentage of discount for a percentage discount. Required if the charge model of the product rate plan charge is `Discount-Percentage`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "EndingUnit",
              "label": "Ending Unit",
              "type": "number",
              "required": false,
              "description": "The end number of a range of units for the tier. Required if the charge model of the product rate plan charge is `Tiered Pricing` or `Tiered with Overage Pricing`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "IsOveragePrice",
              "label": "Is Overage Price",
              "type": "boolean",
              "required": false,
              "description": "Indicates if the price is an overage price, which is the price when usage surpasses the last defined tier.\n",
              "section": "Additional Fields"
            },
            {
              "name": "Price",
              "label": "Price",
              "type": "number",
              "required": false,
              "description": "The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.\n",
              "section": "Additional Fields"
            },
            {
              "name": "PriceFormat",
              "label": "Price Format",
              "type": "string",
              "required": false,
              "description": "Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only.\n",
              "enum": [
                "Flat Fee",
                "Per Unit"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "StartingUnit",
              "label": "Starting Unit",
              "type": "number",
              "required": false,
              "description": "The starting number of a range of units for the tier. Required if the charge model of the product rate plan charge is `Tiered Pricing` or `Tiered with Overage Pricing`.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "ProductRatePlanId",
      "label": "Product Rate Plan Id",
      "type": "string",
      "required": true,
      "description": "The ID of the product rate plan associated with this product rate plan charge.\n",
      "maxLength": 32,
      "section": "Additional Fields"
    },
    {
      "name": "ProrationOption",
      "label": "Proration Option",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the Charge Level Proration feature enabled. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing/Unbilled_Usage/Usage_charge_proration\" target=\"_blank\">Usage charge proration</a> and <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_product_catalog/Create_product_rate_plan_charges#Charge_level_proration_option_for_a_recurring_charge\" target=\"_blank\">Charge level proration option for a recurring charge</a>.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to `135` or higher. Otherwise, an error occurs.\n\nYou can use this field to specify the charge-level proration option for a usage charge or recurring charge. The tenant-level proration option will be overridden.\n  * `NoProration`: charge-level proration option that you can set for a usage charge. This option means to not use any proration, which is the default current system behavior for a usage charge.\n  * `TimeBasedProration`: charge-level proration option that you can set for a usage charge. This option means to prorate the usage charge amount using the actual number of days if the billing period is a partial period.\n  * `DefaultFromTenantSetting`: charge-level proration option that you can set for a recurring charge. This option means to follow the customer billing rule proration setting.\n  * `ChargeFullPeriod`: charge-level proration option that you can set for a recurring charge. This options means to charge the full period amount for a partial billing period. Note that this setting means that there is no proration for either collecting or refunding. Even if you cancel the recurring charge in the middle of a billing period, there is no refund for this billing period.\n",
      "enum": [
        "NoProration",
        "TimeBasedProration",
        "DefaultFromTenantSetting",
        "ChargeFullPeriod"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RatingGroup",
      "label": "Rating Group",
      "type": "string",
      "required": false,
      "description": "Specifies a rating group based on which usage records are rated.\n\nPossible values:                \n  - `ByBillingPeriod`: The rating is based on all the usages in a billing period. \n  - `ByUsageStartDate`: The rating is based on all the usages on the same usage start date. \n  - `ByUsageRecord`: The rating is based on each usage record.\n  - `ByUsageUpload`: The rating is based on all the  usages in a uploaded usage file (`.xls` or `.csv`).\n  - `ByGroupId`: The rating is based on all the usages in a custom group.\n\n**Notes:** \n  - The `ByBillingPeriod` value can be applied for all charge models. \n  - The `ByUsageStartDate`, `ByUsageRecord`, and `ByUsageUpload` values can only be applied for per unit, volume pricing, and tiered pricing charge models. \n  - The `ByGroupId` value is only available if you have the Active Rating feature enabled.\n  - Use this field only for Usage charges. One-Time Charges and Recurring Charges return `NULL`.\n",
      "defaultValue": "ByBillingPeriod",
      "enum": [
        "ByBillingPeriod",
        "ByUsageStartDate",
        "ByUsageRecord",
        "ByUsageUpload",
        "ByGroupId",
        null
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RevRecCode",
      "label": "Rev Rec Code",
      "type": "string",
      "required": false,
      "description": "Associates this product rate plan charge with a specific revenue recognition code.\n",
      "maxLength": 70,
      "section": "Additional Fields"
    },
    {
      "name": "RevRecTriggerCondition",
      "label": "Rev Rec Trigger Condition",
      "type": "string",
      "required": false,
      "description": "Specifies when revenue recognition begins.\n",
      "enum": [
        "ContractEffectiveDate",
        "ServiceActivationDate",
        "CustomerAcceptanceDate",
        null
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RolloverPeriods",
      "label": "Rollover Periods",
      "type": "number",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs.\n\nThis field defines the number of rollover periods, it is restricted to 3.\n",
      "section": "Additional Fields"
    },
    {
      "name": "SmoothingModel",
      "label": "Smoothing Model",
      "type": "string",
      "required": false,
      "description": "Specifies the smoothing model for an overage smoothing charge model.\n",
      "enum": [
        "RollingWindow",
        "Rollover",
        null
      ],
      "section": "Additional Fields"
    },
    {
      "name": "SpecificListPriceBase",
      "label": "Specific List Price Base",
      "type": "number",
      "required": false,
      "description": "The number of months for the list price base of the charge. This field is required if you set the value of the `ListPriceBase` field to `Per Specific Months`. The value must be a positive integer between **1** and **120** inclusive.\n\n**Notes**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to `129` or later. Otherwise, an error occurs.\n  - The value of this field is `null` if you do not set the value of the `ListPriceBase` field to `Per Specific Months`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "TriggerEvent",
      "label": "Trigger Event",
      "type": "string",
      "required": true,
      "description": "Specifies when to start billing the customer for the charge.\n\n**Values**:\n  - `ContractEffective` is the date when the subscription's contract goes into effect and the charge is ready to be billed.\n  - `ServiceActivation` is the date when the services or products for a subscription have been activated and the customers have access.\n  - `CustomerAcceptance` is when the customer accepts the services or products for a subscription.\n",
      "enum": [
        "ContractEffective",
        "ServiceActivation",
        "CustomerAcceptance"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "UOM",
      "label": "U O M",
      "type": "string",
      "required": false,
      "description": "Specifies a configured unit to measure usage. \n\n**Note**: You must specify this field when creating the following charge models:\n  - Per Unit Pricing\n  - Volume Pricing\n  - Overage Pricing\n  - Tiered Pricing\n  - Tiered with Overage Pricing\n",
      "maxLength": 25,
      "section": "Additional Fields"
    },
    {
      "name": "UpToPeriods",
      "label": "Up To Periods",
      "type": "number",
      "required": false,
      "description": "Specifies the length of the period during which the charge is active. If this period ends before the subscription ends, the charge ends when this period ends.\n\n**Character limit**: 5\n\n**Values**: a whole number between 0 and 65535, exclusive\n\n**Notes**:\n  - You must use this field together with the `UpToPeriodsType` field to specify the time period. This field is applicable only when the `EndDateCondition` field is set to `FixedPeriod`. \n  - If the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge end date will change accordingly up to the original period end.\n",
      "section": "Additional Fields"
    },
    {
      "name": "UpToPeriodsType",
      "label": "Up To Periods Type",
      "type": "string",
      "required": false,
      "description": "The period type used to define when the charge ends.\n\n**Notes**: \n - You must use this field together with the `UpToPeriods` field to specify the time period.\n - This field is applicable only when the `EndDateCondition` field is set to `FixedPeriod`. \n",
      "defaultValue": "Billing Periods",
      "enum": [
        "Billing Periods",
        "Days",
        "Weeks",
        "Months",
        "Years",
        null
      ],
      "section": "Additional Fields"
    },
    {
      "name": "UsageRecordRatingOption",
      "label": "Usage Record Rating Option",
      "type": "string",
      "required": false,
      "description": "Determines how Zuora processes usage records for per-unit usage charges. \n",
      "defaultValue": "EndOfBillingPeriod",
      "enum": [
        "EndOfBillingPeriod",
        "OnDemand",
        null
      ],
      "section": "Additional Fields"
    },
    {
      "name": "UseTenantDefaultForPriceChange",
      "label": "Use Tenant Default For Price Change",
      "type": "boolean",
      "required": false,
      "description": "Applies the tenant-level percentage uplift value for an automatic price change to a termed subscription's renewal. \n\n**Character limit**: 5\n\n**Values**: `true`, `false`\n",
      "section": "Additional Fields"
    },
    {
      "name": "ValidityPeriodType",
      "label": "Validity Period Type",
      "type": "string",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with Drawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown) feature enabled.\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request header to 114 or higher. Otherwise, an error occurs. \n\nThe period in which the prepayment units are valid to use as defined in a [prepayment charge](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown/Create_prepayment_charge).\n",
      "enum": [
        "SUBSCRIPTION_TERM",
        "ANNUAL",
        "SEMI_ANNUAL",
        "QUARTER",
        "MONTH"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RolloverPeriodLength",
      "label": "Rollover Period Length",
      "type": "number",
      "required": false,
      "description": "**Note**: This field is only available if you have the [Prepaid with\nDrawdown](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/J_Billing_Operations/Prepaid_with_Drawdown)\nfeature enabled.\n\n\nTo use this field, you must set the `X-Zuora-WSDL-Version` request\nheader to 137 or higher. Otherwise, an error occurs.\n\n\nUse this field when you want to set the rollover fund's period length shorter than the prepayment charge's validity period. In this case, you must set the `rolloverPeriods` field to 1. For example, you can define the rollover fund's period length as 5 months, shorter than the prepayment charge's validity period: a year.\n",
      "defaultValue": null,
      "section": "Additional Fields"
    },
    {
      "name": "Formula",
      "label": "Formula",
      "type": "string",
      "required": false,
      "description": "The price lookup formula defined for the product rate plan charge, which is used to identify the correct and relevant charge definition based on the context.\n\nFor more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Attribute-based_pricing/Price_lookup_in_Attribute-based_Pricing\"  target=\"_blank\">Price lookup in Attribute-based Pricing</a>.\n\n**Notes**: \n  - This field is available only if the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Attribute-based_pricing\" target=\"_blank\">Attribute-based Pricing</a> feature is enabled.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to 138 or higher.\n",
      "section": "Additional Fields"
    },
    {
      "name": "Class__NS",
      "label": "Class N S",
      "type": "string",
      "required": false,
      "description": "Class associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "Department__NS",
      "label": "Department N S",
      "type": "string",
      "required": false,
      "description": "Department associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "IncludeChildren__NS",
      "label": "Include Children N S",
      "type": "string",
      "required": false,
      "description": "Specifies whether the corresponding item in NetSuite is visible under child subsidiaries. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "enum": [
        "Yes",
        "No"
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
      "description": "Status of the product rate plan charge's synchronization with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "ItemType__NS",
      "label": "Item Type N S",
      "type": "string",
      "required": false,
      "description": "Type of item that is created in NetSuite for the product rate plan charge. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "enum": [
        "Inventory",
        "Non Inventory",
        "Service"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "Location__NS",
      "label": "Location N S",
      "type": "string",
      "required": false,
      "description": "Location associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "RevRecEnd__NS",
      "label": "Rev Rec End N S",
      "type": "string",
      "required": false,
      "description": "End date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "enum": [
        "Charge Period Start",
        "Rev Rec Trigger Date",
        "Use NetSuite Rev Rec Template"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "RevRecStart__NS",
      "label": "Rev Rec Start N S",
      "type": "string",
      "required": false,
      "description": "Start date condition of the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "enum": [
        "Charge Period Start",
        "Rev Rec Trigger Date",
        "Use NetSuite Rev Rec Template"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "Subsidiary__NS",
      "label": "Subsidiary N S",
      "type": "string",
      "required": false,
      "description": "Subsidiary associated with the corresponding item in NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "SyncDate__NS",
      "label": "Sync Date N S",
      "type": "string",
      "required": false,
      "description": "Date when the product rate plan charge was synchronized with NetSuite. Only available if you have installed the [Zuora Connector for NetSuite](https://www.zuora.com/connect/app/?appId=265).\n",
      "maxLength": 255,
      "section": "Additional Fields"
    },
    {
      "name": "TaxCode",
      "label": "Tax Code",
      "type": "string",
      "required": false,
      "description": "Specifies the tax code for taxation rules. Required when the Taxable field is set to `True`.\n\n**Note**: This value affects the tax calculation of rate plan charges that come from the `ProductRatePlanCharge`.\n",
      "maxLength": 64,
      "section": "Tax Settings"
    },
    {
      "name": "TaxMode",
      "label": "Tax Mode",
      "type": "string",
      "required": false,
      "description": "Determines how to define taxation for the charge. Required when the Taxable field is set to `True`.\n\n**Note**: This value affects the tax calculation of rate plan charges that come from the `ProductRatePlanCharge`.\n",
      "enum": [
        "TaxExclusive",
        "TaxInclusive",
        null
      ],
      "section": "Tax Settings"
    },
    {
      "name": "Taxable",
      "label": "Taxable",
      "type": "boolean",
      "required": false,
      "description": "Determines whether the charge is taxable. When set to `True`, the TaxMode and TaxCode fields are required when creating or updating th ProductRatePlanCharge object.\n\n**Character limit**: 5\n\n**Values**: `True`, `False`\n\n**Note**: This value affects the tax calculation of rate plan charges that come from the `ProductRatePlanCharge`.\n",
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
