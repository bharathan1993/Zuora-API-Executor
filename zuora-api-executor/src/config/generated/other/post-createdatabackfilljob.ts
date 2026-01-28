import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createdatabackfilljobEndpoint: ApiEndpoint = {
  "id": "post-createdatabackfilljob",
  "name": "Create a data backfill job",
  "description": "Use this operation to perform the following types of data backfill actions. Also, you need to upload a corresponding file to perform a data backfill action.",
  "method": "POST",
  "path": "/v1/uno/data-backfill/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
