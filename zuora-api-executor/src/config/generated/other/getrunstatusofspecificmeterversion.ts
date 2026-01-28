import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getrunstatusofspecificmeterversionEndpoint: ApiEndpoint = {
  "id": "getrunstatusofspecificmeterversion",
  "name": "Retrieve the run status of a specific meter version",
  "description": "Retrieves the current run status of a specific meter version in Zuora Mediation. It returns an integer code indicating the status, such as `RUNNING`, `COMPLETED`, or `FAILED`, which helps monitor the meter's execution state.",
  "method": "GET",
  "path": "/meters/{meterId}/{version}/runStatus",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
