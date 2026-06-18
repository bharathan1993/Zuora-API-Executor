import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_emailcreditmemoEndpoint: ApiEndpoint = {
  "id": "post-emailcreditmemo",
  "name": "Email a credit memo",
  "description": "**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.",
  "method": "POST",
  "path": "/v1/credit-memos/{creditMemoKey}/emails",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "pathParams": [
    {
      "name": "creditMemoKey",
      "label": "Credit Memo Key",
      "type": "string",
      "required": true,
      "description": "The ID or number of a posted credit memo. For example, 8a8082e65b27f6c3015ba45ff82c7172 or CM00000001."
    }
  ],
  "bodyFields": [
    {
      "name": "emailAddresses",
      "label": "Email Addresses",
      "type": "string",
      "required": false,
      "description": "The valid email addresses you want to email a credit memo to. Use commas to separate email addresses. **Note:** This field is only applicable if you set the `useEmailTemplateSetting` field to `false`.",
      "section": "Communication Settings"
    },
    {
      "name": "includeAdditionalEmailAddresses",
      "label": "Include Additional Email Addresses",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to send a credit memo to the additional email addresses of the memo account. You can set the additional email addresses in the **Additional Email Addresses** field on the account detail page from the Zuora UI. See [Create a Customer Account](https://knowledgecenter.zuora.com/BC_Subscription_Management/Customer_Accounts/B_Create_a_Customer_Account#section_2) for more information.",
      "defaultValue": false,
      "enum": [
        "true",
        "false"
      ],
      "section": "Communication Settings"
    },
    {
      "name": "pdfFileId",
      "label": "Pdf File Id",
      "type": "string",
      "required": false,
      "description": "The ID of the PDF file that you want to send in the email. If you do not specify any PDF file ID, the latest PDF file generated for the credit memo is sent in the email.",
      "section": "Additional Fields"
    },
    {
      "name": "useEmailTemplateSetting",
      "label": "Use Email Template Setting",
      "type": "boolean",
      "required": false,
      "description": "Indicates whether to email a credit memo based on the email template setting. If you set this field to `true`, the credit memo is sent to the email addresses specified in the **To Email** field of the email template. The email template is the one you set in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. See [Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information about how to edit the **To Email** field in the email template.",
      "defaultValue": false,
      "enum": [
        "true",
        "false"
      ],
      "section": "Invoice & Document Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json",
    "Zuora-Track-Id": "",
    "Zuora-Entity-Ids": "",
    "Zuora-Org-Ids": "",
    "Zuora-Version": ""
  }
};
