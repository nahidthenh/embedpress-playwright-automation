const fs = require('fs');
const resultsFile = 'test-results.json';
const summaryFile = process.env.GITHUB_STEP_SUMMARY;

if (fs.existsSync(resultsFile)) {
    const results = JSON.parse(fs.readFileSync(resultsFile, 'utf-8'));
    const total = results.suites.reduce((sum, suite) => sum + suite.tests.length, 0);
    const passed = results.suites.reduce((sum, suite) => sum + suite.tests.filter(t => t.status === 'passed').length, 0);
    const failed = results.suites.reduce((sum, suite) => sum + suite.tests.filter(t => t.status === 'failed').length, 0);

    const summary = `
  ### Test Summary
  - **Total Tests:** ${total}
  - **Passed:** ${passed}
  - **Failed:** ${failed}
  `;

    fs.writeFileSync(summaryFile, summary, 'utf-8');
} else {
    fs.writeFileSync(summaryFile, 'No test results found.', 'utf-8');
}
