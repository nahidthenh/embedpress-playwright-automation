const { test, expect } = require('@playwright/test');

let slug = 'playwright-gutenberg/gutenberg-spotify';


test.describe("Gutenberg Spotify", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Custom Player Preset 1', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Custom Player Preset 1' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
    });

});