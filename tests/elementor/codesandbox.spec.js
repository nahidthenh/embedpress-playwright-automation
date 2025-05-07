const { test, expect } = require('@playwright/test');

test('Embed Elementor Canva source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/el-codesandbox/');
    await expect(page.locator('iframe')).toBeVisible();
});

// As now we only have embed support 