import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateproductchargedefinitionbulkEndpoint: ApiEndpoint = {
  "id": "put-updateproductchargedefinitionbulk",
  "name": "Update product charge definitions",
  "description": "Bulk updates multiple product charge definitions.",
  "method": "PUT",
  "path": "/v1/product-charge-definitions/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "productChargeDefinitions",
      "label": "Product Charge Definitions",
      "type": "array",
      "required": false,
      "description": "The list of updated product charge definitions.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "billingPeriod",
          "label": "Billing Period",
          "type": "string",
          "required": false,
          "description": "The override value of the billingPeriod for the product charge definition.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "billingTiming",
          "label": "Billing Timing",
          "type": "string",
          "required": false,
          "description": "The override value of the billingTiming for the product charge definition.",
          "enum": [
            "IN_ADVANCE",
            "IN_ARREARS"
          ],
          "section": "Invoice & Document Settings"
        },
        {
          "name": "chargeModel",
          "label": "Charge Model",
          "type": "string",
          "required": false,
          "description": "Determines how to calculate charges. Charge models must be individually activated in Zuora Billing administration.",
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
          "description": "The default quantity. This field is applicable only for one-time and recurring charges.",
          "section": "Additional Fields"
        },
        {
          "name": "listPriceBase",
          "label": "List Price Base",
          "type": "string",
          "required": false,
          "description": "The list price base. This field is applicable only for recurring charges. **Note**: The `Per_Year` enum value is available only if you have the Annual List Price feature enabled.",
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
          "description": "Container for the new prices to override the existing prices of the product charge definition.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "currency",
              "label": "Currency",
              "type": "string",
              "required": false,
              "description": "The currency for the price.",
              "section": "Additional Fields"
            },
            {
              "name": "discountAmount",
              "label": "Discount Amount",
              "type": "number",
              "required": false,
              "description": "The specific amount for a fixed discount. The field is applicable only for charges based on the Discount-Fixed Amount charge model.",
              "section": "Additional Fields"
            },
            {
              "name": "discountPercentage",
              "label": "Discount Percentage",
              "type": "number",
              "required": false,
              "description": "The percentage of discount for a percentage discount. The field is applicable only for charges based on the Discount-Percentage charge model.",
              "section": "Additional Fields"
            },
            {
              "name": "price",
              "label": "Price",
              "type": "number",
              "required": false,
              "description": "The price of this item. This field is only applicable for charges based on the following charge models: - Flat Fee - Per Unit - Delivery Pricing",
              "section": "Additional Fields"
            },
            {
              "name": "tiers",
              "label": "Tiers",
              "type": "array",
              "required": false,
              "description": "Container for the tiers of the price item. This field is only applicable for charges based on the following charge models: - Tiered Pricing - Volume Pricing You must specify all relevant fields of all tiers, including pricing information for each currency. For each currency, ensure that the tiers appear in ascending order of `StartingUnit`. For example: ``` [ { \"startingUnit\": \"1\", \"endingUnit\": \"150\", \"currency\": \"USD\", \"price\": 1.95, \"priceFormat\": \"Per Unit\" }, { \"startingUnit\": \"151\", \"endingUnit\": \"300\", \"currency\": \"USD\", \"price\": 1.45, \"priceFormat\": \"Per Unit\" }, { \"startingUnit\": \"1\", \"endingUnit\": \"150\", \"currency\": \"EUR\", \"price\": 1.75, \"priceFormat\": \"Per Unit\" }, { \"startingUnit\": \"151\", \"endingUnit\": \"300\", \"currency\": \"EUR\", \"price\": 1.30, \"priceFormat\": \"Per Unit\" } ] ```",
              "itemType": "array",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "productChargeDefinitionKey",
          "label": "Product Charge Definition Key",
          "type": "string",
          "required": false,
          "description": "The unique number or ID of the product charge definition to be updated.",
          "section": "Additional Fields"
        },
        {
          "name": "specificBillingPeriod",
          "label": "Specific Billing Period",
          "type": "number",
          "required": false,
          "description": "The override value of the specificBillingPeriod for the product charge definition.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "specificListPriceBase",
          "label": "Specific List Price Base",
          "type": "number",
          "required": false,
          "description": "The number of months for the list price base of the charge definition. The field is `null` if the `listPriceBase` field is not set to `Per_Specific_Months`.",
          "section": "Additional Fields"
        },
        {
          "name": "taxCode",
          "label": "Tax Code",
          "type": "string",
          "required": false,
          "description": "Specifies the tax code for taxation rules. This field is equired when the `Taxable` field is set to `True`. **Note**: This value affects the tax calculation of the charge.",
          "maxLength": 64,
          "section": "Tax Settings"
        },
        {
          "name": "taxMode",
          "label": "Tax Mode",
          "type": "string",
          "required": false,
          "description": "Determines how to define taxation for the charge. This field is equired when the `taxable` field is set to `true`. **Note**: This value affects the tax calculation of the charge.",
          "enum": [
            "TaxExclusive",
            "TaxInclusive",
            "null"
          ],
          "section": "Tax Settings"
        },
        {
          "name": "taxable",
          "label": "Taxable",
          "type": "boolean",
          "required": false,
          "description": "Determines whether the charge definition is taxable. When this field is set to `true`, the `taxMode` and `taxCode` fields are required. **Character limit**: 5 **Values**: `true`, `false` **Note**: This value affects the tax calculation of the charge.",
          "section": "Tax Settings"
        },
        {
          "name": "term",
          "label": "Term",
          "type": "number",
          "required": false,
          "description": "The number of periods of a termed subscription that is eligible for this charge definition. This field is applicable when the `termType` field is set to `TERMED`, and is to be used together with the `termPeriodType` field.",
          "section": "Additional Fields"
        },
        {
          "name": "termPeriodType",
          "label": "Term Period Type",
          "type": "string",
          "required": false,
          "description": "Specifies the period type for the subscription term that is eligible for this charge definition.",
          "enum": [
            "Month",
            "Year",
            "Day",
            "Week",
            "null"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "termType",
          "label": "Term Type",
          "type": "string",
          "required": false,
          "description": "The type of the subscription that is eligible for this charge definition.",
          "enum": [
            "TERMED",
            "EVERGREEN",
            "null"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "uom",
          "label": "Uom",
          "type": "string",
          "required": false,
          "description": "Describes the unit of measure (UOM) configured in **Settings > Billing**. **Values**: `Each`, `License`, `Seat`, or `null`",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
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
