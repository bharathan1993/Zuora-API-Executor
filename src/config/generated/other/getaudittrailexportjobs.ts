import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaudittrailexportjobsEndpoint: ApiEndpoint = {
  "id": "getaudittrailexportjobs",
  "name": "Retrieve the list of export jobs for a meter",
  "description": "Retrieves the list of previously initiated export jobs for a specific meter in Zuora Mediation.",
  "method": "GET",
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
      "description": "ID of the meter."
    }
  ],
  "queryParams": [
    {
      "name": "exportType",
      "label": "Export Type",
      "type": "string",
      "required": false,
      "description": "Type of the export. `SAMPLE` indicates an export of success records, `ERROR` indicates an export of error records.",
      "enum": [
        "SAMPLE",
        "ERROR"
      ]
    },
    {
      "name": "sessionIds",
      "label": "Session Ids",
      "type": "array",
      "required": false,
      "description": "The session IDs of the meter run. For example, `R-000001, R-000002`.",
      "itemType": "string"
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
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "The page number.",
      "defaultValue": 1
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
