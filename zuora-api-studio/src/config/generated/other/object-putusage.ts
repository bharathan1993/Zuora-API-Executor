import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const object_putusageEndpoint: ApiEndpoint = {
  "id": "object-putusage",
  "name": "CRUD: Update a usage record",
  "description": "Updates a usage record. Updating usage records that are associated with a dynamic pricing usage charge is not supported through this endpoint. The request fails and the record is not updated. Use Mediation-based flows to manage such usage.",
  "method": "PUT",
  "path": "/v1/object/usage/{id}",
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
  "bodyFields": [
    {
      "name": "EndDateTime",
      "label": "End Date Time",
      "type": "date",
      "required": false,
      "description": " The end date and time of a range of time when usage is tracked. Use this field for reporting; this field doesn't affect usage calculation.\n**Character limit**: 29 **Values**: a valid date and time value ",
      "section": "Additional Fields"
    },
    {
      "name": "Quantity",
      "label": "Quantity",
      "type": "number",
      "required": false,
      "description": "Indicates the number of units used.\n\n**Character limit**: 16 \n\n**Values**: A valid decimal amount.\n",
      "section": "Additional Fields"
    },
    {
      "name": "RbeStatus",
      "label": "Rbe Status",
      "type": "string",
      "required": false,
      "description": " Indicates if the rating and billing engine (RBE) processed usage data for an invoice.\n**Character limit**: 9 **Values**: automatically generated to be one of the following values: `Importing`, `Pending`, `Processed` ",
      "section": "Additional Fields"
    },
    {
      "name": "StartDateTime",
      "label": "Start Date Time",
      "type": "date",
      "required": false,
      "description": " The start date and time of a range of time when usage is tracked. Zuora uses this field value to determine the usage date. Unlike the `EndDateTime`, the `StartDateTime` field does affect usage calculation.\n**Character limit**: 29 **Values**: a valid date and time value ",
      "section": "Additional Fields"
    },
    {
      "name": "UOM",
      "label": "U O M",
      "type": "string",
      "required": false,
      "description": " Specifies the units to measure usage. Units of measure are configured in the web-based UI. Your values depend on your configuration in **Billing Settings**.\n**Character limit**: **Values**: a valid unit of measure ",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
