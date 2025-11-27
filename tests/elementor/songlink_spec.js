const { test, expect } = require('@playwright/test');

test('Embed Elementor Songlink source', async ({ page }) => {
    await page.goto('https://ep-automation.obayedmamur.com/playwright-elementor/el-songlink/');
});

// As now we only have embed support for this Source

