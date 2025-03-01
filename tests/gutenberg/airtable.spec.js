const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Airtable source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/gutenberg-airtable/');
    await expect(page.locator('iframe').contentFrame().locator('.dataRightPane')).toBeVisible();
});
// As now we only have embed support for Airtable