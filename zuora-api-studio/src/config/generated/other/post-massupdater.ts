import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_massupdaterEndpoint: ApiEndpoint = {
  "id": "post-massupdater",
  "name": "Perform a mass action",
  "description": "Describes how to perform a mass action through the REST API. ",
  "method": "POST",
  "path": "/v1/bulk",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
