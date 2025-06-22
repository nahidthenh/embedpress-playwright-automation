const { test, expect } = require('@playwright/test');

test('Embed Gutenberg TVCF source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gutenberg-tvcf/');
    await expect(page.locator('iframe').contentFrame().getByText('No compatible source was')).toBeVisible();
});
// As now we only have embed support 

