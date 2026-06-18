import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaudittrailentriesformeterEndpoint: ApiEndpoint = {
  "id": "getaudittrailentriesformeter",
  "name": "Retrieve the audit trail entries for a meter",
  "description": "Retrieves the audit trail entries for a specific meter in Zuora Mediation. The API provides detailed, record-level information about what happened during processing, including Payload and error details, operator information, and the trace ID/event ID.",
  "method": "GET",
  "path": "/meters/{meterId}/auditTrail/entries",
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
      "description": "ID of the meter."
    }
  ],
  "queryParams": [
    {
      "name": "exportType",
      "label": "Export Type",
      "type": "string",
      "required": true,
      "description": "Type of the export. `SAMPLE` indicates an export of success records, `ERROR` indicates an export of error records.",
      "enum": [
        "SAMPLE",
        "ERROR"
      ]
    },
    {
      "name": "runType",
      "label": "Run Type",
      "type": "string",
      "required": true,
      "description": "Specifies the type of run. `DEBUG` indicates a test run, `NORMAL` indicates a live run.",
      "enum": [
        "DEBUG",
        "NORMAL"
      ]
    },
    {
      "name": "sessionId",
      "label": "Session Id",
      "type": "string",
      "required": false,
      "description": "A specific session ID."
    },
    {
      "name": "queryFromTime",
      "label": "Query From Time",
      "type": "string",
      "required": true,
      "description": "The minimum timestamp of the audit trail data. The value must be an ISO 8601 timestamp with a numeric timezone offset in the format `YYYY-MM-DDTHH:MM:SS±HHMM`. For UTC, use `+0000`."
    },
    {
      "name": "queryToTime",
      "label": "Query To Time",
      "type": "string",
      "required": true,
      "description": "The maximum timestamp of the audit trail data. The value must be an ISO 8601 timestamp with a numeric timezone offset in the format `YYYY-MM-DDTHH:MM:SS±HHMM`. For UTC, use `+0000`."
    },
    {
      "name": "operatorId",
      "label": "Operator Id",
      "type": "string",
      "required": false,
      "description": "The ID of the operator. The Operator ID is displayed for each operator node, for both current meters and historic runs. On the Mediation UI, click on a test ID or session ID to see the details of the run."
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "Page size for pagination.",
      "defaultValue": 30
    },
    {
      "name": "cursor",
      "label": "Cursor",
      "type": "string",
      "required": false,
      "description": "nextPage token from previous response."
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
