import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const listcommitmentschedulesEndpoint: ApiEndpoint = {
  "id": "listcommitmentschedules",
  "name": "List schedules for a commitment",
  "description": "Retrieves all the schedules for a specific commitment.",
  "method": "GET",
  "path": "/commitments/{commitmentKey}/schedules",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "commitmentKey",
      "label": "Commitment Key",
      "type": "string",
      "required": true,
      "description": "The unique identifier (ID or number) of the commitment."
    }
  ],
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "Page number for pagination.",
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "Page size for pagination.",
      "defaultValue": 20
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
