import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const delete_dataqueryjobEndpoint: ApiEndpoint = {
  "id": "delete-dataqueryjob",
  "name": "Cancel a data query job",
  "description": "Cancels a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) job, which prevents Zuora from performing the query. This operation is only applicable if the status of the query job is `accepted` or `in_progress`.",
  "method": "DELETE",
  "path": "/query/jobs/{job-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "job-id",
      "label": "Job Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: job-id",
      "placeholder": "Enter job id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
