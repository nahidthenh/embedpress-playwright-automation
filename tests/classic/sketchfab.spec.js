const { test, expect } = require('@playwright/test');

test('Embed Classic sketchfab source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/cl-sketchfab/') 
    await expect(page.locator('iframe[title="Short-beaked Common Dolphin"]').contentFrame().locator('img').nth(1)).toBeVisible();

    });