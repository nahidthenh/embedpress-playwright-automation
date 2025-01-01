const fs = require('fs');
const axios = require('axios');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

async function sendSlackReport() {
    const resultsPath = './test-results.json';
    if (!fs.existsSync(resultsPath)) {
        console.error("Test results file not found.");
        return;
    }

    const data = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));

    const summary = {
        passed: data.suites.reduce((acc, suite) => acc + suite.tests.filter(t => t.status === 'passed').length, 0),
        failed: data.suites.reduce((acc, suite) => acc + suite.tests.filter(t => t.status === 'failed').length, 0),
        flaky: data.suites.reduce((acc, suite) => acc + suite.tests.filter(t => t.status === 'flaky').length, 0),
        skipped: data.suites.reduce((acc, suite) => acc + suite.tests.filter(t => t.status === 'skipped').length, 0),
    };

    const message = {
        text: `*Playwright Test Run Summary*\n
        - Passed: ${summary.passed}\n
        - Failed: ${summary.failed}\n
        - Flaky: ${summary.flaky}\n
        - Skipped: ${summary.skipped}`,
    };

    try {
        await axios.post(SLACK_WEBHOOK_URL, message);
        console.log("Slack report sent successfully!");
    } catch (error) {
        console.error("Failed to send report to Slack:", error);
    }
}

sendSlackReport();
