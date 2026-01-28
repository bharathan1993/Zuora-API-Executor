import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const post_rsasignaturesEndpoint: ApiEndpoint = {
  "id": "post-rsasignatures",
  "name": "Generate an RSA signature",
  "description": "The REST API used in Payment Pages 2.0 are CORS (Cross-Origin Resource Sharing) enabled and therefore requires a digital signature. The POST rsa_signatures call generates and returns the required digital signature and token for a Payment Pages 2.0 form. You need to pass the generated signature to your client for it to access Payment Pages 2.0. ",
  "method": "POST",
  "path": "/v1/rsa-signatures",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "IBAN",
      "label": "I B A N",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "authorizationAmount",
      "label": "Authorization Amount",
      "type": "number",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "bankBranchCode",
      "label": "Bank Branch Code",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "bankCheckDigit",
      "label": "Bank Check Digit",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "bankCity",
      "label": "Bank City",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "bankPostalCode",
      "label": "Bank Postal Code",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "businessIdentificationCode",
      "label": "Business Identification Code",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "cityBlackList",
      "label": "City Black List",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for credit cards. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "cityWhiteList",
      "label": "City White List",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for credit cards. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "deviceSessionId",
      "label": "Device Session Id",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "id",
      "label": "Id",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "key",
      "label": "Key",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "locale",
      "label": "Locale",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "method",
      "label": "Method",
      "type": "string",
      "required": true,
      "description": "The type of the request. Set it to POST.\n",
      "section": "Additional Fields"
    },
    {
      "name": "pageId",
      "label": "Page Id",
      "type": "string",
      "required": true,
      "description": "The page id of your Payment Pages 2.0 form. Click **Show Page Id** next to the Payment Page name in the Hosted Page List to retrieve the page id.\n",
      "section": "Additional Fields"
    },
    {
      "name": "param_gwOptions_[*option*]",
      "label": "Param Gw Options [*option*]",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "param_supportedTypes",
      "label": "Param Supported Types",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for credit cards. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "passthrough[1,2,3,4,5]",
      "label": "Passthrough[1,2,3,4,5]",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n\nNote: Although up to 15 passthrough parameters can be supported when passing in your client parameters, only the first 5 parameters are used for signature generation and validation.\n",
      "section": "Additional Fields"
    },
    {
      "name": "pmId",
      "label": "Pm Id",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for credit cards. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "signature",
      "label": "Signature",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "signatureType",
      "label": "Signature Type",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "style",
      "label": "Style",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "submitEnabled",
      "label": "Submit Enabled",
      "type": "boolean",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "tenantId",
      "label": "Tenant Id",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "uri",
      "label": "Uri",
      "type": "string",
      "required": true,
      "description": "The URL that the Payment Page will be served from.\n* For US Cloud 1 Production environment: Use https://na.zuora.com/apps/PublicHostedPageLite.do\n* For US Cloud 1 Sandbox environment: Use https://sandbox.na.zuora.com/apps/PublicHostedPageLite.do\n* For US Cloud 2 Production environment: Use https://www.zuora.com/apps/PublicHostedPageLite.do\n* For US Cloud 2 API Sandbox environment: Use https://apisandbox.zuora.com/apps/PublicHostedPageLite.do\n* For US Central Sandbox environment: Use https://test.zuora.com/apps/PublicHostedPageLite.do\n* For EU Cloud Production environment: Use https://eu.zuora.com/apps/PublicHostedPageLite.do\n* For EU Cloud Sandbox environment: Use https://sandbox.eu.zuora.com/apps/PublicHostedPageLite.do\n* For EU Central Sandbox environment: Use https://test.eu.zuora.com/apps/PublicHostedPageLite.do\n",
      "section": "Additional Fields"
    },
    {
      "name": "useDefaultRetryRule",
      "label": "Use Default Retry Rule",
      "type": "boolean",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Additional Fields"
    },
    {
      "name": "accountId",
      "label": "Account Id",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Account Settings"
    },
    {
      "name": "bankStreetName",
      "label": "Bank Street Name",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Account Settings"
    },
    {
      "name": "bankStreetNumber",
      "label": "Bank Street Number",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters specific for Bank Transfer - Direct Debit. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Account Settings"
    },
    {
      "name": "gatewayName",
      "label": "Gateway Name",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Account Settings"
    },
    {
      "name": "maxConsecutivePaymentFailures",
      "label": "Max Consecutive Payment Failures",
      "type": "number",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentGateway",
      "label": "Payment Gateway",
      "type": "string",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Payment Settings"
    },
    {
      "name": "paymentRetryWindow",
      "label": "Payment Retry Window",
      "type": "number",
      "required": false,
      "description": "An optional client parameter that can be used for validating client-side HPM parameters. \nSee [Client parameters for Payment Pages 2.0](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/J_Client_Parameters_for_Payment_Pages_2.0) \nand [Validate client-side HPM parameters](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/F_Generate_the_Digital_Signature_for_Payment_Pages_2.0#Validate_Client-side_HPM_Parameters) \nfor details.\n",
      "section": "Payment Settings"
    }
  ],
  "headers": {
    "Content-Type": "application/json"
  }
};
