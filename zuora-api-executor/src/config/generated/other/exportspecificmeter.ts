import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const exportspecificmeterEndpoint: ApiEndpoint = {
  "id": "exportspecificmeter",
  "name": "Export details of a specific meter",
  "description": "The Export Meter operation exports the full definition of a specific meter in Zuora Mediation, including metadata, all versions, event schemas, and operator configurations (source, processor, sink). It's useful for reviewing, backing up, or replicating meter setups across environments.",
  "method": "GET",
  "path": "/meters/export/{meterId}",
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
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
