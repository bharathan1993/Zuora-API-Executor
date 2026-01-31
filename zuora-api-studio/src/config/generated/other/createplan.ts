import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createplanEndpoint: ApiEndpoint = {
  "id": "createplan",
  "name": "Create a product rate plan",
  "description": "Create a product rate plan (Plan) under an existing product.",
  "method": "POST",
  "path": "/commerce/plans",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "product_key",
      "label": "Product Key",
      "type": "string",
      "required": true,
      "description": "The unique identifier of the product under which the plan is created.",
      "section": "Additional Fields"
    },
    {
      "name": "start_date",
      "label": "Start Date",
      "type": "date",
      "required": true,
      "description": "Plan effective start date (UTC, YYYY-MM-DD).",
      "section": "Additional Fields"
    },
    {
      "name": "end_date",
      "label": "End Date",
      "type": "date",
      "required": true,
      "description": "Plan effective end date (UTC, YYYY-MM-DD).",
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
      "description": "The list of product rate plan charges to create under the plan.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "The name of the charge.",
          "section": "Account Settings"
        },
        {
          "name": "charge_model",
          "label": "Charge Model",
          "type": "string",
          "required": true,
          "description": "Charge model that defines how pricing is calculated.",
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
          "name": "charge_type",
          "label": "Charge Type",
          "type": "string",
          "required": true,
          "description": "Charge type (recurring, usage, or one-time).",
          "enum": [
            "one_time",
            "recurring",
            "usage"
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
          "description": "Optional list price base, if supported by the charge model.\n",
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
          "name": "specific_list_price_base",
          "label": "Specific List Price Base",
          "type": "number",
          "required": false,
          "description": "Optional specific value used when `list_price_base` requires an explicit quantity (for example, number of months for `Per_Specific_Months`).\n",
          "section": "Additional Fields"
        },
        {
          "name": "pricing",
          "label": "Pricing",
          "type": "object",
          "required": true,
          "description": "Defines the pricing for the charge. Provide exactly one structure per charge model.",
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
              "description": "Tier definitions with optional min/max caps.",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "tier",
                  "label": "Tier",
                  "type": "string",
                  "required": true,
                  "description": "Tier identifier.",
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
                  "description": "Upper bound (inclusive). Null for open-ended last tier.",
                  "section": "Additional Fields"
                },
                {
                  "name": "price_format",
                  "label": "Price Format",
                  "type": "string",
                  "required": true,
                  "description": "Price format identifier used for the tier.",
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
          "description": "Defines how billing occurs for this charge.",
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
              "name": "day_of_month",
              "label": "Day Of Month",
              "type": "number",
              "required": false,
              "description": "Required \"when type is specific_day_of_month\".",
              "section": "Additional Fields"
            },
            {
              "name": "day_of_week",
              "label": "Day Of Week",
              "type": "string",
              "required": false,
              "description": "Used \"when type is specific_day_of_week\".\n",
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
              "name": "period",
              "label": "Period",
              "type": "string",
              "required": true,
              "description": "Billing period length.\n",
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
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "end_date_condition",
          "label": "End Date Condition",
          "type": "string",
          "required": true,
          "description": "Defines when the charge ends.\n",
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
          "description": "Granularity used with `end_date_condition = fixed_period` to express how long the charge remains active. When `end_date_condition = subscription_end`, this field is ignored.\n",
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
          "description": "Number of periods used with `end_date_condition = fixed_period`. Combined with `up_to_periods_type` to determine the fixed duration of the charge. Ignored when `end_date_condition = subscription_end`.\n",
          "section": "Additional Fields"
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
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "The name of the rate plan.",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
