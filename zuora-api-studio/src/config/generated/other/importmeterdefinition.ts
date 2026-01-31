import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const importmeterdefinitionEndpoint: ApiEndpoint = {
  "id": "importmeterdefinition",
  "name": "Import a meter definition",
  "description": "Import a meter definition into Zuora Mediation using a file exported from the Export Meter API.",
  "method": "POST",
  "path": "/meters/import",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
