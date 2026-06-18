import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createsummarystatementrunEndpoint: ApiEndpoint = {
  "id": "createsummarystatementrun",
  "name": "Create a summary statement run",
  "description": "Allows you to initiate the generation of a summary statement run.",
  "method": "POST",
  "path": "/v1/summary-statement-runs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "runType",
      "label": "Run Type",
      "type": "string",
      "required": true,
      "description": "The scheduled type of the run which can either be AdHoc or Scheduled. Currently, only `AdHoc` is supported.",
      "enum": [
        "AdHoc"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "dateRangeType",
      "label": "Date Range Type",
      "type": "string",
      "required": true,
      "description": "The date range for the statement. If `PreviousThreeCalendarMonth` or `PreviousOneCalendarMonth` is selected, the start and end dates are automatically calculated. For example, if `PreviousThreeCalendarMonth` is chosen today (2024-08-20), the dates would be 2024-05-01 to 2024-07-31.",
      "enum": [
        "Custom",
        "PreviousThreeCalendarMonth",
        "PreviousOneCalendarMonth"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "date",
      "required": false,
      "description": "Required when `Custom` is selected for the date range. The start date can be set to a maximum of 5 years in the past and must follow the format YYYY-MM-DD.",
      "section": "Additional Fields"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "date",
      "required": false,
      "description": "When creating a statement run, this field cannot be manually entered. If `Custom` is selected, the end date automatically defaults to today’s date in the tenant’s timezone.",
      "section": "Additional Fields"
    },
    {
      "name": "targetAccountCategory",
      "label": "Target Account Category",
      "type": "string",
      "required": true,
      "description": "Specifies the type of account filter. If the filter type is set to `AllAccounts`, `AccountsWithOpenInvoices`, `AccountsWithOpenBalances`, `AccountsWithoutInvoices`, or `AccountsWithoutInvoicesAndOpenBalances`, you can further refine the filter using `batchName` and `billCycleDay`. However, these criteria are not applicable when the filter type is `SingleAccount`.",
      "enum": [
        "SingleAccount",
        "AllAccounts",
        "AccountsWithOpenInvoices",
        "AccountsWithOpenBalances",
        "AccountsWithoutInvoices",
        "AccountsWithoutInvoicesAndOpenBalances"
      ],
      "section": "Account Settings"
    },
    {
      "name": "accountKey",
      "label": "Account Key",
      "type": "string",
      "required": false,
      "description": "The related account ID or account number when the filter type is `SingleAccount`.",
      "section": "Account Settings"
    },
    {
      "name": "batchName",
      "label": "Batch Name",
      "type": "string",
      "required": false,
      "description": "The batch name used for filtering accounts, for example, Batch1.",
      "section": "Account Settings"
    },
    {
      "name": "billCycleDay",
      "label": "Bill Cycle Day",
      "type": "string",
      "required": false,
      "description": "The bill cycle day for filtering accounts, with values ranging from '01' to '31'.",
      "section": "Invoice & Document Settings"
    },
    {
      "name": "autoEmailEnabled",
      "label": "Auto Email Enabled",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to send an email after a statement is generated. Acceptable values are `true` or `false`. If unspecified, the default value is `false`.",
      "section": "Communication Settings"
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
