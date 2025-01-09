const { defineConfig, devices } = require('@playwright/test');
require('dotenv').config();

const isCI = !!process.env.CI; // Check if the CI environment variable is set

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 3 : 1,
  workers: isCI ? 4 : 4,
  reporter: [
    ...(isCI
      ? [
        [
          './node_modules/playwright-slack-report/dist/src/SlackReporter.js',
          {
            slackWebHookUrl: process.env.SLACK_WEBHOOK_URL,
            sendResults: 'always',
            maxNumberOfFailuresToShow: 0,
            meta: [
              {
                key: ":embedpress: EmbedPress Automation - Test Results",
                value:
                  "<https://nahidthenh.github.io/embedpress-playwright-automation/ | :desktop_computer: Final Report!>",
              },
            ],
          },
        ],
      ]
      : []),
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // Ensure you have the HTML reporter as well
    ['dot'], // Console output reporter
  ],
  outputDir: 'test-results',
  use: {
    baseURL: 'https://embedpress.qa1.site/',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
