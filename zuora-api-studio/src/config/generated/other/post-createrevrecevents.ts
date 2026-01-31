import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createrevreceventsEndpoint: ApiEndpoint = {
  "id": "post-createrevrecevents",
  "name": "Regenerate revenue recognition events transactions for Delivery Schedule",
  "description": "Use this operation to generate Delivery Schedule based revenue recognition events transactions.",
  "method": "POST",
  "path": "/v1/uno-regenerate/rev-rec-events",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
