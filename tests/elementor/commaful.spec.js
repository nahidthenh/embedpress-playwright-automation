const { test, expect } = require('@playwright/test');

test('Embed Elementor Commaful source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/el-commaful/');
    await expect(page.locator('iframe').contentFrame().locator('div:nth-child(3)').first()).toBeVisible();
});

// As now we only have embed support 