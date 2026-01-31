import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const create_bulkpdftozipgenerationEndpoint: ApiEndpoint = {
  "id": "create-bulkpdftozipgeneration",
  "name": "Export bulk PDF files",
  "description": "The background job that compresses large number of PDF(s) into ZIP files. For answers to frequently asked questions regarding exporting bulk PDF files, see <a href=\"https://docs.zuora.com/en/zuora-billing/bill-your-customer/export-bulk-pdf-files/faqs\" target=\"_blank\">Export Bulk PDF Files FAQs</a>.",
  "method": "POST",
  "path": "/v1/operations/bulk-pdf",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "documents",
      "label": "Documents",
      "type": "array",
      "required": true,
      "description": "An array that contains a collection of objects where each object contains billing document type and their IDs.\n",
      "itemType": "object",
      "itemFields": [
        {
          "name": "docType",
          "label": "Doc Type",
          "type": "string",
          "required": false,
          "description": "The type of billing document.",
          "enum": [
            "Invoice",
            "CreditMemo",
            "DebitMemo"
          ],
          "section": "Additional Fields"
        },
        {
          "name": "objectIds",
          "label": "Object Ids",
          "type": "array",
          "required": false,
          "description": "The collection of billing document IDs.",
          "itemType": "string",
          "section": "Additional Fields"
        }
      ],
      "section": "Invoice & Document Settings"
    },
    {
      "name": "fileName",
      "label": "File Name",
      "type": "string",
      "required": true,
      "description": "The prefix part of output file name(s). The response will include multiple file URLs. The number of zip files generated corresponds to the number of invoice IDs. Each zip file contains up to 1000 document IDs.\nEg: \n  if fileName is \"all-invoices-posted-jan-2024\" then fileURL(s) will start with the file name followed by an underscore and a number. For instance, all-invoices-posted-jan-2024_1.zip, all-invoices-posted-jan-2024_2.zip, and so on.\n",
      "maxLength": 32,
      "section": "Account Settings"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the job.\n",
      "maxLength": 32,
      "section": "Account Settings"
    },
    {
      "name": "indexFileFormat",
      "label": "Index File Format",
      "type": "string",
      "required": true,
      "description": "The format of the index file. It contains the metadata about the files and their contents.\n",
      "enum": [
        "JSON",
        "CSV"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "generateMissingPDF",
      "label": "Generate Missing P D F",
      "type": "boolean",
      "required": false,
      "description": "This flag controls the behavior of whether to generate PDF(s) for billing documents that do not already have one.\n\n  - setting it to true indicates service would go through the provided document ID list, find the billing documents that do not have a generated PDF,\n  generate them all at once, and then proceed to the zipping process.\n\n  - setting it to false indicates service would go through the provided document ID list, find the billing documents that do not have a generated PDF,\n  mark them as Invalid, and skip them from the zipping process. IDs marked as invalid will be included in the response.\n\nThe default value is false.\n",
      "section": "Additional Fields"
    },
    {
      "name": "ignoreArchivedFiles",
      "label": "Ignore Archived Files",
      "type": "boolean",
      "required": false,
      "description": "Ignores archived PDF files during export without causing the entire job request to fail when enabled. \n",
      "section": "Additional Fields"
    },
    {
      "name": "persistIndexFile",
      "label": "Persist Index File",
      "type": "boolean",
      "required": false,
      "description": "Controls the generation of the index file, allowing you to efficiently handle high volumes of requests. By default, this field is set to `true`.  \n  - When set to `true`, the index file is generated and included in the zip file.\n  - When set to `false`, the index file is not generated and consequently not included in the zip file. \n",
      "section": "Additional Fields"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
