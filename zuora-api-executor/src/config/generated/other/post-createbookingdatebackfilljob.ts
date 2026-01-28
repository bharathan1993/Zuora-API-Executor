import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createbookingdatebackfilljobEndpoint: ApiEndpoint = {
  "id": "post-createbookingdatebackfilljob",
  "name": "Create a booking date backfill job",
  "description": "Creates a booking date backfill job to update the booking date with your charge's original created-on date.",
  "method": "POST",
  "path": "/v1/uno/data-backfill/bookingdate/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
