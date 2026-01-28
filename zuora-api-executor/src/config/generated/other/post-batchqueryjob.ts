import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_batchqueryjobEndpoint: ApiEndpoint = {
  "id": "post-batchqueryjob",
  "name": "Submit an aggregate query job",
  "description": "Submits an AQuA job that contains an aggregated list of ZOQL and Export ZOQL queries.",
  "method": "POST",
  "path": "/v1/batch-query",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "dateTimeUtc",
      "label": "Date Time Utc",
      "type": "boolean",
      "required": false,
      "description": "When using WSDL 69 and later you can ensure that the exported output of dateTime records are rendered according to ISO-8601 generic UTC form by setting `dateTimeUtc` to `true`.\n\nWhen `dateTimeUtc` is set to `true`, exports of dateTime data types will be rendered in the following generic format: `YYYY-MM-DDThh:mm:ss-hhmm` or `YYYY-MM-DDThh:mm:ss+hhmm`.\n\n**Note**: Regardless of what batchType query is used (`zoql` or `zoqlexport`), the query response output for datetime data types can be standardized by setting dateTimeUtc to `true`. When `true`, the results will display datetime types with the format: YYYY-MM-DDThh:mm:ss+/-hhmm.\n",
      "section": "Additional Fields"
    },
    {
      "name": "format",
      "label": "Format",
      "type": "string",
      "required": false,
      "description": "The format of the query. The default value is `csv`.\n",
      "enum": [
        "csv",
        "zip",
        "gzip"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "incrementalTime",
      "label": "Incremental Time",
      "type": "string",
      "required": false,
      "description": "Allows you to override the time from which a Stateful AQuA job incrementally retrieves records that have been created or modified, using the `incrementalTime` parameter. For example, if you set `incrementalTime` = `2015-01-21 10:30:01`, AQuA will retrieve records that have created or modified beginning at 10:30:01. If this parameter is not set, AQuA continues to use the Start Time of the last AQuA session to retrieve records incrementally.\n\nThe time zone of `incrementalTime` depends on which Zuora data center you use. For US Data Center customers, the time zone of `incrementalTime` is Pacific Time. For EU Data Center customers, the time zone of `incrementalTime` is UTC. If the time zone of your system is different from the time zone of `incrementalTime`, you will need to convert to the appropriate time zone before setting `incrementalTime`.\n\n**Note**: This field can only be used in Stateful AQuA mode.\n",
      "section": "Additional Fields"
    },
    {
      "name": "notifyUrl",
      "label": "Notify Url",
      "type": "string",
      "required": false,
      "description": "If URL is provided, the AQuA job will call this `notifyUrl` once the job has completed. The value of `notifyUrl` needs to have `${JOBID}` and `${STATUS}` placeholders. These placeholders will be replaced by the actual job ID and status when returned in the response. Status will be `Completed` after the AQuA job is done.\n\nIf you submit an AQuA query with `notifyUrl` specified, the value of `notifyUrl` will be ignored if your organization has already <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/AB_Aggregate_Query_API/Callout_Notification_for_Completed_AQuA_Jobs\" target=\"_blank\">configured a callout notification through the Zuora user interface</a>. \n",
      "section": "Additional Fields"
    },
    {
      "name": "nullReplacement",
      "label": "Null Replacement",
      "type": "string",
      "required": false,
      "description": "The string used to represent null values in the query results. If you do not set this parameter, null values are represented by the empty string in the query results.\n",
      "section": "Additional Fields"
    },
    {
      "name": "offset",
      "label": "Offset",
      "type": "number",
      "required": false,
      "description": "This field specifies the time offset for AQuA queries in stateful mode. It is an integer in the range 0 to 3,600 seconds.\n\nFor example, if you set this field to 600 seconds and you post a query in stateful mode at 2:00 AM, it will query against data created or updated between the completion time of the previous query and 1:50 AM.\n\nThe value of this field will override the value you configured in **Settings** > **Administration** > **AQuA API Stateful Mode Time Offset**.        \n",
      "defaultValue": 0,
      "section": "Additional Fields"
    },
    {
      "name": "partner",
      "label": "Partner",
      "type": "string",
      "required": false,
      "description": "The partner field indicates the unique ID of a data integration partner. The dropdown list of this field displays partner IDs for the past thirty days.\nIt must be used together with \"project\" field to uniquely identify a data integration target.\n\nFor example, if a continuous AQuA session is to retrieve data incrementally for a Salesforce.com Org 00170000011K3Ub, you can use partner as \"Salesforce\", and \"project\" as \"00170000011K3Ub.\" \nThis field is required only if you are using AQuA in stateful mode. Otherwise, if you are using AQuA in stateless mode, partner field can be null.\n\n**Note**: Zuora highly recommends you use the stateless mode instead of the stateful mode to extract bulk data. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/AB_Aggregate_Query_API/Bulk_data__extraction_from_Zuora_using_AQuA\" target=\"_blank\">Bulk data extraction from Zuora using AQuA</a> for best practices.\n**Note**: Submit a request at <a href=\"http://support.zuora.com\" target=\"_blank\">Zuora Global Support</a> to obtain a partner ID.\n",
      "section": "Additional Fields"
    },
    {
      "name": "project",
      "label": "Project",
      "type": "string",
      "required": false,
      "description": "The project field contains the unique ID of a data integration project for a particular partner. The dropdown list of this field displays project IDs for the past thirty days.\n\nThis field must be used together with partner field to uniquely identify a data integration target. \n\nThis field is required only if you are using AQuA in stateful mode. Otherwise, if you are using AQuA in stateless mode, partner field can be null.\n",
      "section": "Additional Fields"
    },
    {
      "name": "queries",
      "label": "Queries",
      "type": "array",
      "required": false,
      "description": "A JSON array object that contains a list of batch objects.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "apiVersion",
          "label": "Api Version",
          "type": "string",
          "required": false,
          "description": "The API version for the query. If an API version is not specified, the latest version is used by default. Using the latest WSDL version is most useful for reporting use cases. For integration purposes, specify the WSDL version to ensure consistent query behavior, that is, what is supported and included in the response returned by the API.\n\n**Note**: As of API version 69 and later, Zuora changed the format of certain fields. See <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/G_SOAP_API/AB_Getting_started_with_the__SOAP_API/C_Date_Field_Changes_in_the_SOAP_API\" target=\"_blank\">Date Field Changes in the SOAP API</a> for more information and a list of affected fields.\n",
          "section": "Additional Fields"
        },
        {
          "name": "convertToCurrencies",
          "label": "Convert To Currencies",
          "type": "string",
          "required": false,
          "description": "The currencies that you want to convert transaction amounts into. You can specify any number of currencies. Specify the currencies using their <a href=\"https://knowledgecenter.zuora.com/Quick_References/Country%2C_State%2C_and_Province_Codes/D_Currencies_and_Their_3-Letter_Codes\" target=\"_blank\">ISO currency codes</a> and separate each currency with a comma, for example, \"EUR,GBP,JPY\".\n\nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Collect/Zuora_Finance/D_Finance_Settings/F_Foreign_Currency_Conversion/Foreign_Currency_Conversion_for_Data_Source_Exports#Creating_the_Data_Source_Export_Using_the_AQuA_API\" target=\"_blank\">Convert Transaction Amounts Into Any Currency</a> for more information and examples.\n\nTo use this field, you must have <a href=\"https://knowledgecenter.zuora.com/Zuora_Collect/Zuora_Finance/D_Finance_Settings/F_Foreign_Currency_Conversion\" target=\"_blank\">Foreign Currency Conversion</a> enabled and you must be using API version 78 or later.\n",
          "section": "Additional Fields"
        },
        {
          "name": "deleted",
          "label": "Deleted",
          "type": "array",
          "required": false,
          "description": "This field indicates that the AQuA incremental load will retrieve deleted records.\n\nIf you want to export deleted data, this field is required.\n\n**Note**: AQuA API is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through AQuA.\n",
          "itemType": "object",
          "itemFields": [
            {
              "name": "column",
              "label": "Column",
              "type": "string",
              "required": false,
              "description": "Name of the Column in the extracted file that points to the deleted records. \n",
              "section": "Additional Fields"
            },
            {
              "name": "format",
              "label": "Format",
              "type": "string",
              "required": false,
              "description": "Can be set to either `Numeric` or `Boolean`. If set to `Numeric`, deleted records are marked as `1`. If set to `Boolean`, deleted records are marked as `true`.\n",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "name",
          "label": "Name",
          "type": "string",
          "required": false,
          "description": "The query name that can uniquely identify the query in this API request.\n",
          "section": "Account Settings"
        },
        {
          "name": "query",
          "label": "Query",
          "type": "string",
          "required": false,
          "description": "A valid ZOQL query or Export ZOQL query statement.\n",
          "section": "Additional Fields"
        },
        {
          "name": "type",
          "label": "Type",
          "type": "string",
          "required": false,
          "description": "The query type.\n",
          "enum": [
            "zoql",
            "zoqlexport"
          ],
          "section": "Additional Fields"
        }
      ],
      "section": "Additional Fields"
    },
    {
      "name": "sourceData",
      "label": "Source Data",
      "type": "string",
      "required": false,
      "description": "Specify the source this aggregate query runs against:\n\n* `LIVE` represents the live transactional databases at Zuora (Data Query Live).\nIf this field is not specified, the default value `LIVE` will be used.\n",
      "enum": [
        "LIVE"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "useQueryLabels",
      "label": "Use Query Labels",
      "type": "boolean",
      "required": false,
      "description": "When this optional flag is set to `true` the request will use object and field API names for the CSV header output instead of the field labels. Data integration projects should set `useQueryLabels` to `true` so that API names remain the same.\n\nBy default `useQueryLabels` is `false`, so that output CSV headers display the more user-friendly object and field labels. \n",
      "section": "Additional Fields"
    },
    {
      "name": "version",
      "label": "Version",
      "type": "number",
      "required": false,
      "description": "The API version you want to use. \n\nThe supported versions are as follows:\n  - `1.1`. It supports both modes\n  - `1.0`. Default. It supports stateless modes only.\n\nSee <a href=\"https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/AB_Aggregate_Query_API/BA_Stateless_and_Stateful_Modes\" target=\"_blank\">Stateless and stateful modes</a> for more information.\n",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the job. 32 character limit.\n",
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
