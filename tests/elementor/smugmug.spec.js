const { test, expect } = require('@playwright/test');

test('Embed Elementor smugmug source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/playwright-elementor/smugmug-elementor/');
    await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
});

// As now we only have embed support for this Source

