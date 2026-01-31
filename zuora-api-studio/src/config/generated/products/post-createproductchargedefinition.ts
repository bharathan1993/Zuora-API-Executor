import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createproductchargedefinitionEndpoint: ApiEndpoint = {
  "id": "post-createproductchargedefinition",
  "name": "Create a product charge definition",
  "description": "Creates a product charge definition for a charge. You can create as many product charge definitions as needed for one charge.",
  "method": "POST",
  "path": "/v1/product-charge-definitions",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "billingPeriod",
      "label": "Billing Period",
      "type": "string",
      "required": false,
      "description": "The billing period for the product charge definition.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "billingTiming",
      "label": "Billing Timing",
      "type": "string",
      "required": false,
      "description": "The billing timing setting for the product charge definition.\n",
      "enum": [
        "IN_ADVANCE",
        "IN_ARREARS"
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "specificBillingPeriod",
      "label": "Specific Billing Period",
      "type": "number",
      "required": false,
      "description": "The specific number of billing periods for the product charge definition.\n",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "chargeModel",
      "label": "Charge Model",
      "type": "string",
      "required": false,
      "description": "Determines how to calculate charges. Charge models must be individually activated in Zuora Billing administration.\n",
      "enum": [
        "DiscountFixedAmount",
        "DiscountPercentage",
        "FlatFee",
        "PerUnit",
        "Tiered",
        "Volume",
        "Delivery"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "defaultQuantity",
      "label": "Default Quantity",
      "type": "number",
      "required": false,
      "description": "The default quantity. \n\nThis field is applicable only for one-time and recurring charges.\n",
      "section": "Additional Fields"
    },
    {
      "name": "effectiveEndDate",
      "label": "Effective End Date",
      "type": "date",
      "required": false,
      "description": "The effective end date of the product charge definition.\n",
      "section": "Additional Fields"
    },
    {
      "name": "effectiveStartDate",
      "label": "Effective Start Date",
      "type": "date",
      "required": false,
      "description": "The effective start date of the product charge definition.\n",
      "section": "Additional Fields"
    },
    {
      "name": "listPriceBase",
      "label": "List Price Base",
      "type": "string",
      "required": false,
      "description": "The list price base. \n\nThis field is applicable only for recurring charges.\n\n**Note**: The `Per_Year` enum value is available only if you have the <a href=\"https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price\" target=\"_blank\">Annual List Price</a> feature enabled.\n",
      "enum": [
        "Per_Billing_Period",
        "Per_Month",
        "Per_Week",
        "Per_Year"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "prices",
      "label": "Prices",
      "type": "array",
      "required": false,
      "description": "Container for the prices of the product charge definition.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "currency",
          "label": "Currency",
          "type": "string",
          "required": false,
          "description": "The currency for the price.\n",
          "section": "Additional Fields"
        },
        {
          "name": "discountAmount",
          "label": "Discount Amount",
          "type": "number",
          "required": false,
          "description": "The specific amount for a fixed discount. The field is applicable only for charges based on the Discount-Fixed Amount charge model.\n",
          "section": "Additional Fields"
        },
        {
          "name": "discountPercentage",
          "label": "Discount Percentage",
          "type": "number",
          "required": false,
          "description": "The percentage of discount for a percentage discount. The field is applicable only for charges based on the Discount-Percentage charge model.\n",
          "section": "Additional Fields"
        },
        {
          "name": "price",
          "label": "Price",
          "type": "number",
          "required": false,
          "description": "The price of this item. \n\nThis field is only applicable for charges based on the following charge models:\n  - Flat Fee\n  - Per Unit\n  - Delivery Pricing\n",
          "section": "Additional Fields"
        },
        {
          "name": "tiers",
          "label": "Tiers",
          "type": "array",
          "required": false,
          "description": "Container for the tiers of the price item. \n\nThis field is only applicable for charges based on the following charge models:\n  - Tiered Pricing\n  - Volume Pricing\n\nYou must specify all relevant fields of all tiers, including pricing information for each currency.\nFor each currency, ensure that the tiers appear in ascending order of `StartingUnit`.\n\nFor example:\n\n```\n[\n  {\n    \"startingUnit\": \"1\",\n    \"endingUnit\": \"150\",\n    \"currency\": \"USD\",\n    \"price\": 1.95,\n    \"priceFormat\": \"Per Unit\"\n  },\n  {\n    \"startingUnit\": \"151\",\n    \"endingUnit\": \"300\",\n    \"currency\": \"USD\",\n    \"price\": 1.45,\n    \"priceFormat\": \"Per Unit\"\n  },\n  {\n    \"startingUnit\": \"1\",\n    \"endingUnit\": \"150\",\n    \"currency\": \"EUR\",\n    \"price\": 1.75,\n    \"priceFormat\": \"Per Unit\"\n  },\n  {\n    \"startingUnit\": \"151\",\n    \"endingUnit\": \"300\",\n    \"currency\": \"EUR\",\n    \"price\": 1.30,\n    \"priceFormat\": \"Per Unit\"\n  }\n]\n```    \n",
          "itemType": "array",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "productRatePlanChargeId",
      "label": "Product Rate Plan Charge Id",
      "type": "string",
      "required": false,
      "description": "The unique ID of the charge of the charge definition.\n",
      "section": "Additional Fields"
    },
    {
      "name": "productRatePlanId",
      "label": "Product Rate Plan Id",
      "type": "string",
      "required": false,
      "description": "The unique ID of the product rate plan that uses this charge definition.\n",
      "section": "Additional Fields"
    },
    {
      "name": "specificListPriceBase",
      "label": "Specific List Price Base",
      "type": "number",
      "required": false,
      "description": "The number of months for the list price base of the charge definition. \nThis field is `null` if the `listPriceBase` field is not set to `Per_Specific_Months`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "term",
      "label": "Term",
      "type": "number",
      "required": false,
      "description": "The number of periods of a termed subscription that is eligible for this charge definition. This field is applicable when the `termType` field is set to `TERMED`, \nand is to be used together with the `termPeriodType` field.\n",
      "section": "Additional Fields"
    },
    {
      "name": "termPeriodType",
      "label": "Term Period Type",
      "type": "string",
      "required": false,
      "description": "Specifies the period type for the subscription term that is eligible for this charge definition.\n",
      "enum": [
        "Month",
        "Year",
        "Day",
        "Week",
        null
      ],
      "section": "Additional Fields"
    },
    {
      "name": "termType",
      "label": "Term Type",
      "type": "string",
      "required": false,
      "description": "The type of the subscription that is eligible for this charge definition.\n",
      "enum": [
        "TERMED",
        "EVERGREEN",
        null
      ],
      "section": "Additional Fields"
    },
    {
      "name": "uom",
      "label": "Uom",
      "type": "string",
      "required": false,
      "description": "Describes the unit of measure (UOM) configured in **Settings > Billing** for the charge.\n",
      "section": "Additional Fields"
    },
    {
      "name": "productRatePlanChargeNumber",
      "label": "Product Rate Plan Charge Number",
      "type": "string",
      "required": false,
      "description": "The unique number (natural key) of the charge of the charge definition.\n",
      "section": "Account Settings"
    },
    {
      "name": "productRatePlanNumber",
      "label": "Product Rate Plan Number",
      "type": "string",
      "required": false,
      "description": "The unique number (natural key) of the product rate plan that uses this charge definition.\n",
      "section": "Account Settings"
    },
    {
      "name": "taxCode",
      "label": "Tax Code",
      "type": "string",
      "required": false,
      "description": "Specifies the tax code for taxation rules. This field is required when the `Taxable` field is set to `True`.\n\n**Note**: This value affects the tax calculation of the charge.\n",
      "maxLength": 64,
      "section": "Tax Settings"
    },
    {
      "name": "taxMode",
      "label": "Tax Mode",
      "type": "string",
      "required": false,
      "description": "Determines how to define taxation for the charge. This field is required when the `Taxable` field is set to `True`.\n\n**Note**: This value affects the tax calculation of the charge.\n",
      "enum": [
        "TaxExclusive",
        "TaxInclusive",
        null
      ],
      "section": "Tax Settings"
    },
    {
      "name": "taxable",
      "label": "Taxable",
      "type": "boolean",
      "required": false,
      "description": "Determines whether the charge definition is taxable. When this field is set to `True`, the `TaxMode` and `TaxCode` fields are required.\n\n**Character limit**: 5\n\n**Values**: `True`, `False`\n\n**Note**: This value affects the tax calculation of the charge.\n",
      "section": "Tax Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
