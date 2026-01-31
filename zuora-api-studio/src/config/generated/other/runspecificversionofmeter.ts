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
      "description": "Path parameter: meterId",
      "placeholder": "Enter meter id"
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true,
      "description": "Path parameter: version",
      "placeholder": "Enter version"
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
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
