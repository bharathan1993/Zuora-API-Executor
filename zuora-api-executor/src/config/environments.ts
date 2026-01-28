import type { Environment } from '../types/api';

export const zuoraEnvironments: Environment[] = [
  {
    id: 'us-sandbox-test-drive',
    name: 'US Developer & Central Sandbox (incl. Test Drive)',
    baseUrl: 'https://rest.test.zuora.com',
    description: 'US Test Drive environment',
  },
  {
    id: 'us-sandbox-cloud-1',
    name: 'US API Sandbox Cloud 1',
    baseUrl: 'https://rest.sandbox.na.zuora.com',
    description: 'US Sandbox Cloud 1',
  },
  {
    id: 'us-sandbox-cloud-2',
    name: 'US API Sandbox Cloud 2',
    baseUrl: 'https://rest.apisandbox.zuora.com',
    description: 'US Sandbox Cloud 2',
  },
  {
    id: 'us-production-cloud-1',
    name: 'US Production Cloud 1',
    baseUrl: 'https://rest.na.zuora.com',
    description: 'US Production Cloud 1',
  },
  {
    id: 'us-production-cloud-2',
    name: 'US Production Cloud 2',
    baseUrl: 'https://rest.zuora.com',
    description: 'US Production Cloud 2',
  },
  {
    id: 'eu-sandbox',
    name: 'EU Developer & Central Sandbox',
    baseUrl: 'https://rest.test.eu.zuora.com',
    description: 'EU Sandbox',
  },
  {
    id: 'eu-api-sandbox',
    name: 'EU API Sandbox',
    baseUrl: 'https://rest.sandbox.eu.zuora.com',
    description: 'EU API Sandbox',
  },
  {
    id: 'eu-production',
    name: 'EU Production',
    baseUrl: 'https://rest.eu.zuora.com',
    description: 'EU Production',
  },
  {
    id: 'apac-sandbox',
    name: 'APAC Developer & Central Sandbox',
    baseUrl: 'https://rest.test.ap.zuora.com',
    description: 'APAC Sandbox',
  },
  {
    id: 'apac-production',
    name: 'APAC Production',
    baseUrl: 'https://rest.ap.zuora.com',
    description: 'APAC Production',
  },
];
