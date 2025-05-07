const { test, expect } = require('@playwright/test');

test('Embed Elementor Streamable source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/el-streamable/');
    await expect(page.locator('iframe[title="I am Napoleon\\. I am Emperor x Rammstein - Sonne \\(slowed\\) - jez \\(144p\\, h264\\)"]').contentFrame().locator('div').filter({ hasText: /^Watch againStream will resume when your device's connection improves$/ }).first()).toBeVisible();
});

// As now we only have embed support 