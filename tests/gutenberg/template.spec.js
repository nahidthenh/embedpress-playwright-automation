const { test, expect } = require('@playwright/test');

let slug = 'flip-book-pdf';

test.describe('Check for console errors', () => {
    test.beforeEach(async ({ page }) => {
        // Array to store console errors

        await page.goto(slug);

        //await page.waitForTimeout(10000)

        let consoleErrors = [];

        // Listen for all console logs
        page.on('console', msg => console.log(msg.text()));

        await page.goto(slug);
        // Listen for console messages
        page.on('console', message => {

            consoleErrors.push(message.text());
            consoleErrors.log(consoleErrors)

        });



        // If any console errors were captured, log them
        if (consoleErrors.length > 0) {
            console.log('Console Errors:', consoleErrors);
        } else {
            console.log('No console errors found.');
        }
    });

    test('Check if heading is visible', async ({ page }) => {

    });
});
