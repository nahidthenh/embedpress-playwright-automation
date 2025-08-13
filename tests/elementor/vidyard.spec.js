const { test, expect } = require('@playwright/test');

test('Embed Elementor vidyard source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/playwright-elementor/el-vidyard/');
    await expect(page.locator('iframe[title="Vidyard Recording"]').contentFrame().getByTestId('splashScreen')).toBeVisible();
});

// As now we only have embed support for this Source

