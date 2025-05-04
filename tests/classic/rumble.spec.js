const { test, expect } = require('@playwright/test');

test('Embed Classic Rumble source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/rumble-classic/');
    await expect(page.locator('iframe[title="Private Tour of the World\\&apos\\;s Largest Pond Facility"]').contentFrame().locator('div').filter({ hasText: /^Private Tour of the World's Largest Pond Facility$/ })).toBeVisible();
    await expect(page.locator('iframe[title="Private Tour of the World\\&apos\\;s Largest Pond Facility"]').contentFrame().locator('div').filter({ hasText: /^Private Tour of the World's Largest Pond Facility$/ }).locator('div')).toBeVisible();
    await expect(page.locator('iframe[title="Private Tour of the World\\&apos\\;s Largest Pond Facility"]').contentFrame().getByRole('link', { name: 'Private Tour of the World\'s' })).toBeVisible();
});
// As now we only have embed support for Rumble

