import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const geteinvoicemandatesEndpoint: ApiEndpoint = {
  "id": "geteinvoicemandates",
  "name": "List mandates for downloading files",
  "description": "Fetches mandates for downloading files based on the country code, category, and process type selection.",
  "method": "GET",
  "path": "/v1/e-invoice/mandates",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "queryParams": [
    {
      "name": "countryCode",
      "label": "Country Code",
      "type": "string",
      "required": false,
      "description": "2-digit country code."
    },
    {
      "name": "processType",
      "label": "Process Type",
      "type": "string",
      "required": false,
      "description": "The process type of the e-invoicing business region. - If the service provider is Sovos, the process type is `Clearance` or `ClearanceWithCancellation`. - If the service provider is Avalara, the process type is `Clearance` or `PEPPOLNetwork`. - If the service provider is PEPPOL, the process type is `Unknown`.",
      "enum": [
        "Clearance",
        "ClearanceWithCancellation",
        "PEPPOLNetwork",
        "Unknown"
      ]
    },
    {
      "name": "provider",
      "label": "Provider",
      "type": "string",
      "required": false,
      "description": "The service provider that is associated with the country and process type."
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
