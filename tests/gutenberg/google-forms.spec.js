const { test, expect } = require('@playwright/test');

const slug = 'playwright-gutenberg/gutenberg-google-forms/';

test.describe("Gutenberg Google Forms", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await page.waitForLoadState('networkidle');
    });

    test('Gutenberg Google Forms', async ({ page }) => {
        // Check iframe visibility        
        await expect(page.getByRole('heading', { name: 'Google Forms 1140×' })).toBeVisible();
        // Check iframe visibility
        const iframe = page.locator('iframe').contentFrame().locator('div').filter({ hasText: 'Contact information* প্রয়োজনীয় প্রশ্ন নির্দেশ করেName *আপনার উত্তরEmail' }).first()
        await expect(iframe).toBeVisible();

        // Check dimensions height & width
        const { height, width } = await iframe.evaluate(iframe => iframe.getBoundingClientRect());
        expect(height).toBeCloseTo(1296.703125, 1);
        expect(width).toBeCloseTo(1140, 1);
    });
});
