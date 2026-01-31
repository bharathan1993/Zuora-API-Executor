import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const updateproductrateplanchargewithdynamicpricingEndpoint: ApiEndpoint = {
  "id": "updateproductrateplanchargewithdynamicpricing",
  "name": "Update a product rate plan charge with Dynamic Pricing",
  "description": "Update an existing product rate plan charge (PRPC). Use this API to update default pricing and/or conditional rate cards.",
  "method": "PUT",
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
      "description": "Fields to update on the product rate plan charge (PRPC). Only the properties\nprovided will be considered for update (patch semantics). Unsupported updates\nare ignored by the service.\n",
      "fields": [
        {
          "name": "id",
          "label": "Id",
          "type": "string",
          "required": true,
          "description": "Unique identifier of the product rate plan charge (PRPC) to update.",
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "description": "Optional new display name for the charge.",
          "section": "Account Settings"
        },
        {
          "name": "description",
          "label": "Description",
          "type": "string",
          "required": false,
          "description": "Optional new description for the charge.",
          "section": "Additional Fields"
        },
        {
          "name": "trigger_event",
          "label": "Trigger Event",
          "type": "string",
          "required": false,
          "description": "Event that triggers the charge (if update is supported).",
          "enum": [
            "contract_effective",
            "service_activation",
            "customer_acceptance"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "unit_of_measure",
          "label": "Unit Of Measure",
          "type": "string",
          "required": false,
          "description": "Unit of measure label for the charge, for example, Each, Seat. May be read-only in some tenants.",
          "section": "Additional Fields"
        },
        {
          "name": "default_quantity",
          "label": "Default Quantity",
          "type": "number",
          "required": false,
          "description": "Default quantity when the charge is added to a product/offer.",
          "section": "Additional Fields"
        },
        {
          "name": "min_quantity",
          "label": "Min Quantity",
          "type": "number",
          "required": false,
          "description": "Optional minimum quantity constraint (if supported).",
          "section": "Additional Fields"
        },
        {
          "name": "max_quantity",
          "label": "Max Quantity",
          "type": "number",
          "required": false,
          "description": "Optional maximum quantity constraint (if supported)",
          "section": "Additional Fields"
        },
        {
          "name": "list_price_base",
          "label": "List Price Base",
          "type": "string",
          "required": false,
          "description": "List price basis (e.g., Per_Billing_Period). Typically read-only after creation.",
          "section": "Additional Fields"
        },
        {
          "name": "bill_cycle",
          "label": "Bill Cycle",
          "type": "object",
          "required": false,
          "description": "Billing period configuration controlling frequency, alignment, and timing.",
          "fields": [
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": false,
              "description": "Source of the default billing period, for example, default_from_customer, specific_day_of_month.",
              "section": "Additional Fields"
            },
            {
              "name": "day_of_month",
              "label": "Day Of Month",
              "type": "number",
              "required": false,
              "description": "Day of month to bill when type = `specific_day_of_month`.",
              "section": "Additional Fields"
            },
            {
              "name": "day_of_week",
              "label": "Day Of Week",
              "type": "string",
              "required": false,
              "description": "Day of week to bill when using weekly modes.",
              "section": "Additional Fields"
            },
            {
              "name": "period",
              "label": "Period",
              "type": "string",
              "required": false,
              "description": "Billing period, for example, bill_cycle_period_month, bill_cycle_period_quarter.",
              "section": "Additional Fields"
            },
            {
              "name": "specific_period",
              "label": "Specific Period",
              "type": "string",
              "required": false,
              "description": "Custom period text when applicable.",
              "section": "Additional Fields"
            },
            {
              "name": "period_alignment",
              "label": "Period Alignment",
              "type": "string",
              "required": false,
              "description": "Alignment behavior, for example, align_to_charge, align_to_term_start.",
              "section": "Additional Fields"
            },
            {
              "name": "timing",
              "label": "Timing",
              "type": "string",
              "required": false,
              "description": "Indicates whether billing occurs in advance or in arrears.",
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
          "name": "pricing",
          "label": "Pricing",
          "type": "object",
          "required": false,
          "description": "Default (charge-level) pricing used when no rate-card row matches.\nStructure depends on the charge model:\n  - flat_fee → flat_amounts\n  - per_unit → unit_amounts\n  - volume/tiered → tiers\n  - discount_fixed_amount → discount_amounts\n  - discount_percentage → discount_percentage\n",
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
                  "description": "Tier identifier, for example, \"1\", \"2\".",
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
                  "description": "For example, price_format_per_unit or price_format_flat_fee.",
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
              "description": "Discount percentage, for example, 15 for 15%.",
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
          "description": "Conditional pricing rows (rate cards). Each row defines match attributes and a price to apply.\nIf multiple rows match, the first match wins. If none match, `pricing` is used.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "attributes",
              "label": "Attributes",
              "type": "array",
              "required": true,
              "description": "Match conditions that must all evaluate to true for the row to apply.\nUse `between` for ranges or dates.\n",
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
                  "name": "operator",
                  "label": "Operator",
                  "type": "string",
                  "required": false,
                  "description": "Comparison operator.",
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
              "description": "Price to apply when this row matches. Structure mirrors `pricing` above.\n",
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
                      "description": "Tier identifier, for example, \"1\", \"2\".",
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
                      "description": "Upper bound (inclusive).",
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
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "tax_code",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "description": "Optional tax code to associate with the charge.",
          "section": "Tax Settings"
        },
        {
          "name": "tax_mode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "Tax mode, for example, tax_exclusive, non_taxable, if supported.",
          "section": "Tax Settings"
        },
        {
          "name": "price_change_option",
          "label": "Price Change Option",
          "type": "string",
          "required": false,
          "description": "How price changes apply on updates, for example, no_change.",
          "section": "Additional Fields"
        },
        {
          "name": "use_tenant_default_for_price_change",
          "label": "Use Tenant Default For Price Change",
          "type": "boolean",
          "required": false,
          "description": "If true, tenant defaults govern price change behavior.",
          "section": "Additional Fields"
        },
        {
          "name": "delivery_schedule",
          "label": "Delivery Schedule",
          "type": "object",
          "required": false,
          "description": "Day-of-week delivery configuration (if enabled).",
          "section": "Additional Fields"
        },
        {
          "name": "prepayment",
          "label": "Prepayment",
          "type": "object",
          "required": false,
          "description": "Prepayment settings (credit option, rollover, validity).",
          "section": "Payment Settings"
        },
        {
          "name": "prepaid",
          "label": "Prepaid",
          "type": "boolean",
          "required": false,
          "description": "Indicates whether the charge is prepaid.",
          "section": "Additional Fields"
        },
        {
          "name": "overage_options",
          "label": "Overage Options",
          "type": "object",
          "required": false,
          "description": "Overage configuration for usage charges.",
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
        },
        {
          "name": "revenue",
          "label": "Revenue",
          "type": "object",
          "required": false,
          "description": "Revenue recognition settings (rule names, timing).",
          "section": "Additional Fields"
        },
        {
          "name": "netsuite",
          "label": "Netsuite",
          "type": "object",
          "required": false,
          "description": "NetSuite integration attributes for the charge.",
          "section": "Additional Fields"
        },
        {
          "name": "custom_fields",
          "label": "Custom Fields",
          "type": "object",
          "required": false,
          "description": "Tenant-specific custom field values on the charge.",
          "section": "Additional Fields"
        },
        {
          "name": "labels",
          "label": "Labels",
          "type": "object",
          "required": false,
          "description": "Free-form labels/tags attached to the charge.",
          "section": "Additional Fields"
        },
        {
          "name": "organization_labels",
          "label": "Organization Labels",
          "type": "array",
          "required": false,
          "description": "Organization-level labels associated with the charge.",
          "itemType": "object",
          "section": "Additional Fields"
        },
        {
          "name": "ocm_json_by_currency",
          "label": "Ocm Json By Currency",
          "type": "object",
          "required": false,
          "description": "Offer/OCM metadata keyed by currency (internal use).",
          "section": "Additional Fields"
        },
        {
          "name": "attributes",
          "label": "Attributes",
          "type": "array",
          "required": false,
          "description": "Attribute declarations for Dynamic Pricing (name/type/mapping).",
          "itemType": "object",
          "itemFields": [
            {
              "name": "name",
              "label": "Name",
              "type": "string",
              "required": true,
              "description": "Attribute name, for example, Region, Age, EffectiveDate.",
              "section": "Account Settings"
            },
            {
              "name": "type",
              "label": "Type",
              "type": "string",
              "required": false,
              "description": "Attribute data type.",
              "enum": [
                "string",
                "integer",
                "double",
                "boolean",
                "date",
                "datetime"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "mapping",
              "label": "Mapping",
              "type": "object",
              "required": false,
              "description": "Optional mapping to resolve values from Zuora objects.",
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
        }
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
