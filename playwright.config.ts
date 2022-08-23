import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000',
  },
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
  },
};

export default config;
