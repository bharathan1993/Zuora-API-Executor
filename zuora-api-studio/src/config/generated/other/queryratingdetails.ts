import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const queryratingdetailsEndpoint: ApiEndpoint = {
  "id": "queryratingdetails",
  "name": "List rating details",
  "description": "Lists rating details. Use query parameters to paginate and filter results.",
  "method": "GET",
  "path": "/object-query/rating-details",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
