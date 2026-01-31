import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_templatesEndpoint: ApiEndpoint = {
  "id": "get-templates",
  "name": "List all templates",
  "description": "Retrieves all the templates and their details which are created already.",
  "method": "GET",
  "path": "/deployment-manager/deployment_templates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
