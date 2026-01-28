import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const bulkdeleteeventsfromeventstoreEndpoint: ApiEndpoint = {
  "id": "bulkdeleteeventsfromeventstore",
  "name": "Bulk delete events from an event store",
  "description": "Allows you to delete multiple events from an event store in Zuora Mediation using a file that lists the event IDs to be removed. It is useful for cleaning up or correcting data in bulk.",
  "method": "POST",
  "path": "/meters/events/bulkDelete",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json"
  }
};
