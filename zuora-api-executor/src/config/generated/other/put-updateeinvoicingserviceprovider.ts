import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_updateeinvoicingserviceproviderEndpoint: ApiEndpoint = {
  "id": "put-updateeinvoicingserviceprovider",
  "name": "Update an e-invoicing service provider",
  "description": "Updates information about an e-invoicing service privider.",
  "method": "PUT",
  "path": "/v1/einvoice/service-providers/{key}",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: key",
      "placeholder": "Enter key"
    }
  ],
  "bodyFields": [
    {
      "name": "companyIdentifier",
      "label": "Company Identifier",
      "type": "string",
      "required": false,
      "description": "The identifier of the company used to create a sender system ID, which serves to identify the system where the transactions are sent.\n",
      "section": "Additional Fields"
    },
    {
      "name": "test",
      "label": "Test",
      "type": "boolean",
      "required": false,
      "description": "Whether the e-invoicing service provider's configuration is intended for testing. \n\n- If you set this field to `true`, requests are directed to the testing integration endpoints.\n- If you set this field to `false`, requests are directed to the production integration endpoints.\n",
      "section": "Additional Fields"
    },
    {
      "name": "apiKey",
      "label": "Api Key",
      "type": "string",
      "required": false,
      "description": "The API key is used to authenticate the e-invoicing service provider's requests. This field only applies to the Sovos or Avalara service provider. \n",
      "section": "Additional Fields"
    },
    {
      "name": "secretKey",
      "label": "Secret Key",
      "type": "string",
      "required": false,
      "description": "The secret key is used to authenticate the e-invoicing service provider's requests. This field only applies to the Sovos or Avalara service provider. \n",
      "section": "Additional Fields"
    },
    {
      "name": "use_certificate",
      "label": "Use Certificate",
      "type": "boolean",
      "required": false,
      "description": "This field is used to indicate whether the *clientCertificate*, `clientCertificateType`, and `clientCertificatePassord` fields need to be supplied in the request.\n\n**Note:** If the flag is `true`, the TLS endpoint config is enabled. If the flag is `false`, the Non-TLS config endpoint is enabled.\nA TLS certificate and password are no longer required for integration with Sovos. Zuora now uses token-based authentication for all supported countries, including India.\n",
      "defaultValue": true,
      "section": "Additional Fields"
    },
    {
      "name": "clientCertificate",
      "label": "Client Certificate",
      "type": "string",
      "required": false,
      "description": "The client certificate is used to authenticate the e-invoicing service provider's requests, which should be in base64 encoded format. This field only applies to the Sovos service provider. \n",
      "section": "Additional Fields"
    },
    {
      "name": "clientCertificateType",
      "label": "Client Certificate Type",
      "type": "string",
      "required": false,
      "description": "The client certificate type is used to specify the type of the client certificate. This field only applies to the Sovos service provider. \n",
      "defaultValue": "PKCS12",
      "section": "Additional Fields"
    },
    {
      "name": "clientCertificatePassword",
      "label": "Client Certificate Password",
      "type": "string",
      "required": false,
      "description": "The client certificate password is the password to protect the client certificate. This field only applies to the Sovos service provider. \n",
      "section": "Additional Fields"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "string",
      "required": false,
      "description": "The name of the e-invoicing service provider.\n",
      "maxLength": 100,
      "section": "Account Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
