const { test, expect } = require('@playwright/test');

test('Embed Elementor Voxsnap source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/el-voxsnap/');
});
// As now we only have embed support for Tumblr