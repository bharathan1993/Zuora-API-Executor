import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_allcustomobjectbulkjobsEndpoint: ApiEndpoint = {
  "id": "get-allcustomobjectbulkjobs",
  "name": "List all custom object bulk jobs",
  "description": "Lists all custom object bulk jobs submitted by your tenant.",
  "method": "GET",
  "path": "/objects/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
