import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createproductrateplanchargewithdynamicpricingEndpoint: ApiEndpoint = {
  "id": "createproductrateplanchargewithdynamicpricing",
  "name": "Create a product rate plan charge with Dynamic Pricing",
  "description": "Create a product rate plan charge (PRPC) in the Product Catalog.",
  "method": "POST",
  "path": "/commerce/charges",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "charge",
      "label": "Charge",
      "type": "object",
      "required": true,
      "description": "Product rate plan charge (PRPC) definition including pricing model, billing settings, trigger event,\nand attribute-based rate cards for Dynamic Pricing.\n",
      "fields": [
        {
          "name": "charge_model",
          "label": "Charge Model",
          "type": "string",
          "required": true,
          "description": "Charge model that determines how the charge is calculated.\n",
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
          "description": "Charge category in the catalog.\n",
          "enum": [
            "one_time",
            "recurring",
            "usage"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "Human-readable description of the charge.",
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": true,
          "description": "Name of the charge as displayed in the product catalog.",
          "section": "Account Settings"
        },
        {
          "name": "unit_of_measure",
          "label": "Unit Of Measure",
          "type": "string",
          "required": true,
          "description": "Unit of measure (UOM) used to quantify or price the charge (for example, Each, Seats, Licenses).\n",
          "section": "Additional Fields"
        },
        {
          "name": "default_quantity",
          "label": "Default Quantity",
          "type": "number",
          "required": false,
          "description": "Default quantity applied when the charge is added, if not specified elsewhere.",
          "section": "Additional Fields"
        },
        {
          "name": "end_date_condition",
          "label": "End Date Condition",
          "type": "string",
          "required": false,
          "description": "Condition that determines when the charge becomes inactive. Use `subscription_end` when the charge should remain active\nuntil the subscription ends. Duration-based fields such as `up_to_periods` and `up_to_periods_type` do not apply when this value is used.\n",
          "enum": [
            "end_date_one_time",
            "subscription_end",
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
          "name": "bill_cycle",
          "label": "Bill Cycle",
          "type": "object",
          "required": true,
          "description": "Billing period configuration that controls frequency, alignment, and timing of billing for this charge.\n",
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
              "description": "Length of each billing period.\n",
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
              "description": "How the billing period start aligns.\n",
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
              "description": "Required when `type` is `specific_day_of_month`.",
              "section": "Additional Fields"
            },
            {
              "name": "day_of_week",
              "label": "Day Of Week",
              "type": "string",
              "required": false,
              "description": "Used when `type` is `specific_day_of_week`.\n",
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
            }
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "list_price_base",
          "label": "List Price Base",
          "type": "string",
          "required": false,
          "description": "List price basis for this charge. This is used when interpreting list prices and, for some models, in conjunction with `specific_list_price_base`.\n",
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
          "name": "trigger_event",
          "label": "Trigger Event",
          "type": "string",
          "required": true,
          "description": "Event that makes the charge active on a subscription.\n",
          "enum": [
            "contract_effective",
            "service_activation",
            "customer_acceptance",
            "specific_date"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "product_rate_plan_id",
          "label": "Product Rate Plan Id",
          "type": "string",
          "required": true,
          "description": "Identifier of the product rate plan that owns this charge.",
          "section": "Additional Fields"
        },
        {
          "name": "specificListPriceBase",
          "label": "Specific List Price Base",
          "type": "number",
          "required": false,
          "description": "The number of months for the list price base of the charge. This field is required\nif you set the value of the `ListPriceBase` field to `Per Specific Months`.\nThe value must be a positive integer between **1** and **120** inclusive.\n\n\n**Notes**: \n  - This field is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n  - To use this field, you must set the `X-Zuora-WSDL-Version` request header to `129` or later. Otherwise, an error occurs.\n  - The value of this field is `null` if you do not set the value of the `ListPriceBase` field to `Per Specific Months`.\n",
          "section": "Additional Fields"
        },
        {
          "name": "formula",
          "label": "Formula",
          "type": "string",
          "required": false,
          "description": "Optional formula applied after rate-card lookup to adjust the computed price.",
          "section": "Additional Fields"
        },
        {
          "name": "tax_mode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "Tax mode for this charge.\n",
          "enum": [
            "non_taxable",
            "tax_exclusive",
            "tax_inclusive"
          ],
          "section": "Tax Settings"
        },
        {
          "name": "tax_code",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "description": "Tax code used for tax calculation on this charge.",
          "section": "Tax Settings"
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
        },
        {
          "name": "revenue",
          "label": "Revenue",
          "type": "object",
          "required": false,
          "description": "Revenue recognition configuration, for example, `revenue_recognition_rule_name`, triggers, allocation flags.\n",
          "section": "Additional Fields"
        },
        {
          "name": "custom_fields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Tenant custom fields on the charge.",
          "section": "Additional Fields"
        },
        {
          "name": "attributes",
          "label": "Attributes",
          "type": "array",
          "required": false,
          "description": "Declares the attribute metadata used by Dynamic Pricing for this charge.\nEach entry defines an attribute that pricing rules can reference, along with\nits data type and (optionally) a mapping to a Zuora object field used to resolve values at runtime.\nExamples: Region, Age, EffectiveDate.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": true,
              "description": "Attribute name, for example, Age, Region, EffectiveDate.",
              "section": "Account Settings"
            },
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": false,
              "description": "Attribute data type.",
              "enum": [
                "String",
                "Integer",
                "Double",
                "Boolean",
                "Date",
                "Datetime"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "mapping",
              "label": "Mapping",
              "type": "object",
              "required": false,
              "description": "Optional mapping to a Zuora business object field used to automatically resolve\nthe attribute value at runtime.\n",
              "fields": [
                {
                  "name": "object",
                  "label": "Object",
                  "type": "string",
                  "required": true,
                  "description": "Target Zuora object, for example, account, subscription.",
                  "section": "Additional Fields"
                },
                {
                  "name": "field",
                  "label": "Field",
                  "type": "string",
                  "required": true,
                  "description": "Field on the target object, for example, age__c.",
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "pricing",
          "label": "Pricing",
          "type": "object",
          "required": false,
          "description": "Default (charge-level) pricing for the PRPC, used when no rate-card row matches.\nThe structure depends on the charge_model:\n  - flat_fee → flat_amounts\n  - per_unit → unit_amounts\n  - volume/tiered → tiers\n  - discount_fixed_amount → discount_amounts\n  - discount_percentage → discount_percentage\n",
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
                  "description": "For example, price_format_per_unit.",
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
          "name": "rate_cards",
          "label": "Rate Cards",
          "type": "array",
          "required": false,
          "description": "Defines the conditional pricing table (**rate cards**) for the PRPC.\nEach rate-card entry specifies:\n  - `attributes`: The match conditions evaluated at runtime.\n  - `pricing`: The price or rate to apply when the conditions match.\n\nIf multiple rows match, Zuora applies the first matching rate card.\nIf no row matches, the default `pricing` (defined above) is used.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "attributes",
              "label": "Attributes",
              "type": "array",
              "required": true,
              "description": "Defines the set of match conditions that must all evaluate to true\nfor this rate-card row to apply. Each condition corresponds to a declared\npricing attribute. Use `between` for range or date-based conditions.\n",
              "itemType": "object",
              "itemFields": [
                {
                  "name": "name",
                  "label": "Name",
                  "type": "string",
                  "required": true,
                  "description": "Attribute name for the condition (for example, Age, Region, EffectiveDate).",
                  "section": "Account Settings"
                },
                {
                  "name": "operator",
                  "label": "Operator",
                  "type": "string",
                  "required": false,
                  "description": "Comparison operator for the condition.",
                  "enum": [
                    ">",
                    ">=",
                    "<",
                    "<=",
                    "==",
                    "between",
                    "between-inclusive"
                  ],
                  "section": "Additional Fields"
                },
                {
                  "name": "value",
                  "label": "Value",
                  "type": "object",
                  "required": false,
                  "description": "Comparison value. For `between`, provide an array of two values.\nThe value type must align with the attribute’s declared type.\n",
                  "fields": [],
                  "section": "Additional Fields"
                }
              ],
              "section": "Additional Fields"
            },
            {
              "name": "pricing",
              "label": "Pricing",
              "type": "object",
              "required": true,
              "description": "Pricing configuration returned when this rate-card row matches.\nThe structure depends on the charge_model:\n  - flat_fee → flat_amounts\n  - per_unit → unit_amounts\n  - volume/tiered → tiers\n  - discount_fixed_amount → discount_amounts\n  - discount_percentage → discount_percentage\n",
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
                      "description": "For example, price_format_per_unit.",
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
                }
              ],
              "section": "Additional Fields"
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
