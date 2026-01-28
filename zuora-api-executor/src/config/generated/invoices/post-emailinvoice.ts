import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_emailinvoiceEndpoint: ApiEndpoint = {
  "id": "post-emailinvoice",
  "name": "Email an invoice",
  "description": "Sends a posted invoice to the specified email addresses manually.",
  "method": "POST",
  "path": "/v1/invoices/{invoiceKey}/emails",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "invoiceKey",
      "label": "Invoice Key",
      "type": "string",
      "required": true,
      "description": "Path parameter: invoiceKey",
      "placeholder": "Enter invoice key"
    }
  ],
  "bodyFields": [
    {
      "name": "emailAddresses",
      "label": "Email Addresses",
      "type": "string",
      "required": false,
      "description": "The valid email addresses you want to email an invoice to. Use commas to separate email addresses.\n**Note:** This field is only applicable if you set the `useEmailTemplateSetting` field to `false`.\n",
      "section": "Communication Settings"
    },
    {
      "name": "includeAdditionalEmailAddresses",
      "label": "Include Additional Email Addresses",
      "type": "boolean",
      "required": false,
      "description": "Whether to send an invoice to the additional email addresses of the invoice account. \nYou can set the additional email addresses in the **Additional Email Addresses** field on the account detail page from the Zuora UI. See [Create a Customer Account](https://knowledgecenter.zuora.com/BC_Subscription_Management/Customer_Accounts/B_Create_a_Customer_Account#section_2) for more information.\n",
      "defaultValue": false,
      "enum": [
        true,
        false
      ],
      "section": "Communication Settings"
    },
    {
      "name": "useEmailTemplateSetting",
      "label": "Use Email Template Setting",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to email an invoice based on the email template setting. \nIf you set this field to `true`, the invoice is sent to the email addresses specified in the **To Email** field of the email template. The email template is the one you set in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. See [Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information about how to edit the **To Email** field in the email template.\n",
      "defaultValue": false,
      "enum": [
        true,
        false
      ],
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
