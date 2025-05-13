const { test, expect } = require('@playwright/test');

test('Embed Elementor mixcloud source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/el-mixcloud/');
    await expect(page.locator('iframe[title="Villain Iv \\(Halloween\\)"]').contentFrame().getByTestId('widget-cloudcast-image')).toBeVisible();
});

// As now we only have embed support

