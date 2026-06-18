import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createaudittrailexportjobEndpoint: ApiEndpoint = {
  "id": "createaudittrailexportjob",
  "name": "Create a job to export audit trail data for a meter",
  "description": "Creates a background job to export the audit trail entries for a specific meter in Zuora Mediation. This API is for large-scale, offline access to audit data. Only one export job is processed per tenant at a time, and each export has a record limit, for example, up to 5 million rows per report. Use the returned requestId with the \"Retrieve the list of export jobs for a meter\" API operation to track the job status and retrieve the generated file names from `fileList`, then download them using the \"Retrieve the presigned URL for an export job\" API operation.",
  "method": "POST",
  "path": "/meters/{meterId}/auditTrail/export",
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
      "name": "sessionIds",
      "label": "Session Ids",
      "type": "array",
      "required": false,
      "description": "A list of specific run IDs to export. For example, `R-000001, R-000002`.",
      "itemType": "string"
    },
    {
      "name": "runStatuses",
      "label": "Run Statuses",
      "type": "array",
      "required": false,
      "description": "Filters audit entries by their run status. If omitted, all statuses are included. Statuses are case-sensitive. Possible values: - NEVER_RUN - TESTING - TESTING_FAILED - TESTING_PASSED - RUNNING - PAUSED - COMPLETED - FAILED - CANCELED - INITIALIZING - USAGE_PUSHING - PUSH_COMPLETED - CONSUME_COMPLETED",
      "itemType": "string"
    },
    {
      "name": "operatorIds",
      "label": "Operator Ids",
      "type": "array",
      "required": false,
      "description": "A list of operator IDs to filter by. The Operator ID is displayed for each operator node, for both current meters and historic runs. On the Mediation UI, click on a test ID or session ID to see the details of the run.",
      "itemType": "string"
    },
    {
      "name": "queryFromTime",
      "label": "Query From Time",
      "type": "string",
      "required": true,
      "description": "The minimum timestamp for the data to be exported. The standard used is ISO 8601 with timezones."
    },
    {
      "name": "queryToTime",
      "label": "Query To Time",
      "type": "string",
      "required": true,
      "description": "The maximum timestamp for the data to be exported. The standard used is ISO 8601 with timezones."
    },
    {
      "name": "format",
      "label": "Format",
      "type": "string",
      "required": false,
      "description": "Required format for the exported data. Supported values are: - `csv`: Row-based CSV output - `parquet`: Columnar Parquet output - `avro`: Avro output If omitted, `csv` is used by default for backward compatibility.",
      "defaultValue": "csv"
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
