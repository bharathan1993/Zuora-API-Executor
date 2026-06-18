import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const listprefetchauditrecordsEndpoint: ApiEndpoint = {
  "id": "listprefetchauditrecords",
  "name": "List prefetch audit records",
  "description": "List audit records for prefetch operations by processor ID with filtering and cursor-based pagination.",
  "method": "GET",
  "path": "/meters/{meterId}/prefetchAudit",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "meterId",
      "label": "Meter Id",
      "type": "number",
      "required": true,
      "description": "The ID of the meter."
    }
  ],
  "queryParams": [
    {
      "name": "operatorId",
      "label": "Operator Id",
      "type": "string",
      "required": true,
      "description": "Unique identifier for the processor."
    },
    {
      "name": "startDate",
      "label": "Start Date",
      "type": "string",
      "required": false,
      "description": "Start date for filtering audit records (inclusive) in YYYY-MM-DD format. If not provided, defaults to 7 days before today (UTC).",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    {
      "name": "endDate",
      "label": "End Date",
      "type": "string",
      "required": false,
      "description": "End date for filtering audit records (inclusive) in YYYY-MM-DD format. If not provided, defaults to today (UTC).",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    {
      "name": "triggerType",
      "label": "Trigger Type",
      "type": "string",
      "required": false,
      "description": "Filter by trigger type.",
      "enum": [
        "MANUAL",
        "AUTOMATIC"
      ]
    },
    {
      "name": "status",
      "label": "Status",
      "type": "array",
      "required": false,
      "description": "Filter by job status. Repeat this parameter to specify multiple values.",
      "itemType": "string",
      "itemEnum": [
        "RUNNING",
        "FINISHED",
        "FAILED",
        "CANCELED"
      ]
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "Number of records to return per page.",
      "defaultValue": 20
    },
    {
      "name": "cursor",
      "label": "Cursor",
      "type": "string",
      "required": false,
      "description": "Cursor for pagination (obtained from `nextPage` or `previousPage` in the response)."
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
