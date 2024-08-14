const { test, expect } = require('@playwright/test');

let slug = 'playwright-classic-editor/classic-spotify';


test.describe('Classic Spotify', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Spotify Single', async ({ page }) => {
        const heading = page.getByRole('heading', { name: '' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        
    });
});