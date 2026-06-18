import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const createtokenEndpoint: ApiEndpoint = {
  "id": "createtoken",
  "name": "Create an OAuth token",
  "description": "Creates a bearer token that enables an OAuth client to authenticate with the Zuora REST API. The OAuth client must have been created using the Zuora UI. See [Authentication](https://developer.zuora.com/rest-api/general-concepts/authentication/) for more information.",
  "method": "POST",
  "path": "/oauth/token",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
