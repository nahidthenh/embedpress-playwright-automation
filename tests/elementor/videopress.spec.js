const { test, expect } = require('@playwright/test');

test('Embed Elementor VideoPress source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/el-videopress/');
});

// As now we only have embed support 