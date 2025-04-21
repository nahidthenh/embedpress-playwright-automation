const { test, expect } = require('@playwright/test');

const slug = 'playwright-gutenberg/gutenberg-google-slides/';

test.describe("Gutenberg Google Slides", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await page.waitForLoadState('networkidle');
    });

    test('Gutenberg Google Slides', async ({ page }) => {
        // Check iframe visibility        
        await expect(page.getByRole('heading', { name: 'Gutenberg Google Slides' })).toBeVisible();

        // Check iframe visibility
        const iframe = page.locator('iframe').contentFrame().locator('.punch-viewer-container');
        await expect(iframe).toBeVisible();

        // Check dimensions height & width
        const { height, width } = await iframe.evaluate(iframe => iframe.getBoundingClientRect());
        expect(height).toBeCloseTo(800, 1);
        expect(width).toBeCloseTo(1140, 1);
    });
});
