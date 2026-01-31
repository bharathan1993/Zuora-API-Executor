import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createaudittrailexportjobEndpoint: ApiEndpoint = {
  "id": "createaudittrailexportjob",
  "name": "Create a job to export audit trail data for a meter",
  "description": "Creates a background job to export the audit trail entries for a specific meter in Zuora Mediation. This API is for large-scale, offline access to audit data. Only one export job is processed per tenant at a time, and each export has a record limit, for example, up to 5 million rows per report. Use the returned requestId with the \"Retrieve the list of export jobs for a meter\" API operation to track the job status and retrieve the generated file names from `fileList`, then download them using the \"Retrieve the presigned URL for an export job\" API operation.",
  "method": "POST",
  "path": "/meters/{meterId}/auditTrail/export",
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
