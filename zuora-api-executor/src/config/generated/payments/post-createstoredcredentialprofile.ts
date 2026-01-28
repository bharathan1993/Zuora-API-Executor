import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_createstoredcredentialprofileEndpoint: ApiEndpoint = {
  "id": "post-createstoredcredentialprofile",
  "name": "Create a stored credential profile",
  "description": "Creates a stored credential profile within a payment method.",
  "method": "POST",
  "path": "/v1/payment-methods/{payment-method-id}/profiles",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "payment-method-id",
      "label": "Payment Method Id",
      "type": "string",
      "required": true,
      "description": "Path parameter: payment-method-id",
      "placeholder": "Enter payment method id"
    }
  ],
  "bodyFields": [
    {
      "name": "action",
      "label": "Action",
      "type": "string",
      "required": false,
      "description": "Specifies how Zuora activates the stored credential profile. Only applicable if you set the `status` field to `Active`.\n\n- `Activate` (default) - Use this value if you are creating the stored credential profile after receiving the customer's consent.\n\n  Zuora will create the stored credential profile then send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile. If the CIT succeeds, the status of the stored credential profile will be `Active`. If the CIT does not succeed, Zuora will not create a stored credential profile.\n  \n  If the payment gateway does not support the stored credential transaction framework, the status of the stored credential profile will be `Agreed`.\n\n\n- `Persist` - Use this value if the stored credential profile represents a stored credential profile in an external system. The status of the payment method's stored credential profile will be `Active`.\n",
      "enum": [
        "Activate",
        "Persist"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "agreedOn",
      "label": "Agreed On",
      "type": "date",
      "required": false,
      "description": "The date on which the profile is agreed. The date format is `yyyy-mm-dd`.\n",
      "section": "Additional Fields"
    },
    {
      "name": "cardSecurityCode",
      "label": "Card Security Code",
      "type": "string",
      "required": false,
      "description": "The security code of the credit card.\n",
      "section": "Additional Fields"
    },
    {
      "name": "consentAgreementRef",
      "label": "Consent Agreement Ref",
      "type": "string",
      "required": false,
      "description": "Specifies your reference for the consent agreement that you have established with the customer.\n",
      "maxLength": 128,
      "section": "Additional Fields"
    },
    {
      "name": "consentAgreementSrc",
      "label": "Consent Agreement Src",
      "type": "string",
      "required": true,
      "description": "Specifies how the consent agreement has been established with the customer. The allowed value is `External`.\n",
      "enum": [
        "External"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "networkTransactionId",
      "label": "Network Transaction Id",
      "type": "string",
      "required": false,
      "description": "The ID of a network transaction. Only applicable if you set the `action` field to `Persist`.\n",
      "maxLength": 128,
      "section": "Additional Fields"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "string",
      "required": true,
      "description": "Specifies the status of the stored credential profile.\n\n- `Active` - Use this value if you are creating the stored credential profile after receiving the customer's consent, or if the stored credential profile represents a stored credential profile in an external system.\n\n  You can use the `action` field to specify how Zuora activates the stored credential profile.\n\n\n- `Agreed` - Use this value if you are migrating the payment method to the stored credential transaction framework.\n\n  In this case, Zuora will not send a cardholder-initiated transaction (CIT) to the payment gateway to validate the stored credential profile.\n",
      "enum": [
        "Agreed",
        "Active"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "type",
      "label": "Type",
      "type": "string",
      "required": true,
      "description": "Indicates the type of the stored credential profile to process recurring or unsecheduled transactions.\n",
      "enum": [
        "Recurring",
        "Unscheduled"
      ],
      "section": "Additional Fields"
    },
    {
      "name": "authGateway",
      "label": "Auth Gateway",
      "type": "string",
      "required": false,
      "description": "Specifies the ID of the payment gateway that Zuora will use when activating the stored credential profile.\n",
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
