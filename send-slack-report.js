const fs = require('fs');
const axios = require('axios');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

async function sendSlackReport() {
    const resultsPath = './test-results.json'; // Ensure this matches the workflow
    if (!fs.existsSync(resultsPath)) {
        console.error("Test results file not found.");
        return;
    }

    const data = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));

    const summary = {
        passed: 0,
        failed: 0,
        flaky: 0,
        skipped: 0,
    };

    if (data.suites && Array.isArray(data.suites)) {
        for (const suite of data.suites) {
            for (const test of suite.tests || []) {
                if (test.status === 'passed') summary.passed++;
                else if (test.status === 'failed') summary.failed++;
                else if (test.status === 'flaky') summary.flaky++;
                else if (test.status === 'skipped') summary.skipped++;
            }
        }
    }

    const message = {
        text: `*:embedpress: Automation Report *\n
       :done: - Passed: ${summary.passed}\n
       :x: - Failed: ${summary.failed}\n
       :large_yellow_circle: - Flaky: ${summary.flaky}\n
       :skip: - Skipped: ${summary.skipped}`,
    };

    try {
        await axios.post(SLACK_WEBHOOK_URL, message);
        console.log("Slack report sent successfully!");
    } catch (error) {
        console.error("Failed to send report to Slack:", error.response ? error.response.data : error.message);
    }
}

sendSlackReport();