import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getaudittrailexportjobsEndpoint: ApiEndpoint = {
  "id": "getaudittrailexportjobs",
  "name": "Retrieve the list of export jobs for a meter",
  "description": "Retrieves the list of previously initiated export jobs for a specific meter in Zuora Mediation. The API supports advanced filtering by time range, run status, run type, export type, session IDs, and operator IDs. Use the returned `status` and `fileList` fields to determine whether a job is complete and which files to download. Then use the \"Retrieve the presigned URL for an export job\" API operation with each `fileKey` in `fileList` to obtain the download URLs.",
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
