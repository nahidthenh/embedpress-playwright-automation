const { test } = require('@playwright/test');

test.describe('Check for console errors', () => {

    // https://www.checklyhq.com/blog/how-to-monitor-javascript-logs-and-exceptions-with-playwright/

    test('Localhost error logging', async ({ page }) => {
        const logs = [];
        const errors = [];
        const exceptions = [];

        // Capture all console logs
        page.on('console', msg => {
            logs.push({ msg: msg.text(), type: msg.type() });
        });

        // Capture only console errors
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(`Error message: ${msg.text()}`);
            }
        });

        // Capture uncaught exceptions with more details
        page.on('pageerror', exception => {
            const errorMessage = exception.message;
            const errorType = errorMessage.includes('TypeError') ? 'Uncaught TypeError' : 'Uncaught Error';
            exceptions.push({ message: errorMessage, type: errorType });
        });

        // Navigate to the page
        await page.goto('https://embedpress.qcheck.site/playwright-gutenberg/google-docs-gutenberg/');

        // Output logs, errors, and exceptions
        console.log('Exceptions:', exceptions);
        console.log('Errors:', errors);
        console.log('Logs:', logs);
    });




});
