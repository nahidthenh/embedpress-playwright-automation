const { test, expect } = require('@playwright/test');

test('Embed Classic Rumble source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/rumble-classic/');
    await expect(page.locator('iframe[title="Return Of The Rangers\\? - Game Notes - 01\\.24\\.25"]').contentFrame().getByRole('link', { name: 'Return Of The Rangers? - Game' })).toBeVisible();
    await expect(page.locator('iframe[title="Return Of The Rangers\\? - Game Notes - 01\\.24\\.25"]').contentFrame().locator('.bigPlayUIInner')).toBeVisible();
});
// As now we only have embed support for Rumble

