import type { ApiEndpoint } from '../../../types/api';
import { zuoraEnvironments } from '../../environments';

export const put_revproaccountingcodesEndpoint: ApiEndpoint = {
  "id": "put-revproaccountingcodes",
  "name": "Update a Zuora Revenue accounting code",
  "description": "Update the Zuora Revenue accounting code that corresponds to a specific Product Rate Plan Charge Id in Zuora Billing.",
  "method": "PUT",
  "path": "/v1/revpro-accounting-codes",
  "baseUrl": "https://rest.test.zuora.com",
  "environments": zuoraEnvironments,
  "requiresAuth": true,
  "authType": "bearer",
  "bodyFields": [
    {
      "name": "adjustmentLiabilityAccount",
      "label": "Adjustment Liability Account",
      "type": "string",
      "required": true,
      "description": "The name of the account where the Account Type is \"Adjustment Liability\".",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "adjustmentRevenueAccount",
      "label": "Adjustment Revenue Account",
      "type": "string",
      "required": true,
      "description": "The name of the account where the Account Type is \"Adjustment Revenue\".",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "contractAssetAccount",
      "label": "Contract Asset Account",
      "type": "string",
      "required": true,
      "description": "The name of the account where the Account Type is \"Contract Asset\".",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "contractLiabilityAccount",
      "label": "Contract Liability Account",
      "type": "string",
      "required": true,
      "description": "The name of the account where the Account Type is \"Contract Liability\".",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "recognizedRevenueAccount",
      "label": "Recognized Revenue Account",
      "type": "string",
      "required": true,
      "description": "The name of the account where the Account Type is \"Recognized Revenue\".",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "unbilledReceivablesAccount",
      "label": "Unbilled Receivables Account",
      "type": "string",
      "required": true,
      "description": "The name of the account where the Account Type is \"Unbilled Receivables\".",
      "maxLength": 100,
      "section": "Account Settings"
    },
    {
      "name": "productRatePlanChargeId",
      "label": "Product Rate Plan Charge Id",
      "type": "string",
      "required": true,
      "description": "The ID of your product rate plan charge.",
      "section": "Additional Fields"
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
