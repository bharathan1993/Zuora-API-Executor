import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateaccountingperiodEndpoint: ApiEndpoint = {
  "id": "put-updateaccountingperiod",
  "name": "Update an accounting period",
  "description": "",
  "method": "PUT",
  "path": "/v1/accounting-periods/{ap-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "ap-id",
      "label": "Ap Id",
      "type": "string",
      "required": true,
      "description": "ID of the accounting period you want to update."
    }
  ],
  "bodyFields": [
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "description": "The end date of the accounting period in yyyy-mm-dd format, for example, \"2016-02-19\".",
      "section": "Additional Fields"
    },
    {
      "name": "fiscalYear",
      "label": "Fiscal Year",
      "type": "number",
      "required": false,
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
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "description": "The start date of the accounting period in yyyy-mm-dd format, for example, \"2016-02-19\".",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
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
