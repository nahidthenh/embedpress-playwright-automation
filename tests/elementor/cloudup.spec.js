const { test, expect } = require('@playwright/test');

test('Embed Elementor Cloudup source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/elementor-cloudup/');
    await expect(page.locator('iframe[title="Cloudup Video"]').contentFrame().getByText('The media could not be loaded')).toBeVisible();
});

// As now we only have embed support 