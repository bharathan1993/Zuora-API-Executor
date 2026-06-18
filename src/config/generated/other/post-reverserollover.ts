import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_reverserolloverEndpoint: ApiEndpoint = {
  "id": "post-reverserollover",
  "name": "Reverse fund rollover",
  "description": "This REST API reference describes how to manually reverse fund rollover from source validity period to destination validity period. There are no path or query parameters.",
  "method": "POST",
  "path": "/v1/ppdd/reverse-rollover",
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
      "description": "Specifies the units of measure for prepayment charge. Units of measure are configured in the web-based UI. Your values depend on your configuration in **Billing Settings**. **Values**: a valid unit of measure",
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
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
