import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createproductEndpoint: ApiEndpoint = {
  "id": "createproduct",
  "name": "Create a product with plans and charges",
  "description": "Create a product in the Product Catalog with one or more plans and charges.",
  "method": "POST",
  "path": "/commerce/products",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Product name.",
      "section": "Account Settings"
    },
    {
      "name": "product_number",
      "label": "Product Number",
      "type": "string",
      "required": false,
      "description": "The product number that uniquely identifies the product in the product catalog.",
      "section": "Account Settings"
    },
    {
      "name": "sku",
      "label": "Sku",
      "type": "string",
      "required": false,
      "description": "The stock keeping unit (SKU) associated with the product or invoice item.",
      "section": "Additional Fields"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "date",
      "required": true,
      "description": "Product effective start date (UTC, YYYY-MM-DD).",
      "section": "Additional Fields"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "date",
      "required": true,
      "description": "Product effective end date (UTC, YYYY-MM-DD).",
      "section": "Additional Fields"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "string",
      "required": true,
      "description": "Product category.\n",
      "enum": [
        "base",
        "add_on",
        "other"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "plans",
      "label": "Plans",
      "type": "array",
      "required": true,
      "description": "Product rate plans to create under the product.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "Rate plan name.",
          "section": "Account Settings"
        },
        {
          "name": "start_date",
          "label": "Start Date",
          "type": "date",
          "required": true,
          "description": "Rate plan effective start date (UTC, YYYY-MM-DD).",
          "section": "Additional Fields"
        },
        {
          "name": "end_date",
          "label": "End Date",
          "type": "date",
          "required": true,
          "description": "Rate plan effective end date (UTC, YYYY-MM-DD).",
          "section": "Additional Fields"
        },
        {
          "name": "active_currencies",
          "label": "Active Currencies",
          "type": "array",
          "required": true,
          "description": "ISO currency codes enabled for this plan.",
          "itemType": "string",
          "section": "Additional Fields"
        },
        {
          "name": "charges",
          "label": "Charges",
          "type": "array",
          "required": true,
          "description": "Charges to create under this rate plan.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": true,
              "description": "Charge name.",
              "section": "Account Settings"
            },
            {
              "name": "charge_type",
              "label": "Charge Type",
              "type": "string",
              "required": true,
              "description": "Charge type.",
              "enum": [
                "one_time",
                "recurring",
                "usage"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "charge_model",
              "label": "Charge Model",
              "type": "string",
              "required": true,
              "description": "Charge model.",
              "enum": [
                "flat_fee",
                "per_unit",
                "overage",
                "volume",
                "tiered",
                "tiered_overage",
                "discount_fixed_amount",
                "discount_percentage",
                "custom_charge_model",
                "delivery",
                "minimum_commitment_true_up",
                "calculated",
                "high_water_mark_volume_pricing",
                "high_water_mark_tiered_pricing",
                "multi_attribute_pricing",
                "prerated_pricing",
                "prerated_per_unit"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "unit_of_measure",
              "label": "Unit Of Measure",
              "type": "string",
              "required": false,
              "description": "Unit of measure for per-unit or usage charges.",
              "section": "Additional Fields"
            },
            {
              "name": "list_price_base",
              "label": "List Price Base",
              "type": "string",
              "required": false,
              "description": "List price base for the charge.\n",
              "enum": [
                "Per_Billing_Period",
                "Per_Month",
                "Per_Week",
                "Per_Year",
                "Per_Specific_Months",
                "Per_Validity_Period"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "default_quantity",
              "label": "Default Quantity",
              "type": "number",
              "required": false,
              "description": "Default quantity for this charge on subscriptions created from the plan.",
              "section": "Additional Fields"
            },
            {
              "name": "min_quantity",
              "label": "Min Quantity",
              "type": "number",
              "required": false,
              "description": "Minimum quantity allowed for this charge.   Equivalent to the `MinQuantity` field in the legacy v1 Product Rate Plan Charge.\n",
              "section": "Additional Fields"
            },
            {
              "name": "max_quantity",
              "label": "Max Quantity",
              "type": "number",
              "required": false,
              "description": "Maximum quantity allowed for this charge.   Equivalent to the `MaxQuantity` field in the legacy v1 Product Rate Plan Charge.\n",
              "section": "Additional Fields"
            },
            {
              "name": "pricing",
              "label": "Pricing",
              "type": "object",
              "required": false,
              "description": "Default (standard) pricing defined at the charge level.\nProvide exactly one structure per the charge model.\n",
              "fields": [
                {
                  "name": "flat_amounts",
                  "label": "Flat Amounts",
                  "type": "object",
                  "required": true,
                  "description": "Map of currency to flat amount.",
                  "section": "Additional Fields"
                },
                {
                  "name": "unit_amounts",
                  "label": "Unit Amounts",
                  "type": "object",
                  "required": true,
                  "description": "Map of currency to per-unit price.",
                  "section": "Additional Fields"
                },
                {
                  "name": "tiers",
                  "label": "Tiers",
                  "type": "array",
                  "required": true,
                  "description": "Tier definitions (volume or tiered) with optional min/max caps.",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "tier",
                      "label": "Tier",
                      "type": "string",
                      "required": true,
                      "description": "Tier identifier (e.g., \"1\", \"2\").",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "from",
                      "label": "From",
                      "type": "number",
                      "required": true,
                      "description": "Lower bound (inclusive).",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "up_to",
                      "label": "Up To",
                      "type": "number",
                      "required": false,
                      "description": "Upper bound (inclusive). Omit/null for open-ended last tier.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "price_format",
                      "label": "Price Format",
                      "type": "string",
                      "required": true,
                      "description": "Price format for the tier.",
                      "enum": [
                        "price_format_flat_fee",
                        "price_format_per_unit"
                      ],
                      "section": "Additional Fields"
                    },
                    {
                      "name": "unit_amounts",
                      "label": "Unit Amounts",
                      "type": "object",
                      "required": false,
                      "description": "Per-unit price by currency for this tier.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "flat_amounts",
                      "label": "Flat Amounts",
                      "type": "object",
                      "required": false,
                      "description": "Flat amount by currency for this tier (if applicable).",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "min_amounts",
                      "label": "Min Amounts",
                      "type": "object",
                      "required": false,
                      "description": "Minimum billed amount by currency for this tier.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "max_amounts",
                      "label": "Max Amounts",
                      "type": "object",
                      "required": false,
                      "description": "Maximum billed amount by currency for this tier.",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "discount_amounts",
                  "label": "Discount Amounts",
                  "type": "object",
                  "required": true,
                  "description": "Map of currency to discount amount.",
                  "section": "Additional Fields"
                },
                {
                  "name": "discount_percentage",
                  "label": "Discount Percentage",
                  "type": "number",
                  "required": true,
                  "description": "Discount percentage (e.g., 15 for 15%).",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "bill_cycle",
              "label": "Bill Cycle",
              "type": "object",
              "required": true,
              "description": "Billing configuration of the charge.",
              "fields": [
                {
                  "name": "type",
                  "label": "Type",
                  "type": "string",
                  "required": true,
                  "description": "Determines how the billing day is selected for this charge.\n",
                  "enum": [
                    "default_from_customer",
                    "specific_day_of_month",
                    "subscription_start_day",
                    "charge_trigger_day",
                    "specific_day_of_week",
                    "term_start_day",
                    "term_end_day"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "period",
                  "label": "Period",
                  "type": "string",
                  "required": true,
                  "description": "Length of each billing period. \n",
                  "enum": [
                    "bill_cycle_period_month",
                    "bill_cycle_period_quarter",
                    "bill_cycle_period_semi_annual",
                    "bill_cycle_period_annual",
                    "bill_cycle_period_eighteen_months",
                    "bill_cycle_period_two_years",
                    "bill_cycle_period_three_years",
                    "bill_cycle_period_five_years",
                    "bill_cycle_period_specific_months",
                    "bill_cycle_period_subscription_term",
                    "bill_cycle_period_week",
                    "bill_cycle_period_specific_weeks",
                    "bill_cycle_period_specific_days"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "period_alignment",
                  "label": "Period Alignment",
                  "type": "string",
                  "required": true,
                  "description": "How the billing period start aligns. \n",
                  "enum": [
                    "align_to_charge",
                    "align_to_subscription_start",
                    "align_to_term_start",
                    "align_to_term_end"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "timing",
                  "label": "Timing",
                  "type": "string",
                  "required": false,
                  "description": "When the charge is billed relative to the service period.\n",
                  "enum": [
                    "in_advance",
                    "in_arrears"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "day_of_month",
                  "label": "Day Of Month",
                  "type": "number",
                  "required": false,
                  "description": "Required if \"type\" is `specific_day_of_month`.",
                  "section": "Additional Fields"
                },
                {
                  "name": "day_of_week",
                  "label": "Day Of Week",
                  "type": "string",
                  "required": false,
                  "description": "Used when \"type\" is `specific_day_of_week`.\n",
                  "enum": [
                    "sunday",
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "friday",
                    "saturday"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "specific_period",
                  "label": "Specific Period",
                  "type": "string",
                  "required": false,
                  "description": "Optional specific period value when `period` is `bill_cycle_period_specific_months`, `bill_cycle_period_specific_weeks`, or `bill_cycle_period_specific_days`.   Equivalent to `SpecificBillingPeriod` in the legacy v1 API.\n",
                  "section": "Additional Fields"
                }
              ],
              "section": "Invoice & Document Settings"
            },
            {
              "name": "trigger_event",
              "label": "Trigger Event",
              "type": "string",
              "required": true,
              "description": "Event that triggers the charge. \n",
              "enum": [
                "contract_effective",
                "service_activation",
                "customer_acceptance",
                "specific_date"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "end_date_condition",
              "label": "End Date Condition",
              "type": "string",
              "required": true,
              "description": "Defines when the charge ends. \n",
              "enum": [
                "subscription_end",
                "end_date_one_time",
                "fixed_period",
                "specific_end_date"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "up_to_periods_type",
              "label": "Up To Periods Type",
              "type": "string",
              "required": false,
              "description": "Unit of time used when `end_date_condition` = `fixed_period`.\nMaps to the duration unit (billing periods, days, weeks, months, years).\n",
              "enum": [
                "billing_periods",
                "days",
                "weeks",
                "months",
                "years"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "up_to_periods",
              "label": "Up To Periods",
              "type": "number",
              "required": false,
              "description": "Number of periods used when `end_date_condition` = `fixed_period`.\n",
              "section": "Additional Fields"
            },
            {
              "name": "overage_options",
              "label": "Overage Options",
              "type": "object",
              "required": false,
              "description": "Configuration for overage smoothing and period-based overage calculation. Equivalent to `NumberOfPeriod` and related fields in the legacy v1 API.\n",
              "fields": [
                {
                  "name": "number_of_periods",
                  "label": "Number Of Periods",
                  "type": "number",
                  "required": false,
                  "description": "Number of billing periods used for overage smoothing / calculation.\n",
                  "section": "Account Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "price_increase_percentage",
              "label": "Price Increase Percentage",
              "type": "number",
              "required": false,
              "description": "Percentage used when `price_change_option` is set to apply a specific percentage price increase. Equivalent to `PriceIncreasePercentage` (v1).\n",
              "section": "Additional Fields"
            },
            {
              "name": "price_change_option",
              "label": "Price Change Option",
              "type": "string",
              "required": false,
              "description": "Specifies how price changes are handled for future terms when this product or rate plan is amended. Equivalent to `PriceChangeOption` in the legacy v1 API. Examples include `no_change`, `specific_percentage_value`, or `use_latest_product_catalog_pricing`.\n",
              "enum": [
                "no_change",
                "specific_percentage_value",
                "use_latest_product_catalog_pricing"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "use_tenant_default_for_price_change",
              "label": "Use Tenant Default For Price Change",
              "type": "boolean",
              "required": false,
              "description": "When true, uses the tenant-level default setting for price change behavior instead of the charge-level `price_change_option`.   Equivalent to `UseTenantDefaultForPriceChange` in the legacy v1 API.\n",
              "section": "Additional Fields"
            },
            {
              "name": "discount_options",
              "label": "Discount Options",
              "type": "object",
              "required": false,
              "description": "Discount configuration for discount charge models, including \"Apply Discount To\" and related settings.\n",
              "fields": [
                {
                  "name": "discount_class",
                  "label": "Discount Class",
                  "type": "string",
                  "required": false,
                  "description": "Discount class to associate with this discount charge.",
                  "section": "Additional Fields"
                },
                {
                  "name": "stacked_discount",
                  "label": "Stacked Discount",
                  "type": "boolean",
                  "required": false,
                  "description": "When true, this discount can stack with other discounts.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "apply_to",
                  "label": "Apply To",
                  "type": "array",
                  "required": false,
                  "description": "Charge types that this discount applies to.   Mirrors the \"One-Time / Recurring / Usage\" checkboxes in the UI.\n",
                  "itemType": "string",
                  "itemEnum": [
                    "one_time",
                    "recurring",
                    "usage"
                  ],
                  "section": "Credit & Settlement Settings"
                },
                {
                  "name": "discount_level",
                  "label": "Discount Level",
                  "type": "string",
                  "required": false,
                  "description": "Level at which the discount applies (for example, subscription-level or account-level discounts).\n",
                  "enum": [
                    "rate_plan",
                    "subscription",
                    "account"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "apply_to_billing_period_partially",
                  "label": "Apply To Billing Period Partially",
                  "type": "boolean",
                  "required": false,
                  "description": "When true, allows the discount to apply to partial billing periods.\n",
                  "section": "Invoice & Document Settings"
                },
                {
                  "name": "specific_accounting_codes",
                  "label": "Specific Accounting Codes",
                  "type": "boolean",
                  "required": false,
                  "description": "When true, uses discount-specific accounting codes instead of inheriting from the discounted charges.   Equivalent to `UseDiscountSpecificAccountingCode` in the legacy v1 API.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "reflect_discount_in_net_amount",
                  "label": "Reflect Discount In Net Amount",
                  "type": "boolean",
                  "required": false,
                  "description": "When true, discount is reflected directly in the net amount (Apply To Charge Net Amount option in the UI).\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "rollover",
                  "label": "Rollover",
                  "type": "boolean",
                  "required": false,
                  "description": "Indicates whether unused discount amounts roll over to the next billing period.\n",
                  "section": "Additional Fields"
                },
                {
                  "name": "apply_details",
                  "label": "Apply Details",
                  "type": "array",
                  "required": false,
                  "description": "Explicit list of product charges that this discount applies to when targeting specific charges.\n",
                  "itemType": "object",
                  "itemFields": [
                    {
                      "name": "applied_product_rate_plan_id",
                      "label": "Applied Product Rate Plan Id",
                      "type": "string",
                      "required": false,
                      "description": "ID of the target product rate plan.",
                      "section": "Additional Fields"
                    },
                    {
                      "name": "applied_product_rate_plan_charge_id",
                      "label": "Applied Product Rate Plan Charge Id",
                      "type": "string",
                      "required": false,
                      "description": "ID of the target product rate plan charge.",
                      "section": "Additional Fields"
                    }
                  ],
                  "section": "Credit & Settlement Settings"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "accounting",
              "label": "Accounting",
              "type": "object",
              "required": false,
              "description": "Accounting fields accepted on create/update requests. Field names use snake_case.\n\n**Conditional requirement rules**\n- If **Allow blank Accounting Codes** = **Yes** → Accounting fields are **optional**.\n- If **Allow blank Accounting Codes** = **No** and the tenant **has Zuora Revenue** → **all Accounting fields except `accounting_code` are required**.\n- If **Allow blank Accounting Codes** = **No** and the tenant **does NOT have Zuora Revenue** → only `recognized_revenue_account` and `deferred_revenue_account` are required.\n\nThese rules apply to **all operations that accept `accounting`** in the payload.\n",
              "fields": [
                {
                  "name": "accounting_code",
                  "label": "Accounting Code",
                  "type": "string",
                  "required": false,
                  "description": "An accounting code associated with the charge for reporting/ERP mapping. Typically a short code or identifier, not the GL account name.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "accounts_receivable_account",
                  "label": "Accounts Receivable Account",
                  "type": "string",
                  "required": false,
                  "description": "Accounts Receivable (AR) account to book invoices for this charge. Must match an existing account in the tenant's chart of accounts.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "accounts_receivable_account_type",
                  "label": "Accounts Receivable Account Type",
                  "type": "string",
                  "required": false,
                  "description": "The account type associated with `accounts_receivable_account`. Maps to the `accountsReceivableAccountType` field in the accounting object.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "deferred_revenue_account",
                  "label": "Deferred Revenue Account",
                  "type": "string",
                  "required": false,
                  "description": "Deferred revenue (liability) account to book revenue before recognition. Must match an existing account in the tenant's chart of accounts.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "deferred_revenue_accounting_type",
                  "label": "Deferred Revenue Accounting Type",
                  "type": "string",
                  "required": false,
                  "description": "Accounting method/type applied to deferred revenue. Maps to the `deferredRevenueAccountingType` field in the accounting object.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "recognized_revenue_account",
                  "label": "Recognized Revenue Account",
                  "type": "string",
                  "required": false,
                  "description": "The name of the account where the Account Type is \"Recognized Revenue\".",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "recognized_revenue_account_type",
                  "label": "Recognized Revenue Account Type",
                  "type": "string",
                  "required": false,
                  "description": "The account type associated with `recognized_revenue_account`. Maps to the `recognizedRevenueAccountType` field in the accounting object.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "adjustment_liability_account",
                  "label": "Adjustment Liability Account",
                  "type": "string",
                  "required": false,
                  "description": "The name of the account where the Account Type is \"Adjustment Liability\".",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "adjustment_liability_account_type",
                  "label": "Adjustment Liability Account Type",
                  "type": "string",
                  "required": false,
                  "description": "The account type associated with `adjustment_liability_account`. Maps to the `adjustmentLiabilityAccountType` field in the accounting object.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "adjustment_revenue_account",
                  "label": "Adjustment Revenue Account",
                  "type": "string",
                  "required": false,
                  "description": "The name of the account where the Account Type is \"Adjustment Revenue\".",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "adjustment_revenue_account_type",
                  "label": "Adjustment Revenue Account Type",
                  "type": "string",
                  "required": false,
                  "description": "The account type associated with `adjustment_revenue_account`. Maps to the `adjustmentRevenueAccountType` field in the accounting object.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "contract_asset_account",
                  "label": "Contract Asset Account",
                  "type": "string",
                  "required": false,
                  "description": "The name of the account where the Account Type is \"Contract Asset\".",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "contract_asset_account_type",
                  "label": "Contract Asset Account Type",
                  "type": "string",
                  "required": false,
                  "description": "The account type associated with `contract_asset_account`. Maps to the `contractAssetAccountType` field in the accounting object.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "contract_liability_account",
                  "label": "Contract Liability Account",
                  "type": "string",
                  "required": false,
                  "description": "The name of the account where the Account Type is \"Contract Liability\".",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "contract_liability_account_type",
                  "label": "Contract Liability Account Type",
                  "type": "string",
                  "required": false,
                  "description": "The account type associated with `contract_liability_account`. Maps to the `contractLiabilityAccountType` field in the accounting object.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "contract_recognized_revenue_account",
                  "label": "Contract Recognized Revenue Account",
                  "type": "string",
                  "required": false,
                  "description": "Recognized revenue account used specifically for contract-based recognition flows. Must match an existing account in the tenant's chart of accounts.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "contract_recognized_revenue_account_type",
                  "label": "Contract Recognized Revenue Account Type",
                  "type": "string",
                  "required": false,
                  "description": "The account type associated with `contract_recognized_revenue_account`. Maps to the `contractRecognizedRevenueAccountType` field in the accounting object.\n",
                  "section": "Account Settings"
                },
                {
                  "name": "unbilled_receivables_account",
                  "label": "Unbilled Receivables Account",
                  "type": "string",
                  "required": false,
                  "description": "The name of the account where the Account Type is \"Unbilled Receivables\".",
                  "maxLength": 100,
                  "section": "Account Settings"
                },
                {
                  "name": "unbilled_receivables_account_type",
                  "label": "Unbilled Receivables Account Type",
                  "type": "string",
                  "required": false,
                  "description": "The account type associated with `unbilled_receivables_account`. Maps to the `unbilledReceivablesAccountType` field in the accounting object.\n",
                  "section": "Account Settings"
                }
              ],
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
