import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_dataqueryjobEndpoint: ApiEndpoint = {
  "id": "get-dataqueryjob",
  "name": "Retrieve a data query job",
  "description": "Retrieves a [data query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query) job. You can use this operation to track the status of the query job and obtain the URL of the query results.",
  "method": "GET",
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
