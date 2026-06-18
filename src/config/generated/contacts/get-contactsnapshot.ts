import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const get_contactsnapshotEndpoint: ApiEndpoint = {
  "id": "get-contactsnapshot",
  "name": "Retrieve a contact snapshot",
  "description": "Retrieves detailed information about the snapshot of a contact, either a bill-to contact or sold-to contact.",
  "method": "GET",
  "path": "/v1/contact-snapshots/{contact-snapshot-id}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "contact-snapshot-id",
      "label": "Contact Snapshot Id",
      "type": "string",
      "required": true,
      "description": "The unique ID of the contact snapshot to be retrieved. For example, 2c92c8955bd63cc1015bd7c151af02ab."
    }
  ],
  "queryParams": [
    {
      "name": "page",
      "label": "Page",
      "type": "number",
      "required": false,
      "description": "The index number of the page that you want to retrieve. This parameter is dependent on `pageSize`. You must set `pageSize` before specifying `page`. For example, if you set `pageSize` to `20` and `page` to `2`, the 21st to 40th records are returned in the response.",
      "defaultValue": 1
    },
    {
      "name": "pageSize",
      "label": "Page Size",
      "type": "number",
      "required": false,
      "description": "The number of records returned per page in the response.",
      "defaultValue": 20
    }
  ],
  "bodyFields": [],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
