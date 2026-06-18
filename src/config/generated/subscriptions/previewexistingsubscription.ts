import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const previewexistingsubscriptionEndpoint: ApiEndpoint = {
  "id": "previewexistingsubscription",
  "name": "Preview a subscription by subscription key",
  "description": "",
  "method": "POST",
  "path": "/v1/subscriptions/{subscription-key}/preview",
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
      "description": "Subscription number or ID"
    }
  ],
  "bodyFields": [
    {
      "name": "previewStartDate",
      "label": "Preview Start Date",
      "type": "object",
      "required": false,
      "description": "The start date of the preview.",
      "fields": [
        {
          "name": "previewStartDatePolicy",
          "label": "Preview Start Date Policy",
          "type": "string",
          "required": false,
          "description": "The options on how the preview start date is calculated. - If you set this field to `startOfTerm`, the preview start date is the start date of the subscription term. - If you set this field to `today`, the preview start date is today. - If you set this field to `specificDate`, you must specify a specific date in the `specificDate` field. The date must be in the format `yyyy-mm-dd`.",
          "enum": [
            "startOfTerm",
            "today",
            "specificDate"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "specificDate",
          "label": "Specific Date",
          "type": "string",
          "required": false,
          "description": "The specific date for the preview start date. Required if `previewStartDatePolicy` is `specificDate`.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "previewThroughDate",
      "label": "Preview Through Date",
      "type": "object",
      "required": false,
      "description": "The preview through date.",
      "fields": [
        {
          "name": "previewThruDatePolicy",
          "label": "Preview Thru Date Policy",
          "type": "string",
          "required": false,
          "description": "The options on how the preview through date is calculated. - If you set this field to `nextBillingPeriods`, you must specify the number of billing periods to preview in the `nextBillingPeriods` field. - If you set this field to `endOfTerm`, the preview through date is the end date of the subscription term. - If you set this field to `specificDate`, you must specify a specific date in the `specificDate` field. The date must be in the format `yyyy-mm-dd`.",
          "enum": [
            "nextBillingPeriods",
            "endOfTerm",
            "specificDate"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "nextBillingPeriods",
          "label": "Next Billing Periods",
          "type": "number",
          "required": false,
          "description": "The number of billing periods to preview. Required if `previewThruDatePolicy` is `nextBillingPeriods`.",
          "section": "Invoice & Document Settings"
        },
        {
          "name": "specificDate",
          "label": "Specific Date",
          "type": "string",
          "required": false,
          "description": "The specific date for the preview start date. Required if `previewThruDatePolicy` is `specificDate`.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "quantityForUsageCharges",
      "label": "Quantity For Usage Charges",
      "type": "array",
      "required": false,
      "description": "Container for usage charges.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "chargeId",
          "label": "Charge Id",
          "type": "string",
          "required": false,
          "description": "The ID of the subscription charge.",
          "section": "Additional Fields"
        },
        {
          "name": "quantity",
          "label": "Quantity",
          "type": "number",
          "required": false,
          "description": "The quantity of the subscription charge.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "skipTax",
      "label": "Skip Tax",
      "type": "boolean",
      "required": false,
      "description": "If set to `true`, the system will bypass the tax calculation during subscription preview.",
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
