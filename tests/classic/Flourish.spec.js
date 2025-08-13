const { test, expect } = require('@playwright/test');

test('Embed Classic Flourish source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/playwright-classic-editor/classic-flourish/');
    await expect(page.locator('iframe[title="Interactive or visual content"]').contentFrame().locator('iframe').contentFrame().getByRole('region', { name: 'primary visualisation' }).locator('rect')).toBeVisible();
});
// As now we only have embed support for Flourish

