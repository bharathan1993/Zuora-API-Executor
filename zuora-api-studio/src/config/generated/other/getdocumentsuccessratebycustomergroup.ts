import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const getdocumentsuccessratebycustomergroupEndpoint: ApiEndpoint = {
  "id": "getdocumentsuccessratebycustomergroup",
  "name": "List the document success rate metrics by customer group",
  "description": "Gets the Document Success Rate timeseries for each customer group over the past 6 months. The data of the current month will not be included. For example, if it is April 15th today, the data for April will not be included. Data for March and earlier will be shown.",
  "method": "GET",
  "path": "/api/v1/metrics/customer_group_over_time",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
