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
      "description": "Path parameter: ap-id",
      "placeholder": "Enter ap id"
    }
  ],
  "bodyFields": [
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "description": "The end date of the accounting period in yyyy-mm-dd format, for example, \"2016-02-19\".\n",
      "section": "Additional Fields"
    },
    {
      "name": "fiscalYear",
      "label": "Fiscal Year",
      "type": "number",
      "required": false,
      "description": "Fiscal year of the accounting period in yyyy format, for example, \"2016\".\n",
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
      "description": "Notes about the accounting period.\n\nMaximum of 255 characters.\n",
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "description": "The start date of the accounting period in yyyy-mm-dd format, for example, \"2016-02-19\".\n",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "Name of the accounting period.\n\nAccounting period name must be unique. Maximum of 100 characters.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
