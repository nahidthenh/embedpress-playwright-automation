const { test, expect } = require('@playwright/test');

test('Embed Classic NRK Radio source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/classic-nrk-radio/');
    await expect(page.locator('iframe')).toBeVisible();
});

// As now we only have embed support for NRK Radio

