const { test, expect } = require('@playwright/test');

let slug = '';


test.describe('', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('', async ({ page }) => {
        const heading = page.getByRole('heading', { name: '' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
    });
});