import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getalltestenvironmentsEndpoint: ApiEndpoint = {
  "id": "getalltestenvironments",
  "name": "List all test environments",
  "description": "Use this operation to retrieves a list of all Test Environments. ",
  "method": "GET",
  "path": "/test-environments",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
