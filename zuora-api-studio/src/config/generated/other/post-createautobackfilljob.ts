import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createautobackfilljobEndpoint: ApiEndpoint = {
  "id": "post-createautobackfilljob",
  "name": "Create an auto backfill job",
  "description": "Creates an autobackfill job to update the rate plan charge and order line item with product rate plan charge.",
  "method": "POST",
  "path": "/v1/uno/data-backfill/propagation/jobs",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "enum": [
        "RatePlanCharge",
        "OrderLineItem"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "dryRun",
      "label": "Dry Run",
      "type": "boolean",
      "required": false,
      "description": "If `true`, the job is created in dry-run mode. In dry-run mode, the data\nis not updated. The default value is `false`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "batchSize",
      "label": "Batch Size",
      "type": "number",
      "required": false,
      "defaultValue": 1000,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
