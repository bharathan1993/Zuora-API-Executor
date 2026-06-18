import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const runspecificversionofmeterEndpoint: ApiEndpoint = {
  "id": "runspecificversionofmeter",
  "name": "Run a specific version of a meter",
  "description": "Executes a specific version of a meter in Zuora Mediation. You can choose to run it with either a local file or event store source by providing optional configurations.",
  "method": "POST",
  "path": "/meters/run/{meterId}/{version}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "meterId",
      "label": "Meter Id",
      "type": "string",
      "required": true,
      "description": "The ID of the meter to run. You can find this ID in the Zuora Mediation UI URL when viewing a meter."
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true,
      "description": "The version of the meter to run. Currently, the only supported value is `0.0.1` for all meters. Always pass `0.0.1` in this path parameter.",
      "enum": [
        "0.0.1"
      ]
    }
  ],
  "bodyFields": [
    {
      "name": "sourceOptions",
      "label": "Source Options",
      "type": "array",
      "required": false,
      "description": "Settings for meter to run with local file.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "processorId",
          "label": "Processor Id",
          "type": "string",
          "required": false,
          "description": "Source operator ID. Optional if there's only one local file source in the meter.",
          "section": "Additional Fields"
        },
        {
          "name": "localFileId",
          "label": "Local File Id",
          "type": "string",
          "required": false,
          "description": "Internal ID of uploaded file.",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "eventStoreSourceOptions",
      "label": "Event Store Source Options",
      "type": "array",
      "required": false,
      "description": "Settings for meter to run with event store.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "processorId",
          "label": "Processor Id",
          "type": "string",
          "required": true,
          "description": "Source operator ID.",
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": false,
          "description": "Start date of event store to query from (e.g., 2025-01-01).",
          "section": "Additional Fields"
        },
        {
          "name": "endDate",
          "label": "End Date",
          "type": "date",
          "required": false,
          "description": "End date of event store to query to (e.g., 2025-02-01).",
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "runtimeSourceConfigs",
      "label": "Runtime Source Configs",
      "type": "array",
      "required": false,
      "description": "Runtime source configurations to override source settings at execution time. Applies to both NORMAL and DEBUG runs.",
      "itemType": "object",
      "itemFields": [
        {
          "name": "processorId",
          "label": "Processor Id",
          "type": "string",
          "required": false,
          "description": "ID of the source processor in the meter definition to apply this configuration to. Required when the meter has multiple sources of the same type.",
          "section": "Additional Fields"
        },
        {
          "name": "sourceType",
          "label": "Source Type",
          "type": "string",
          "required": true,
          "description": "Type of the source. Must match the actual source type in the meter definition.",
          "enum": [
            "LOCAL_FS",
            "S3",
            "SNOWFLAKE",
            "EVENT_STORE"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "localFs",
          "label": "Local Fs",
          "type": "object",
          "required": false,
          "description": "Configuration options for LOCAL_FS sources (previously uploaded files).",
          "fields": [
            {
              "name": "fileId",
              "label": "File Id",
              "type": "number",
              "required": true,
              "description": "The ID of the file uploaded through the \"Upload a file\" operation, to be used as the source.",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "s3",
          "label": "S3",
          "type": "object",
          "required": false,
          "description": "Configuration options for S3 sources (paths, connection).",
          "fields": [
            {
              "name": "connectionName",
              "label": "Connection Name",
              "type": "string",
              "required": false,
              "description": "Name of the S3 connection to use.",
              "section": "Account Settings"
            },
            {
              "name": "connectionVersion",
              "label": "Connection Version",
              "type": "number",
              "required": false,
              "description": "Version of the S3 connection.",
              "section": "Additional Fields"
            },
            {
              "name": "paths",
              "label": "Paths",
              "type": "array",
              "required": true,
              "description": "List of S3 paths to read from.",
              "itemType": "string",
              "section": "Additional Fields"
            },
            {
              "name": "fileFormat",
              "label": "File Format",
              "type": "string",
              "required": true,
              "description": "Format of the input files.",
              "enum": [
                "CSV",
                "EXCEL",
                "PARQUET",
                "JSON",
                "XML",
                "AVRO"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "incremental",
              "label": "Incremental",
              "type": "boolean",
              "required": false,
              "description": "Enables incremental mode to continuously monitor for new files. When `false`, files are processed only once.",
              "section": "Additional Fields"
            },
            {
              "name": "monitorInterval",
              "label": "Monitor Interval",
              "type": "number",
              "required": false,
              "description": "Interval in milliseconds for checking for new files when incremental mode is enabled. This field is applicable only when `incremental` is set to `true`.",
              "section": "Additional Fields"
            },
            {
              "name": "retentionTime",
              "label": "Retention Time",
              "type": "number",
              "required": false,
              "description": "Retention time in milliseconds for processed files.",
              "section": "Additional Fields"
            },
            {
              "name": "batchSize",
              "label": "Batch Size",
              "type": "number",
              "required": false,
              "description": "Batch size for reading files.",
              "section": "Account Settings"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "snowflake",
          "label": "Snowflake",
          "type": "object",
          "required": false,
          "description": "Configuration options for Snowflake sources.",
          "fields": [
            {
              "name": "database",
              "label": "Database",
              "type": "string",
              "required": false,
              "description": "Snowflake database name.",
              "section": "Additional Fields"
            },
            {
              "name": "schema",
              "label": "Schema",
              "type": "string",
              "required": false,
              "description": "Snowflake schema name.",
              "section": "Additional Fields"
            },
            {
              "name": "table",
              "label": "Table",
              "type": "string",
              "required": false,
              "description": "Snowflake table name.",
              "section": "Additional Fields"
            },
            {
              "name": "query",
              "label": "Query",
              "type": "string",
              "required": false,
              "description": "Custom SQL query to execute (SELECT only).",
              "section": "Additional Fields"
            },
            {
              "name": "warehouse",
              "label": "Warehouse",
              "type": "string",
              "required": false,
              "description": "Snowflake warehouse to use.",
              "section": "Additional Fields"
            },
            {
              "name": "role",
              "label": "Role",
              "type": "string",
              "required": false,
              "description": "Snowflake role to use.",
              "section": "Additional Fields"
            },
            {
              "name": "unloadFileFormat",
              "label": "Unload File Format",
              "type": "string",
              "required": false,
              "description": "File format for UNLOAD operation.",
              "enum": [
                "CSV",
                "EXCEL",
                "PARQUET",
                "JSON",
                "XML",
                "AVRO"
              ],
              "section": "Additional Fields"
            },
            {
              "name": "queryParameters",
              "label": "Query Parameters",
              "type": "object",
              "required": false,
              "description": "Parameter values for parameterized queries (:paramName syntax).",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "eventStore",
          "label": "Event Store",
          "type": "object",
          "required": false,
          "description": "Configuration options for EventStore sources (date range).",
          "fields": [
            {
              "name": "storeId",
              "label": "Store Id",
              "type": "string",
              "required": true,
              "description": "Event store ID to read from.",
              "section": "Additional Fields"
            },
            {
              "name": "startDate",
              "label": "Start Date",
              "type": "string",
              "required": false,
              "description": "Start date for partition pruning (YYYY-MM-DD).",
              "section": "Additional Fields"
            },
            {
              "name": "endDate",
              "label": "End Date",
              "type": "string",
              "required": false,
              "description": "End date for partition pruning (YYYY-MM-DD).",
              "section": "Additional Fields"
            },
            {
              "name": "query",
              "label": "Query",
              "type": "string",
              "required": false,
              "description": "Ad-hoc SQL query for Event Store (SELECT only, mutually exclusive with date range).",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "uniqueKey",
      "label": "Unique Key",
      "type": "string",
      "required": false,
      "description": "Optional idempotency key for this meter run. The `uniqueKey` is scoped to the meter (not tenant-wide). When you trigger a meter run and the operation times out, you can safely retry the same request using the same `uniqueKey`. If the original request already created a run, Zuora Mediation returns a 400 error indicating a duplicate `uniqueKey` and does not start a new run. This behavior ensures idempotency and prevents duplicate meter executions.",
      "section": "Additional Fields"
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
