const { test, expect } = require('@playwright/test');

let slug = 'flip-book-pdf';

test.describe('Check for console errors', () => {
    test.beforeEach(async ({ page }) => {
        // Array to store console errors
        const consoleErrors = [];

        // Listen for console messages
        page.on('console', message => {
            if (message.type() === 'error') {
                consoleErrors.push(message.text());
            }
        });

        await page.goto(slug);

        // If any console errors were captured, log them
        if (consoleErrors.length > 0) {
            console.log('Console Errors:', consoleErrors);
        } else {
            console.log('No console errors found.');
        }
    });

    test('Check if heading is visible', async ({ page }) => {
        const heading = page.getByRole('heading', { name: '' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
    });
});
