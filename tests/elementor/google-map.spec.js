const { test, expect } = require('@playwright/test');

const slug = 'playwright-elementor/elementor-google-map';

test.describe("Elementor Google Map", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await page.waitForLoadState('networkidle');
    });

    test('Validates iframe dimensions and visibility', async ({ page }) => {
        // Check heading visibility
        await expect(page.getByRole('heading', { name: 'Google Map - Full Height -' })).toBeVisible();

        // Check iframe visibility
        const iframe = page.locator('iframe');
        await expect(iframe).toBeVisible();

        // Check dimensions
        const { height, width } = await iframe.evaluate(iframe => iframe.getBoundingClientRect());
        expect(height).toBeCloseTo(630, 1);
        expect(width).toBeCloseTo(760, 1);
    });
});
