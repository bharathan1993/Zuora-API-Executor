import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const testspecificversionofmeterEndpoint: ApiEndpoint = {
  "id": "testspecificversionofmeter",
  "name": "Test a specific version of a meter",
  "description": "Test a specific version of a meter in Zuora Mediation without executing a full run. It supports multiple input methods, including uploaded files, sample files, and manual test data. This is useful for validating meter logic and transformations before meter run.",
  "method": "POST",
  "path": "/meters/debug/{meterId}/{version}",
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
      "description": "The ID of the meter to be tested."
    },
    {
      "name": "version",
      "label": "Version",
      "type": "string",
      "required": true,
      "description": "The version of the meter to be tested."
    }
  ],
  "bodyFields": [
    {
      "name": "sourceOptions",
      "label": "Source Options",
      "type": "array",
      "required": false,
      "itemType": "object",
      "itemFields": [
        {
          "name": "processorId",
          "label": "Processor Id",
          "type": "string",
          "required": false,
          "description": "The source operator ID. Optional if there is only one local file source.",
          "section": "Additional Fields"
        },
        {
          "name": "sampleFileId",
          "label": "Sample File Id",
          "type": "number",
          "required": false,
          "description": "Test meter with event definition sample file, specified by the ID.",
          "section": "Additional Fields"
        },
        {
          "name": "localFileId",
          "label": "Local File Id",
          "type": "number",
          "required": false,
          "description": "Test meter with uploaded file, specified by the ID.",
          "section": "Additional Fields"
        },
        {
          "name": "testData",
          "label": "Test Data",
          "type": "array",
          "required": false,
          "description": "Test meter with manually input data.",
          "itemType": "object",
          "itemFields": [
            {
              "name": "Amount",
              "label": "Amount",
              "type": "number",
              "required": false,
              "description": "Amount",
              "section": "Additional Fields"
            },
            {
              "name": "Quantity",
              "label": "Quantity",
              "type": "number",
              "required": false,
              "description": "Quantity",
              "section": "Additional Fields"
            },
            {
              "name": "UsageDate",
              "label": "Usage Date",
              "type": "date",
              "required": false,
              "description": "UsageDate",
              "section": "Additional Fields"
            },
            {
              "name": "CostCenter",
              "label": "Cost Center",
              "type": "string",
              "required": false,
              "description": "CostCenter",
              "section": "Additional Fields"
            },
            {
              "name": "CustomerId",
              "label": "Customer Id",
              "type": "string",
              "required": false,
              "description": "CustomerId",
              "section": "Additional Fields"
            },
            {
              "name": "UsageIdentifier",
              "label": "Usage Identifier",
              "type": "string",
              "required": false,
              "description": "UsageIdentifier",
              "section": "Additional Fields"
            }
          ],
          "section": "Additional Fields"
        },
        {
          "name": "saveTestData",
          "label": "Save Test Data",
          "type": "boolean",
          "required": false,
          "description": "Whether to save the test data.",
          "section": "Additional Fields"
        },
        {
          "name": "testDataName",
          "label": "Test Data Name",
          "type": "string",
          "required": false,
          "description": "The name of the test data.",
          "section": "Account Settings"
        },
        {
          "name": "testDataId",
          "label": "Test Data Id",
          "type": "number",
          "required": false,
          "description": "Test meter with previously saved test data, specified by the ID.",
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
      "itemType": "object",
      "itemFields": [
        {
          "name": "processorId",
          "label": "Processor Id",
          "type": "string",
          "required": false,
          "description": "The source operator ID for event store.",
          "section": "Additional Fields"
        },
        {
          "name": "startDate",
          "label": "Start Date",
          "type": "date",
          "required": false,
          "description": "The start date of the event store to query from, e.g., 2025-01-01.",
          "section": "Additional Fields"
        },
        {
          "name": "endDate",
          "label": "End Date",
          "type": "date",
          "required": false,
          "description": "The end date of the event store to query to, e.g., 2025-02-01.",
          "section": "Additional Fields"
        }
      ],
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
