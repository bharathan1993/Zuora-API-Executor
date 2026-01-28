import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_deploymenttemplatedetailEndpoint: ApiEndpoint = {
  "id": "get-deploymenttemplatedetail",
  "name": "List all details of a template",
  "description": "Returns the detailed information of a specific template by passing its template ID.",
  "method": "GET",
  "path": "/deployment-manager/deployment_templates/{id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: id",
      "placeholder": "Enter id"
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
