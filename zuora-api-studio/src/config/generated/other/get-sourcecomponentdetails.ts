import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_sourcecomponentdetailsEndpoint: ApiEndpoint = {
  "id": "get-sourcecomponentdetails",
  "name": "List all details of source components",
  "description": "When the advanced option is clicked, get the details/metadata of the components, such as settings, notifications, workflow, etc.",
  "method": "GET",
  "path": "/deployment-manager/deployment_artifacts/retrieve-settings",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
