import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_subscriptionEndpoint: ApiEndpoint = {
  "id": "put-subscription",
  "name": "Update a subscription",
  "description": "Use this call to make the following kinds of changes to a subscription:",
  "method": "PUT",
  "path": "/v1/subscriptions/{subscription-key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "subscription-key",
      "label": "Subscription Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: subscription-key",
      "placeholder": "Enter subscription key"
    }
  ],
  "bodyFields": [
    {
      "name": "add",
      "label": "Add",
      "type": "array",
      "required": false,
      "description": "Container for adding one or more rate plans.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "bookingDate",
          "label": "Booking Date",
          "type": "date",
          "required": false,
          "description": "The booking date that you want to set for the amendment contract. The booking date of an amendment is the equivalent of the order date of an order. This field must be in the `yyyy-mm-dd` format. The default value is the current date when you make the API call.            \n",
          "section": "Additional Fields"
        },
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
              "description": "The date when the rate plan charge is amended through an order or amendment. This field is not updatable.\n\nThis field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.\n",
              "section": "Additional Fields"
            },
            {
              "name": "applyDiscountTo",
              "label": "Apply Discount To",
              "type": "string",
              "required": false,
              "description": "Specifies the type of charges that you want a specific discount to apply to.\n\nValues:\n\n* `ONETIME`\n* `RECURRING`\n* `USAGE`\n* `ONETIMERECURRING`\n* `ONETIMEUSAGE`\n* `RECURRINGUSAGE`\n* `ONETIMERECURRINGUSAGE`\n\nAvailable for the following charge type for the Discount-Fixed Amount and Discount-Percentage charge models:\n\n* Recurring\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "billCycleDay",
              "label": "Bill Cycle Day",
              "type": "string",
              "required": false,
              "description": "Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed.\n\nValues: `1`-`31`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billCycleType",
              "label": "Bill Cycle Type",
              "type": "string",
              "required": false,
              "description": "Specifies how to determine the billing day for the charge. When this field is set to `SpecificDayofMonth`, set the `BillCycleDay` field. When this field is set to `SpecificDayofWeek`, set the `weeklyBillCycleDay` field.\n\nValues:\n\n* `DefaultFromCustomer`\n* `SpecificDayofMonth`\n* `SubscriptionStartDay`\n* `ChargeTriggerDay`\n* `SpecificDayofWeek`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingPeriod",
              "label": "Billing Period",
              "type": "string",
              "required": false,
              "description": "Billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD). When you renew a subscription, the current subscription term is extended by creating a new term. If any charge in your subscription has the billing period set as `SubscriptionTerm`， a new charge segment is generated for the new term.\n\nValues:\n\n* `Month`\n* `Quarter`\n* `Semi_Annual`\n* `Annual`\n* `Eighteen_Months`\n* `Two_Years`\n* `Three_Years`\n* `Five_Years`\n* `Specific_Months`\n* `Subscription_Term`\n* `Week`\n* `Specific_Weeks`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingPeriodAlignment",
              "label": "Billing Period Alignment",
              "type": "string",
              "required": false,
              "description": "Aligns charges within the same subscription if multiple charges begin on different dates.\n\nValues:\n\n* `AlignToCharge`\n* `AlignToSubscriptionStart`\n* `AlignToTermStart`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingTiming",
              "label": "Billing Timing",
              "type": "string",
              "required": false,
              "description": "Billing timing for the charge for recurring charge types. Not avaliable for one time, usage and discount charges.\n\nValues:\n\n* `IN_ADVANCE` (default)\n* `IN_ARREARS`\n",
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
              "description": "Specifies the amount of fixed-amount discount.\n\nAvailable for the following charge type for the Discount-Fixed Amount charge model:\n\n* Recurring\n",
              "section": "Additional Fields"
            },
            {
              "name": "discountLevel",
              "label": "Discount Level",
              "type": "string",
              "required": false,
              "description": "Specifies if the discount applies to the product rate plan only , the entire subscription, or to any activity in the account.\n\nValues:\n\n* `rateplan`\n* `subscription`\n* `account`\n\nAvailable for the following charge type for the Discount-Fixed Amount and Discount-Percentage charge models:\n\n* Recurring\n",
              "section": "Additional Fields"
            },
            {
              "name": "discountPercentage",
              "label": "Discount Percentage",
              "type": "number",
              "required": false,
              "description": "Specifies the percentage of a percentage discount. \n\nAvailable for the following charge type for the Discount-Percentage charge model:\n\n* Recurring\n",
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
              "description": "Specifies the number of units in the base set of units for this charge. Must be >=`0`.\n\nAvailable for the following charge type for the Overage charge model:\n\n* Usage-based\n",
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
              "description": "The list price base for the product rate plan charge.\n\nValues:\n\n* `Per_Billing_Period`\n* `Per_Month`\n* `Per_Week`\n* `Per_Year`\n* `Per_Specific_Months`\n\nAvailable for the following charge type for the Flat Fee, Per Unit, Volume Pricing, and Tiered Pricing charge models:\n\n* Recurring\n",
              "section": "Additional Fields"
            },
            {
              "name": "number",
              "label": "Number",
              "type": "string",
              "required": false,
              "description": "Unique number that identifies the charge. System-generated if not provided.\n",
              "section": "Account Settings"
            },
            {
              "name": "numberOfPeriods",
              "label": "Number Of Periods",
              "type": "number",
              "required": false,
              "description": "Specifies the number of periods to use when calculating charges in an overage smoothing charge model.\n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
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
              "description": "Price for units over the allowed amount. \n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
              "section": "Additional Fields"
            },
            {
              "name": "overageUnusedUnitsCreditOption",
              "label": "Overage Unused Units Credit Option",
              "type": "string",
              "required": false,
              "description": "Determines whether to credit the customer with unused units of usage.\n\nValues:\n\n* `NoCredit`\n* `CreditBySpecificRate`\n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "price",
              "label": "Price",
              "type": "number",
              "required": false,
              "description": "Price for units in the subscription rate plan.\n\nSupports all charge types for the Flat Fee and Per Unit charge models\n",
              "section": "Additional Fields"
            },
            {
              "name": "priceChangeOption",
              "label": "Price Change Option",
              "type": "string",
              "required": false,
              "description": "Applies an automatic price change when a termed subscription is renewed. The Zuora Billing Admin setting Enable Automatic Price Change When Subscriptions are Renewed?  must be set to Yes to use this field.  See Define Default Subscription Settings for more information on setting this option.\n\nValues:\n\n* `NoChange` (default)\n* `SpecificPercentageValue`\n* `UseLatestProductCatalogPricing`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n* Not available for the Fixed-Amount Discount charge model.\n",
              "section": "Additional Fields"
            },
            {
              "name": "priceIncreasePercentage",
              "label": "Price Increase Percentage",
              "type": "number",
              "required": false,
              "description": "Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`.\n\nDecimal between -100 and 100.\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n\nNot available for the Fixed-Amount Discount charge model.\n",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeId",
              "label": "Product Rate Plan Charge Id",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeNumber",
              "label": "Product Rate Plan Charge Number",
              "type": "string",
              "required": false,
              "description": "Number of a product rate-plan charge for this subscription.                     ",
              "section": "Account Settings"
            },
            {
              "name": "quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "description": "Number of units. Must be >=`0`.\n\nAvailable for the following charge types for the Per Unit, Volume Pricing, and Tiered Pricing charge models:\n\n* One-time\n* Recurring\n",
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
              "description": "Specifies the number of month or week for the charges billing period. Required if you set the value of the `billingPeriod` field to `Specific_Months` or `Specific_Weeks`.\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "specificEndDate",
              "label": "Specific End Date",
              "type": "date",
              "required": false,
              "description": "Defines when the charge ends after the charge trigger date.\n\nThis field is only applicable when the `endDateCondition` field is set to `Specific_End_Date`.\n\nIf the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.\n",
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
              "description": "Container for Volume, Tiered or Tiered with Overage charge models. Supports the following charge types:\n\n* One-time\n* Recurring\n* Usage-based\n",
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
              "description": "Specifies the rate to credit a customer for unused units of usage. This field applies only for overage charge models when the `OverageUnusedUnitsCreditOption` field is set to `CreditBySpecificRate`.\n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "upToPeriods",
              "label": "Up To Periods",
              "type": "number",
              "required": false,
              "description": "The period type used to define when the charge ends. \n\nValues:\n\n* `Billing_Periods`\n* `Days`\n* `Weeks`\n* `Months`\n* `Years`\n\nYou must use this field together with the `upToPeriods` field to specify the time period.\n\nThis field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. \n",
              "section": "Additional Fields"
            },
            {
              "name": "upToPeriodsType",
              "label": "Up To Periods Type",
              "type": "string",
              "required": false,
              "description": "The period type used to define when the charge ends. \n\nValues:\n\n* `Billing_Periods`\n* `Days`\n* `Weeks`\n* `Months`\n* `Years`\n\nYou must use this field together with the `upToPeriods` field to specify the time period.\n\nThis field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. \n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "contractEffectiveDate",
          "label": "Contract Effective Date",
          "type": "date",
          "required": true,
          "description": "The date when the amendment changes take effect. The format of the date is yyyy-mm-dd.\n\nIf there is already a future-dated Update Product amendment on the subscription, the `specificUpdateDate` field will be used instead of this field to specify when the Update Product amendment takes effect.\n",
          "section": "Additional Fields"
        },
        {
          "name": "customerAcceptanceDate",
          "label": "Customer Acceptance Date",
          "type": "date",
          "required": false,
          "description": "The date when the customer accepts the contract in yyyy-mm-dd format.\n\nIf this field is not set:\n\n* If the `serviceActivationDate` field is not set, the value of this field is set to be the contract effective date.\n* If the `serviceActivationDate` field is set, the value of this field is set to be the service activation date.\n\nThe billing trigger dates must follow this rule:\n\ncontractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate\n",
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
          "description": "ID of a product rate plan for this subscription\n",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanNumber",
          "label": "Product Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a product rate plan for this subscription\n",
          "section": "Account Settings"
        },
        {
          "name": "serviceActivationDate",
          "label": "Service Activation Date",
          "type": "date",
          "required": false,
          "description": "The date when the new product in the subscription is activated in yyyy-mm-dd format.\n\nYou must specify a Service Activation date if the Customer Acceptance date is set. If the Customer Acceptance date is not set, the value of the `serviceActivationDate` field defaults to be the Contract Effective Date.\n\nThe billing trigger dates must follow this rule:\n\ncontractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate\n",
          "section": "Tax Settings"
        }
      ],
      "section": "Additional Fields"
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
      "description": "If `true`, this subscription automatically renews at the end of the subscription term. Default is `false`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "bookingDate",
      "label": "Booking Date",
      "type": "date",
      "required": false,
      "description": "The booking date that you want to set for the contract when you change the `termType` field of the subscription and as a result get a new version of subscription created. The booking date of an amendment is the equivalent of the order date of an order. This field must be in the `yyyy-mm-dd` format. The default value is the current date when you make the API call. \n",
      "section": "Additional Fields"
    },
    {
      "name": "change",
      "label": "Change",
      "type": "array",
      "required": false,
      "description": "Use this field to change one or more rate plans - to replace the existing rate plans in a subscription with other rate plans.\n\n**Note**: Changing rate plans is currently not supported for the  <a href=\"https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration\" target=\"_blank\">Billing - Revenue Integration</a> feature. When Billing - Revenue Integration is enabled, changing rate plans will no longer be applicable in Zuora Billing.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "bookingDate",
          "label": "Booking Date",
          "type": "date",
          "required": false,
          "description": "The booking date that you want to set for the amendment contract. The booking date of an amendment is the equivalent of the order date of an order. This field must be in the `yyyy-mm-dd` format. The default value is the current date when you make the API call. \n",
          "section": "Additional Fields"
        },
        {
          "name": "chargeOverrides",
          "label": "Charge Overrides",
          "type": "array",
          "required": false,
          "description": "This optional container is used to override one or more product rate plan charges for this subscription.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "amendedByOrderOn",
              "label": "Amended By Order On",
              "type": "string",
              "required": false,
              "description": "The date when the rate plan charge is amended through an order or amendment. This field is not updatable.\n\nThis field is to standardize the booking date information to increase audit ability and traceability of data between Zuora Billing and Zuora Revenue. It is mapped as the booking date for a sale order line in Zuora Revenue.\n",
              "section": "Additional Fields"
            },
            {
              "name": "applyDiscountTo",
              "label": "Apply Discount To",
              "type": "string",
              "required": false,
              "description": "Specifies the type of charges that you want a specific discount to apply to.\n\nValues:\n\n* `ONETIME`\n* `RECURRING`\n* `USAGE`\n* `ONETIMERECURRING`\n* `ONETIMEUSAGE`\n* `RECURRINGUSAGE`\n* `ONETIMERECURRINGUSAGE`\n\nAvailable for the following charge type for the Discount-Fixed Amount and Discount-Percentage charge models:\n\n* Recurring\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "billCycleDay",
              "label": "Bill Cycle Day",
              "type": "string",
              "required": false,
              "description": "Sets the bill cycle day (BCD) for the charge. The BCD determines which day of the month customer is billed.\n\nValues: `1`-`31`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billCycleType",
              "label": "Bill Cycle Type",
              "type": "string",
              "required": false,
              "description": "Specifies how to determine the billing day for the charge. When this field is set to `SpecificDayofMonth`, set the `BillCycleDay` field. When this field is set to `SpecificDayofWeek`, set the `weeklyBillCycleDay` field.\n\nValues:\n\n* `DefaultFromCustomer`\n* `SpecificDayofMonth`\n* `SubscriptionStartDay`\n* `ChargeTriggerDay`\n* `SpecificDayofWeek`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingPeriod",
              "label": "Billing Period",
              "type": "string",
              "required": false,
              "description": "Billing period for the charge. The start day of the billing period is also called the bill cycle day (BCD). When you renew a subscription, the current subscription term is extended by creating a new term. If any charge in your subscription has the billing period set as `SubscriptionTerm`， a new charge segment is generated for the new term.\n\nValues:\n\n* `Month`\n* `Quarter`\n* `Semi_Annual`\n* `Annual`\n* `Eighteen_Months`\n* `Two_Years`\n* `Three_Years`\n* `Five_Years`\n* `Specific_Months`\n* `Subscription_Term`\n* `Week`\n* `Specific_Weeks`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingPeriodAlignment",
              "label": "Billing Period Alignment",
              "type": "string",
              "required": false,
              "description": "Aligns charges within the same subscription if multiple charges begin on different dates.\n\nValues:\n\n* `AlignToCharge`\n* `AlignToSubscriptionStart`\n* `AlignToTermStart`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "billingTiming",
              "label": "Billing Timing",
              "type": "string",
              "required": false,
              "description": "Billing timing for the charge for recurring charge types. Not avaliable for one time, usage and discount charges.\n\nValues:\n\n* `IN_ADVANCE` (default)\n* `IN_ARREARS`\n",
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
              "description": "Specifies the amount of fixed-amount discount.\n\nAvailable for the following charge type for the Discount-Fixed Amount charge model:\n\n* Recurring\n",
              "section": "Additional Fields"
            },
            {
              "name": "discountLevel",
              "label": "Discount Level",
              "type": "string",
              "required": false,
              "description": "Specifies if the discount applies to the product rate plan only , the entire subscription, or to any activity in the account.\n\nValues:\n\n* `rateplan`\n* `subscription`\n* `account`\n\nAvailable for the following charge type for the Discount-Fixed Amount and Discount-Percentage charge models:\n\n* Recurring\n",
              "section": "Additional Fields"
            },
            {
              "name": "discountPercentage",
              "label": "Discount Percentage",
              "type": "number",
              "required": false,
              "description": "Specifies the percentage of a percentage discount. \n\nAvailable for the following charge type for the Discount-Percentage charge model:\n\n* Recurring\n",
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
              "description": "Specifies the number of units in the base set of units for this charge. Must be >=`0`.\n\nAvailable for the following charge type for the Overage charge model:\n\n* Usage-based\n",
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
              "description": "The list price base for the product rate plan charge.\n\nValues:\n\n* `Per_Billing_Period`\n* `Per_Month`\n* `Per_Week`\n* `Per_Year`\n* `Per_Specific_Months`\n\nAvailable for the following charge type for the Flat Fee, Per Unit, Volume Pricing, and Tiered Pricing charge models:\n\n* Recurring\n",
              "section": "Additional Fields"
            },
            {
              "name": "number",
              "label": "Number",
              "type": "string",
              "required": false,
              "description": "Unique number that identifies the charge. System-generated if not provided.\n",
              "section": "Account Settings"
            },
            {
              "name": "numberOfPeriods",
              "label": "Number Of Periods",
              "type": "number",
              "required": false,
              "description": "Specifies the number of periods to use when calculating charges in an overage smoothing charge model.\n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
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
              "description": "Price for units over the allowed amount. \n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
              "section": "Additional Fields"
            },
            {
              "name": "overageUnusedUnitsCreditOption",
              "label": "Overage Unused Units Credit Option",
              "type": "string",
              "required": false,
              "description": "Determines whether to credit the customer with unused units of usage.\n\nValues:\n\n* `NoCredit`\n* `CreditBySpecificRate`\n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "price",
              "label": "Price",
              "type": "number",
              "required": false,
              "description": "Price for units in the subscription rate plan.\n\nSupports all charge types for the Flat Fee and Per Unit charge models\n",
              "section": "Additional Fields"
            },
            {
              "name": "priceChangeOption",
              "label": "Price Change Option",
              "type": "string",
              "required": false,
              "description": "Applies an automatic price change when a termed subscription is renewed. The Zuora Billing Admin setting Enable Automatic Price Change When Subscriptions are Renewed?  must be set to Yes to use this field.  See Define Default Subscription Settings for more information on setting this option.\n\nValues:\n\n* `NoChange` (default)\n* `SpecificPercentageValue`\n* `UseLatestProductCatalogPricing`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n* Not available for the Fixed-Amount Discount charge model.\n",
              "section": "Additional Fields"
            },
            {
              "name": "priceIncreasePercentage",
              "label": "Price Increase Percentage",
              "type": "number",
              "required": false,
              "description": "Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`.\n\nDecimal between -100 and 100.\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n\nNot available for the Fixed-Amount Discount charge model.\n",
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeId",
              "label": "Product Rate Plan Charge Id",
              "type": "string",
              "required": true,
              "section": "Additional Fields"
            },
            {
              "name": "productRatePlanChargeNumber",
              "label": "Product Rate Plan Charge Number",
              "type": "string",
              "required": false,
              "description": "Number of a product rate-plan charge for this subscription.                     ",
              "section": "Account Settings"
            },
            {
              "name": "quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "description": "Number of units. Must be >=`0`.\n\nAvailable for the following charge types for the Per Unit, Volume Pricing, and Tiered Pricing charge models:\n\n* One-time\n* Recurring\n",
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
              "description": "Specifies the number of month or week for the charges billing period. Required if you set the value of the `billingPeriod` field to `Specific_Months` or `Specific_Weeks`.\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
              "section": "Invoice & Document Settings"
            },
            {
              "name": "specificEndDate",
              "label": "Specific End Date",
              "type": "date",
              "required": false,
              "description": "Defines when the charge ends after the charge trigger date.\n\nThis field is only applicable when the `endDateCondition` field is set to `Specific_End_Date`.\n\nIf the subscription ends before the specific end date, the charge ends when the subscription ends. But if the subscription end date is subsequently changed through a Renewal, or Terms and Conditions amendment, the charge will end on the specific end date.\n",
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
              "description": "Container for Volume, Tiered or Tiered with Overage charge models. Supports the following charge types:\n\n* One-time\n* Recurring\n* Usage-based\n",
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
              "description": "Specifies the rate to credit a customer for unused units of usage. This field applies only for overage charge models when the `OverageUnusedUnitsCreditOption` field is set to `CreditBySpecificRate`.\n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
              "section": "Credit & Settlement Settings"
            },
            {
              "name": "upToPeriods",
              "label": "Up To Periods",
              "type": "number",
              "required": false,
              "description": "The period type used to define when the charge ends. \n\nValues:\n\n* `Billing_Periods`\n* `Days`\n* `Weeks`\n* `Months`\n* `Years`\n\nYou must use this field together with the `upToPeriods` field to specify the time period.\n\nThis field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. \n",
              "section": "Additional Fields"
            },
            {
              "name": "upToPeriodsType",
              "label": "Up To Periods Type",
              "type": "string",
              "required": false,
              "description": "The period type used to define when the charge ends. \n\nValues:\n\n* `Billing_Periods`\n* `Days`\n* `Weeks`\n* `Months`\n* `Years`\n\nYou must use this field together with the `upToPeriods` field to specify the time period.\n\nThis field is applicable only when the `endDateCondition` field is set to `Fixed_Period`. \n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "contractEffectiveDate",
          "label": "Contract Effective Date",
          "type": "date",
          "required": false,
          "description": "Effective date of the new subscription, as yyyy-mm-dd.",
          "section": "Additional Fields"
        },
        {
          "name": "customerAcceptanceDate",
          "label": "Customer Acceptance Date",
          "type": "date",
          "required": false,
          "description": "The date when the customer accepts the contract in yyyy-mm-dd format.\nWhen this field is not set:\n* If the `serviceActivationDate` field is not set, the value of this field\nis set to be the contract effective date.\n* If the `serviceActivationDate` field is set, the value of this field is\nset to be the service activation date.\n\nThe billing trigger dates must follow this rule: contractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate\n",
          "section": "Additional Fields"
        },
        {
          "name": "effectivePolicy",
          "label": "Effective Policy",
          "type": "string",
          "required": false,
          "description": "The default value for the `effectivePolicy` field is as follows:\n  * If the rate plan change (from old to new) is an upgrade, the effective policy is `EffectiveImmediately` by default.\n  * If the rate plan change (from old to new) is a downgrade, the effective policy is `EffectiveEndOfBillingPeriod` by default.\n  * Otherwise, the effective policy is `SpecificDate` by default.\n\n**Notes**: \n  * When setting this field to `EffectiveEndOfBillingPeriod`, you cannot set the <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/W_Subscription_and_Amendment_Dates#Billing_Trigger_Dates\" target=\"_blank\">billing trigger dates</a> for the subscription as the system will automatically set the trigger dates to the end of billing period.\n  * When setting this field to `SpecificDate`, you must also set the `contractEffectiveDate` field.\n",
          "enum": [
            "EffectiveImmediately",
            "EffectiveEndOfBillingPeriod",
            "SpecificDate"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "externalCatalogPlanId",
          "label": "External Catalog Plan Id",
          "type": "string",
          "required": false,
          "description": "An external ID of the rate plan to be removed. You can use this field to specify an existing rate plan in your subscription. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. However, if there are multiple rate plans with the same `productRatePlanId` value existing in the subscription, you must use the `ratePlanId` field to remove the rate plan. The `externalCatalogPlanId` field cannot be used to distinguish multiple rate plans in this case.\n\n**Note:** Provide only one of `externalCatalogPlanId`, `ratePlanId` or `productRatePlanId`. If more than one field is provided then the request would fail.\n",
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
          "name": "newExternalCatalogPlanId",
          "label": "New External Catalog Plan Id",
          "type": "string",
          "required": false,
          "description": "An external ID of the product rate plan to be added. You can use this field to specify a product rate plan that is imported from an external system. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan.\n\n**Note:** Provide only one of `newExternalCatalogPlanId` or `newProductRatePlanId`. If both fields are provided then the request would fail.\n",
          "section": "Additional Fields"
        },
        {
          "name": "newExternalIdSourceSystem",
          "label": "New External Id Source System",
          "type": "string",
          "required": false,
          "description": "The ID of the external source system. You can use this field and `newExternalCatalogPlanId` to specify a product rate plan that is imported from an external system.\n\n**Note:** If both `newExternalCatalogPlanId`, `newExternalIdSourceSystem` and `newProductRatePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
          "section": "Additional Fields"
        },
        {
          "name": "newProductRatePlanId",
          "label": "New Product Rate Plan Id",
          "type": "string",
          "required": false,
          "description": "ID of a product rate plan for this subscription.",
          "section": "Additional Fields"
        },
        {
          "name": "newProductRatePlanNumber",
          "label": "New Product Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a product rate plan for this subscription.",
          "section": "Account Settings"
        },
        {
          "name": "productRatePlanId",
          "label": "Product Rate Plan Id",
          "type": "string",
          "required": false,
          "description": "ID of the product rate plan that the removed rate plan is based on.\n",
          "section": "Additional Fields"
        },
        {
          "name": "productRatePlanNumber",
          "label": "Product Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a product rate plan for this subscription.    ",
          "section": "Account Settings"
        },
        {
          "name": "ratePlanId",
          "label": "Rate Plan Id",
          "type": "string",
          "required": false,
          "description": "ID of a rate plan to remove. Note that the removal of a rate plan through the Change Plan amendment supports the function of <a href=\"https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Subscribe_and_Amend/E_Amendments/EB_Remove_rate_plan_on_subscription_before_future-dated_removals\" target=\"_blank\">removal before future-dated removals</a>, as in a Remove Product amendment.\n",
          "section": "Additional Fields"
        },
        {
          "name": "resetBcd",
          "label": "Reset Bcd",
          "type": "boolean",
          "required": false,
          "description": "If resetBcd is true then reset the Account BCD to the effective date; if it is false keep the original BCD.\n",
          "defaultValue": false,
          "section": "Additional Fields"
        },
        {
          "name": "serviceActivationDate",
          "label": "Service Activation Date",
          "type": "date",
          "required": false,
          "description": "The date when the change in the subscription is activated in yyyy-mm-dd format. You must specify a Service Activation date if the Customer Acceptance date is set. If the Customer Acceptance date is not set, the value of the `serviceActivationDate` field defaults to be the Contract Effective Date. The billing trigger dates must follow this rule: contractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate",
          "section": "Tax Settings"
        },
        {
          "name": "subType",
          "label": "Sub Type",
          "type": "string",
          "required": false,
          "description": "Use this field to choose the sub type for your change plan amendment. \n\nHowever, if you do not set this field, the field will be automatically generated by the system according to the following rules:\n\nWhen the old and new rate plans are within the same Grading catalog group:\n* If the grade of new plan is greater than that of the old plan, this is an \"Upgrade\".\n* If the grade of new plan is less than that of the old plan, this is a \"Downgrade\".\n* If the grade of new plan equals that of the old plan, this is a \"Crossgrade\".\n\nWhen the old and new rate plans are not in the same Grading catalog group, or either has no group, this is \"PlanChanged\".\n",
          "enum": [
            "Upgrade",
            "Downgrade",
            "Crossgrade",
            "PlanChanged"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionRatePlanNumber",
          "label": "Subscription Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a rate plan for this subscription.  ",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "currentTerm",
      "label": "Current Term",
      "type": "number",
      "required": false,
      "description": "The length of the period for the current subscription term. If `termType` is `TERMED`, this field is required and must be greater than `0`. If `termType` is `EVERGREEN`, this value is ignored.\n",
      "section": "Additional Fields"
    },
    {
      "name": "currentTermPeriodType",
      "label": "Current Term Period Type",
      "type": "string",
      "required": false,
      "description": "The period type for the current subscription term.\n\nThis field is used with the `CurrentTerm` field to specify the current subscription term.\n\nValues are:\n\n* `Month` (default)\n* `Year`\n* `Day`\n* `Week`\n",
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
      "name": "includeExistingDraftDocItems",
      "label": "Include Existing Draft Doc Items",
      "type": "boolean",
      "required": false,
      "description": "Specifies whether to include draft invoice items in subscription previews.\nValues are:\n\n* `true` (default). Includes draft invoice items in the preview result.\n* `false`. Excludes draft invoice items in the preview result.\n\n**Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `207.0` or a later available version.\n",
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
      "name": "preview",
      "label": "Preview",
      "type": "boolean",
      "required": false,
      "description": "If `true` the update is made in preview mode. The default setting is `false`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "previewType",
      "label": "Preview Type",
      "type": "string",
      "required": false,
      "description": "The type of preview you will receive. \n\n**Note**: If your API minor version is earlier than `206.0` or you specify the `Zuora-Version` header for this request to `206.0` or earlier, the following values are supported for the `previewType` field:\n  - `InvoiceItem` (default)\n  - `ChargeMetrics`\n  - `InvoiceItemChargeMetrics`\n",
      "defaultValue": "LegalDoc",
      "enum": [
        "LegalDoc",
        "ChargeMetrics",
        "LegalDocChargeMetrics"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "remove",
      "label": "Remove",
      "type": "array",
      "required": false,
      "description": "Container for removing one or more rate plans.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "bookingDate",
          "label": "Booking Date",
          "type": "date",
          "required": false,
          "description": "The booking date that you want to set for the amendment contract. The booking date of an amendment is the equivalent of the order date of an order. This field must be in the `yyyy-mm-dd` format. The default value is the current date when you make the API call. \n",
          "section": "Additional Fields"
        },
        {
          "name": "contractEffectiveDate",
          "label": "Contract Effective Date",
          "type": "date",
          "required": true,
          "description": "Effective date of the new subscription, as yyyy-mm-dd.\n",
          "section": "Additional Fields"
        },
        {
          "name": "customerAcceptanceDate",
          "label": "Customer Acceptance Date",
          "type": "date",
          "required": false,
          "description": "The date when the customer accepts the contract in yyyy-mm-dd format.\n\nIf this field is not set:\n\n* If the `serviceActivationDate` field is not set, the value of this field is set to be the contract effective date.\n* If the `serviceActivationDate` field is set, the value of this field is set to be the service activation date.\n\nThe billing trigger dates must follow this rule:\n\ncontractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate\n",
          "section": "Additional Fields"
        },
        {
          "name": "externalCatalogPlanId",
          "label": "External Catalog Plan Id",
          "type": "string",
          "required": false,
          "description": "An external ID of the rate plan to be removed. You can use this field to specify an existing rate plan in your subscription. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. However, if there are multiple rate plans with the same `productRatePlanId` value existing in the subscription, you must use the `ratePlanId` field to remove the rate plan. The `externalCatalogPlanId` field cannot be used to distinguish multiple rate plans in this case.\n\n**Note:** If both `externalCatalogPlanId` and `ratePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
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
          "name": "productRatePlanNumber",
          "label": "Product Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a product rate plan for this subscription.\n",
          "section": "Account Settings"
        },
        {
          "name": "ratePlanId",
          "label": "Rate Plan Id",
          "type": "string",
          "required": false,
          "description": "ID of a rate plan for this subscription. This can be the latest version or any history version of ID.\n",
          "section": "Additional Fields"
        },
        {
          "name": "serviceActivationDate",
          "label": "Service Activation Date",
          "type": "date",
          "required": false,
          "description": "The date when the remove amendment is activated in yyyy-mm-dd format.\n\nYou must specify a Service Activation date if the Customer Acceptance date is set. If the Customer Acceptance date is not set, the value of the `serviceActivationDate` field defaults to be the Contract Effective Date.\n\nThe billing trigger dates must follow this rule:\n\ncontractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate\n",
          "section": "Tax Settings"
        },
        {
          "name": "subscriptionRatePlanNumber",
          "label": "Subscription Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a rate plan for this subscription.\n",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "renewalSetting",
      "label": "Renewal Setting",
      "type": "string",
      "required": false,
      "description": "Specifies whether a termed subscription will remain `TERMED` or change to `EVERGREEN` when it is renewed. \n\nValues are:\n\n* `RENEW_WITH_SPECIFIC_TERM` (default)\n* `RENEW_TO_EVERGREEN`\n",
      "section": "Additional Fields"
    },
    {
      "name": "renewalTerm",
      "label": "Renewal Term",
      "type": "number",
      "required": false,
      "description": "The length of the period for the subscription renewal term. Default is `0`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "renewalTermPeriodType",
      "label": "Renewal Term Period Type",
      "type": "string",
      "required": false,
      "description": "\nThe period type for the subscription renewal term.\n\nThis field is used with the `renewalTerm` field to specify the subscription renewal term.\n\nValues are:\n\n* `Month` (default)\n* `Year`\n* `Day`\n* `Week`\n",
      "section": "Additional Fields"
    },
    {
      "name": "targetDate",
      "label": "Target Date",
      "type": "date",
      "required": false,
      "description": "Date through which to calculate charges if an invoice or a credit memo is generated, as\nyyyy-mm-dd. Default is current date.\n\n\n**Note:** The credit memo is only available if you have the Invoice Settlement feature enabled.\n\n\nThis field is available only if you are on the latest Zuora API minor version, or you set the `Zuora-Version` request header to `211.0` or a  later available version.\n",
      "section": "Additional Fields"
    },
    {
      "name": "termStartDate",
      "label": "Term Start Date",
      "type": "date",
      "required": false,
      "description": "Date the subscription term begins, as yyyy-mm-dd. If this is a renewal subscription, this date is different from the subscription start date. \n",
      "section": "Additional Fields"
    },
    {
      "name": "termType",
      "label": "Term Type",
      "type": "string",
      "required": false,
      "description": "Possible values are: `TERMED`, `EVERGREEN`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "update",
      "label": "Update",
      "type": "array",
      "required": false,
      "description": "Container for updating one or more rate plans.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "bookingDate",
          "label": "Booking Date",
          "type": "date",
          "required": false,
          "description": "The booking date that you want to set for the amendment contract. The booking date of an amendment is the equivalent of the order date of an order. This field must be in the `yyyy-mm-dd` format. The default value is the current date when you make the API call. \n",
          "section": "Additional Fields"
        },
        {
          "name": "chargeUpdateDetails",
          "label": "Charge Update Details",
          "type": "array",
          "required": false,
          "description": "Container for one or more product rate plan charges. \n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "billingPeriodAlignment",
              "label": "Billing Period Alignment",
              "type": "string",
              "required": false,
              "description": "Aligns charges within the same subscription if multiple charges begin on different dates.\n\nValues:\n\n* `AlignToCharge`\n* `AlignToSubscriptionStart`\n* `AlignToTermStart`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n",
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
              "name": "includedUnits",
              "label": "Included Units",
              "type": "number",
              "required": false,
              "description": "Specifies the number of units in the base set of units for this charge. Must be >=0.\n\nAvailable for the following charge type for the Overage charge model:\n* Usage-based\n",
              "section": "Additional Fields"
            },
            {
              "name": "overagePrice",
              "label": "Overage Price",
              "type": "number",
              "required": false,
              "description": "Price for units over the allowed amount. \n\nAvailable for the following charge type for the Overage and Tiered with Overage charge models:\n\n* Usage-based\n",
              "section": "Additional Fields"
            },
            {
              "name": "price",
              "label": "Price",
              "type": "number",
              "required": false,
              "description": "Price for units in the subscription rate plan.\n\nSupports all charge types for the Flat Fee and Per Unit charge models\n",
              "section": "Additional Fields"
            },
            {
              "name": "priceChangeOption",
              "label": "Price Change Option",
              "type": "string",
              "required": false,
              "description": "Applies an automatic price change when a termed subscription is renewed. The Billing Admin setting **Enable Automatic Price Change When Subscriptions are Renewed?** must be set to Yes to use this field.\n\nValues:\n\n* `NoChange` (default)\n* `SpecificPercentageValue`\n* `UseLatestProductCatalogPricing`\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n\nNot available for the Fixed-Amount Discount charge model.\n",
              "section": "Additional Fields"
            },
            {
              "name": "priceIncreasePercentage",
              "label": "Price Increase Percentage",
              "type": "number",
              "required": false,
              "description": "Specifies the percentage to increase or decrease the price of a termed subscription's renewal. Required if you set the `PriceChangeOption` field to `SpecificPercentageValue`.\n\nDecimal between `-100` and `100`.\n\nAvailable for the following charge types:\n\n* Recurring\n* Usage-based\n\nNot available for the Fixed-Amount Discount charge model.\n",
              "section": "Additional Fields"
            },
            {
              "name": "quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "description": "Quantity of units; must be greater than zero.\n",
              "section": "Additional Fields"
            },
            {
              "name": "ratePlanChargeId",
              "label": "Rate Plan Charge Id",
              "type": "string",
              "required": true,
              "description": "ID of a rate-plan charge for this subscription. It can be the latest version or any history version of ID.\n",
              "section": "Additional Fields"
            },
            {
              "name": "tiers",
              "label": "Tiers",
              "type": "array",
              "required": false,
              "description": "Container for Volume, Tiered or Tiered with Overage charge models. Supports the following charge types:\n\n* One-time\n* Recurring\n* Usage-based\n",
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
              "description": "Specifies when to start billing the customer for the charge. Required if the `triggerEvent` field is set to USD.\n\n`triggerDate` cannot be updated for the following using the REST update subscription call:\n\n* One-time charge type\n* Discount-Fixed Amount charge model\n* Discount-Percentage charge model\n",
              "section": "Additional Fields"
            },
            {
              "name": "triggerEvent",
              "label": "Trigger Event",
              "type": "string",
              "required": false,
              "description": "Specifies when to start billing the customer for the charge.\n\nValues:\n\n* `UCE`\n* `USA`\n* `UCA`\n* `USD`\n\nThis is the date when charge changes in the REST request become effective.\n\n`triggerEvent` cannot be updated for the following using the REST update subscription call:\n\n* One-time charge type\n* Discount-Fixed Amount charge model\n* Discount-Percentage charge model\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "contractEffectiveDate",
          "label": "Contract Effective Date",
          "type": "date",
          "required": true,
          "description": "The date when the amendment changes take effect. The format of the date is yyyy-mm-dd.\n\nIf there is already a future-dated Update Product amendment on the subscription, the `specificUpdateDate` field will be used instead of this field to specify when the Update Product amendment takes effect.\n",
          "section": "Additional Fields"
        },
        {
          "name": "customerAcceptanceDate",
          "label": "Customer Acceptance Date",
          "type": "date",
          "required": false,
          "description": "The date when the customer accepts the contract in yyyy-mm-dd format.\n\nIf this field is not set:\n\n* If the `serviceActivationDate` field is not set, the value of this field is set to be the contract effective date.\n* If the `serviceActivationDate` field is set, the value of this field is set to be the service activation date.\n\nThe billing trigger dates must follow this rule:\n\ncontractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate\n",
          "section": "Additional Fields"
        },
        {
          "name": "externalCatalogPlanId",
          "label": "External Catalog Plan Id",
          "type": "string",
          "required": false,
          "description": "An external ID of the rate plan to be updated. You can use this field to specify an existing rate plan in your subscription. The value of the `externalCatalogPlanId` field must match one of the values that are predefined in the `externallyManagedPlanIds` field on a product rate plan. However, if there are multiple rate plans with the same `productRatePlanId` value existing in the subscription, you must use the `ratePlanId` field to update the rate plan. The `externalCatalogPlanId` field cannot be used to distinguish multiple rate plans in this case.\n\n**Note:** If both `externalCatalogPlanId` and `ratePlanId` are provided. They must point to the same product rate plan. Otherwise, the request would fail.\n",
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
          "name": "productRatePlanNumber",
          "label": "Product Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a product rate plan for this subscription.\n",
          "section": "Account Settings"
        },
        {
          "name": "ratePlanId",
          "label": "Rate Plan Id",
          "type": "string",
          "required": false,
          "description": "ID of a rate plan for this subscription. This can be the latest version or any history version of ID.\n",
          "section": "Additional Fields"
        },
        {
          "name": "serviceActivationDate",
          "label": "Service Activation Date",
          "type": "date",
          "required": false,
          "description": "The date when the update amendment is activated in yyyy-mm-dd format.\n\nYou must specify a Service Activation date if the Customer Acceptance date is set. If the Customer Acceptance date is not set, the value of the `serviceActivationDate` field defaults to be the Contract Effective Date.\n\nThe billing trigger dates must follow this rule:\n\ncontractEffectiveDate <= serviceActivationDate <= contractAcceptanceDate\n",
          "section": "Tax Settings"
        },
        {
          "name": "specificUpdateDate",
          "label": "Specific Update Date",
          "type": "date",
          "required": false,
          "description": "The date when the Update Product amendment takes effect. This field is only applicable if there is already a future-dated Update Product amendment on the subscription. The format of the date is yyyy-mm-dd.\n\nRequired only for Update Product amendments if there is already a future-dated Update Product amendment on the subscription.\n",
          "section": "Additional Fields"
        },
        {
          "name": "subscriptionRatePlanNumber",
          "label": "Subscription Rate Plan Number",
          "type": "string",
          "required": false,
          "description": "Number of a rate plan for this subscription.\n",
          "section": "Account Settings"
        }
      ],
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
      "description": "Whether to automatically apply credit memos or unapplied payments, or both to an invoice.\n\nIf the value is `true`, the credit memo or unapplied payment, or both will be automatically applied to the invoice. If no value is specified or the value is `false`, no action is taken.\n\n**Note:** This field is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.\n",
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
      "description": "Collects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account.\n\nIf the value is `true`, the automatic payment is collected. If the value is `false`, no action is taken.\n\nPrerequisite: The `invoice` or `runBilling` field must be `true`. \n\n**Note**: This field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `196.0` or a later available version.\n",
      "defaultValue": false,
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
      "description": "Separates a single subscription from other subscriptions and invoices the charge independently. \n\nIf the value is `true`, the subscription is billed separately from other subscriptions. If the value is `false`, the subscription is included with other subscriptions in the account invoice.\n\nThe default value is `false`.\nPrerequisite: The default subscription setting Enable Subscriptions to be Invoiced Separately must be set to Yes.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "runBilling",
      "label": "Run Billing",
      "type": "boolean",
      "required": false,
      "description": "Creates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos).  \n\n\nThe billing documents generated in this operation is only for this subscription, not for the entire customer account.\n\nThis field is available only if you are on the latest Zuora API version, or you set the `Zuora-Version` request header to `211.0` or a later available version.\n\nPossible values:\n\n- `true`: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.\n\n\n- `false`: No invoice is created.\n",
      "defaultValue": false,
      "section": "Invoice & Document Settings"
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
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
