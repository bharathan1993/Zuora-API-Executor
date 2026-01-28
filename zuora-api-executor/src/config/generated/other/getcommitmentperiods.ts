import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getcommitmentperiodsEndpoint: ApiEndpoint = {
  "id": "getcommitmentperiods",
  "name": "List periods for a commitment",
  "description": "Lists periods of the specified commitment. You can paginate the results using `page` and `pageSize` query parameters.",
  "method": "GET",
  "path": "/v1/commitments/periods",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
