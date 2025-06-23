const { test, expect } = require('@playwright/test');

const slug = 'playwright-classic-editor/classic-google-photos/';

test.describe("Classic Google Forms", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await page.waitForLoadState('networkidle');
    });

    test('Classic Google Forms', async ({ page }) => {
        // Check iframe visibility        
        await expect(page.getByRole('heading', { name: 'Classic Google Photos' })).toBeVisible();

        // Check iframe visibility
        const iframe = page.locator('iframe').first()
        await expect(iframe).toBeVisible();

        // Check dimensions height & width
        const { height, width } = await iframe.evaluate(iframe => iframe.getBoundingClientRect());
        expect(height).toBeCloseTo(500, 1);
        expect(width).toBeCloseTo(500, 1);
    });
});
