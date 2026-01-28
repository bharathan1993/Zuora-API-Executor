import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_dataqueryjobEndpoint: ApiEndpoint = {
  "id": "post-dataqueryjob",
  "name": "Submit a data query",
  "description": "Submits a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) to be executed by Zuora, creating a new query job. Use the [Retrieve a data query job](https://developer.zuora.com/v1-api-reference/api/operation/GET_DataQueryJob/) endpoint to monitor the job status and access the results once complete.",
  "method": "POST",
  "path": "/query/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "columnSeparator",
      "label": "Column Separator",
      "type": "string",
      "required": false,
      "description": "The column separator. Only applicable if the `outputFormat` is `DSV`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "compression",
      "label": "Compression",
      "type": "string",
      "required": true,
      "description": "Specifies whether Zuora compresses the query results.\n",
      "enum": [
        "NONE",
        "GZIP",
        "ZIP"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "encryptionKey",
      "label": "Encryption Key",
      "type": "string",
      "required": false,
      "description": "Base-64 encoded public key of an RSA key-pair. \n\nNote that Data Query only supports 1024-bit RSA keys.\n\nIf you set this field, Zuora encrypts the query results using the provided public key. You must use the corresponding private key to decrypt the query results.\n",
      "section": "Additional Fields"
    },
    {
      "name": "output",
      "label": "Output",
      "type": "object",
      "required": true,
      "description": "Additional information about the query results.\n",
      "fields": [
        {
          "name": "target",
          "label": "Target",
          "type": "string",
          "required": true,
          "description": "Set this field to `S3`.\n",
          "enum": [
            "S3"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "outputFormat",
      "label": "Output Format",
      "type": "string",
      "required": true,
      "description": "Specifies the format of the query results.\n\n* `JSON` - Each row in the query results will be a JSON object. The format of the query result file is [JSON Lines](http://jsonlines.org/).\n* `CSV` - Each row in the query results will be a comma-separated list of values.\n* `TSV` - Each row in the query results will be a tab-separated list of values.\n* `DSV` - Pass any character as your custom delimiter into the `columnSeparator` field.\n",
      "enum": [
        "JSON",
        "CSV",
        "TSV",
        "DSV"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "query",
      "label": "Query",
      "type": "string",
      "required": true,
      "description": "The query to perform. See [SQL Queries in Data Query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query/BA_SQL_Queries_in_Data_Query) for more information.\n",
      "section": "Additional Fields"
    },
    {
      "name": "readDeleted",
      "label": "Read Deleted",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether the query will retrieve only the deleted record. If `readDeleted` is set to `false` or it is not included in the request body, the query will retrieve only the non-deleted records. If it is set to `true`, only the deleted records will be retrieved.\n\nIf you select the `deleted` column in the `query` field, both non-deleted and deleted records will be retrieved regardless of the value in the `readDeleted` field.\n\nNote that Data Query is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through Data Query.\n",
      "defaultValue": false,
      "section": "Additional Fields"
    },
    {
      "name": "sourceData",
      "label": "Source Data",
      "type": "string",
      "required": false,
      "description": "Specify the source that data queries run against:\n\n* `LIVE` represents the live transactional databases at Zuora (Data Query Live).\n\n* `WAREHOUSE` represents Zuora Warehouse, which has better performance and fewer limitations than the live transactional database. This option is available only if you have the Zuora Warehouse feature enabled in your tenant. For more information, see <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/Zuora_Warehouse/A_Zuora_Warehouse_overview\" target=\"_blank\">Zuora Warehouse</a>. <br>If this option is selected, you can specify warehouse size in `warehouseSize`.\n\nIf this field is not specified, the default value `LIVE` will be used.\n",
      "enum": [
        "LIVE",
        "WAREHOUSE"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "useIndexJoin",
      "label": "Use Index Join",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to use Index Join. Index join is useful when you have a specific reference value in your WHERE clause to index another large table by. See [Use Index Join](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query/Best_practices_of_Data_Query#Use_Index_Join) for more information.",
      "section": "Additional Fields"
    },
    {
      "name": "warehouseSize",
      "label": "Warehouse Size",
      "type": "string",
      "required": false,
      "description": "Specify the size of Zuora Warehouse. This field is available only if the `sourceData` is `WAREHOUSE`.\n\nIf this field is not specified or set to `NULL`, the default value `xsmall` will be used.\n",
      "enum": [
        "xsmall",
        "NULL"
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
