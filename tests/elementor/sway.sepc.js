const { test, expect } = require('@playwright/test');

test('Embed Elementor Sway source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/el-sway/');
});

// As now we only have embed support this source 