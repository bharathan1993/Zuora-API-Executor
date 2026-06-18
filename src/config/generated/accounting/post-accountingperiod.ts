import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_accountingperiodEndpoint: ApiEndpoint = {
  "id": "post-accountingperiod",
  "name": "Create an accounting period",
  "description": "Creates an accounting period.",
  "method": "POST",
  "path": "/v1/accounting-periods",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": true,
      "description": "The end date of the accounting period in yyyy-mm-dd format, for example, \"2016-02-19\".",
      "section": "Additional Fields"
    },
    {
      "name": "fiscalYear",
      "label": "Fiscal Year",
      "type": "number",
      "required": true,
      "description": "Fiscal year of the accounting period in yyyy format, for example, \"2016\".",
      "section": "Additional Fields"
    },
    {
      "name": "fiscalQuarter",
      "label": "Fiscal Quarter",
      "type": "number",
      "required": false,
      "description": "Fiscal quarter of the accounting period. One number between 1 and 4.",
      "section": "Additional Fields"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "string",
      "required": false,
      "description": "Notes about the accounting period. Maximum of 255 characters.",
      "section": "Additional Fields"
    },
    {
      "name": "organizationLabels",
      "label": "Organization Labels",
      "type": "array",
      "required": false,
      "description": "The organization that the accounting period belongs to. For each item in the array, either the `organizationId` or the `organizationName` field is required. This field is only required when you have already turned on Multi-Org feature.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "organizationId",
          "label": "Organization Id",
          "type": "string",
          "required": false,
          "description": "The organization ID.",
          "section": "Additional Fields"
        },
        {
          "name": "organizationName",
          "label": "Organization Name",
          "type": "string",
          "required": false,
          "description": "The organization name.",
          "section": "Account Settings"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": true,
      "description": "The start date of the accounting period in yyyy-mm-dd format, for example, \"2016-02-19\".",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": true,
      "description": "Name of the accounting period. Accounting period name must be unique. Maximum of 100 characters.",
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
