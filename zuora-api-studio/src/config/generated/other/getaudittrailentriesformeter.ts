import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaudittrailentriesformeterEndpoint: ApiEndpoint = {
  "id": "getaudittrailentriesformeter",
  "name": "Retrieve the audit trail entries for a meter",
  "description": "Retrieves the audit trail entries for a specific meter in Zuora Mediation. The API provides detailed, record-level information about what happened during processing, including Payload and error details, operator information, and the trace ID/event ID.",
  "method": "GET",
  "path": "/meters/{meterId}/auditTrail/entries",
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
