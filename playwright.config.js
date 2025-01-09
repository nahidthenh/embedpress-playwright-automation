const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    [
      './node_modules/playwright-slack-report/dist/src/SlackReporter.js',
      {
        slackWebHookUrl: process.env.SLACK_WEBHOOK_URL,
        sendResults: 'always',
        maxNumberOfFailuresToShow: 0,
        meta: [
          {
            key: ":embedpress: EmbedPress Automation - Test Results",
            value: "<https://nahidthenh.github.io/embedpress-playwright-automation/ | 📂 Click Here!>",
          }
        ]
      },
    ],
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // Ensure you have the HTML reporter as well
    ['dot'], // Console output reporter
  ],
  outputDir: 'test-results',
  timeout: 60000, // Increase default timeout to 60 seconds
  use: {
    baseURL: 'https://embedpress.qa1.site/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
