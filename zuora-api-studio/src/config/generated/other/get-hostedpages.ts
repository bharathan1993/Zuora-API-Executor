import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_hostedpagesEndpoint: ApiEndpoint = {
  "id": "get-hostedpages",
  "name": "List hosted pages",
  "description": "Returns the Payment Pages configuration metadata,",
  "method": "GET",
  "path": "/v1/hostedpages",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
