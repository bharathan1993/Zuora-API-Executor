import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const retrievemetersummarydataEndpoint: ApiEndpoint = {
  "id": "retrievemetersummarydata",
  "name": "Retrieve summary data for a meter",
  "description": "Retrieves summary data for a specific meter in Zuora Mediation, providing a rolled-up view of a meter run or time window. The API supports grouping by Operator ID, Error Code, or Session ID, and allows optional filters such as Query From Time, Query To Time, Operator IDs, and Session IDs. The API returns aggregated output and error counts per group and includes validation with detailed error responses for invalid parameters or formats.",
  "method": "POST",
  "path": "/meters/{meterId}/summary",
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
      "description": "Path parameter: meterId",
      "placeholder": "Enter meter id"
    }
  ],
  "bodyFields": [
    {
      "name": "runType",
      "label": "Run Type",
      "type": "string",
      "required": false,
      "description": "Specifies the type of run.",
      "section": "Additional Fields"
    },
    {
      "name": "sessionIds",
      "label": "Session Ids",
      "type": "array",
      "required": false,
      "description": "A list of specific run IDs to export.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "operatorIds",
      "label": "Operator Ids",
      "type": "array",
      "required": false,
      "description": "A list of operator IDs to filter by.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "groupBy",
      "label": "Group By",
      "type": "array",
      "required": false,
      "description": "Specifies the fields used to group the summary results.",
      "itemType": "string",
      "section": "Additional Fields"
    },
    {
      "name": "queryFromTime",
      "label": "Query From Time",
      "type": "string",
      "required": false,
      "description": "The minimum timestamp for the data to be exported.",
      "section": "Additional Fields"
    },
    {
      "name": "queryToTime",
      "label": "Query To Time",
      "type": "string",
      "required": false,
      "description": "The maximum timestamp for the data to be exported.",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
