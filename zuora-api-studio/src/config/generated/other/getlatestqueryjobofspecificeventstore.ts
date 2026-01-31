import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getlatestqueryjobofspecificeventstoreEndpoint: ApiEndpoint = {
  "id": "getlatestqueryjobofspecificeventstore",
  "name": "Retrieve the latest query job of a specific event store",
  "description": "Retrieves the most recent query job executed on a specific event store in Zuora Mediation. It returns metadata such as query type (e.g., DELETE), status, record counts, and timestamps.",
  "method": "GET",
  "path": "/meters/events/stores/{id}/jobs/latest",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
