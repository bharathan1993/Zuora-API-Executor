import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_stopautobackfilljobbyidEndpoint: ApiEndpoint = {
  "id": "put-stopautobackfilljobbyid",
  "name": "Stop an auto backfill job",
  "description": "Use this operation to stop an auto backfill job.",
  "method": "PUT",
  "path": "/v1/uno/data-backfill/propagation/jobs/{jobId}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "jobId",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: jobId",
      "placeholder": "Enter job id"
    }
  ],
  "bodyFields": [
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": true,
      "description": "`Stopping` is currently the only allowed value.\n",
      "enum": [
        "Stopping"
      ],
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
