const { test, expect } = require('@playwright/test');

let slug = 'flip-book-pdf';

test.describe('Check for console errors', () => {
    // test.beforeEach(async ({ page }) => {


    // });
    // https://www.checklyhq.com/blog/how-to-monitor-javascript-logs-and-exceptions-with-playwright/

    test('Localhost error logging', async ({ page }) => {
        const logs = []
        // Listen for all console logs
        page.on('console', msg => { logs.push({ msg, type: msg.type() }) });
        // Listen for all console events and handle errors
        await page.goto('slug');
        console.log(logs);
    })
  
});
