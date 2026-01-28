import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_rolloverEndpoint: ApiEndpoint = {
  "id": "post-rollover",
  "name": "Trigger fund rollover",
  "description": "Prepaid with Drawdown Rollover enables you to transfer the accumulative carryover of your customers’ prepaid balance funds to the following validity period when using Prepaid with Drawdown. This REST API reference describes how to manually trigger fund rollover from source validity period to destination validity period. There are no path or query parameters.",
  "method": "POST",
  "path": "/v1/ppdd/rollover",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "destinationValidityPeriod",
      "label": "Destination Validity Period",
      "type": "object",
      "required": true,
      "description": "Date range of the destination validity period to which the funds are transferred. It should be close to the source validity period.",
      "fields": [
        {
          "name": "endDate",
          "label": "End Date",
          "type": "date",
          "required": true,
          "description": "End date of the destination validity period.",
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": true,
          "description": "Start date of the destination validity period.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "string",
      "required": true,
      "description": "Specifies the priority of rolled over fund in case of drawdown.\n\n**Values**: ApplyLast / ApplyFirst\n",
      "section": "Additional Fields"
    },
    {
      "name": "sourceValidityPeriod",
      "label": "Source Validity Period",
      "type": "object",
      "required": true,
      "description": "Date range of the source validity period from which the funds are transferred. It should be close to the destination validity period.",
      "fields": [
        {
          "name": "endDate",
          "label": "End Date",
          "type": "date",
          "required": true,
          "description": "End date of the source validity period.",
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": true,
          "description": "Start date of the source validity period.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "prepaymentUom",
      "label": "Prepayment Uom",
      "type": "string",
      "required": true,
      "description": "Specifies the units of measure for prepayment charge. Units of measure are configured in the web-based UI. Your values depend on your configuration in **Billing Settings**.\n\n**Values**: a valid unit of measure\n",
      "section": "Payment Settings"
    },
    {
      "name": "subscriptionNumber",
      "label": "Subscription Number",
      "type": "string",
      "required": true,
      "description": "The unique identifier number of the subscription.",
      "maxLength": 100,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
