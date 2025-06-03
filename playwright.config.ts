// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { outputFolder: 'test-output/report', open: 'never' }]],
  use: {
    screenshot: 'on',
    trace: 'on',
    video: 'retain-on-failure',
    headless: true, // usually headless in Docker
  },
});
// This configuration sets up Playwright to run tests in the 'tests' directory, and generates a report in the 'test-output/report' directory.