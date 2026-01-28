import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_listallsettingsEndpoint: ApiEndpoint = {
  "id": "get-listallsettings",
  "name": "List all settings",
  "description": "Get a list of all available settings in your tenant. ",
  "method": "GET",
  "path": "/settings/listing",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
