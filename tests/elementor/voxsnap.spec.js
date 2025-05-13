const { test, expect } = require('@playwright/test');

test('Embed Elementor Voxsnap source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/el-voxsnap/')
    await expect(page.locator('iframe').contentFrame().locator('.cnt_btn > .cnt_btn')).toBeVisible();
});
// As now we only have embed support for Tumblr