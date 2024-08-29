const { test, expect } = require('@playwright/test');

let slug = 'flip-book-pdf';

test.describe('Check for console errors', () => {
    // test.beforeEach(async ({ page }) => {


    // });

    test('Check if heading is visible', async ({ page }) => {
        // Error Finding 

        const logs = []

        page.on('console', (message) => {
            logs.push({ message, type: message.type() })
        })

        const errors = []

        page.on('console', msg => {
            if (msg.type() === 'error')
                errors.push(`Error text: "${msg.text()}"`);
        });

        await page.goto(slug);

        console.log(logs)

        console.log(errors)
    });
});
