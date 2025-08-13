const { test, expect } = require('@playwright/test');

test('Embed Elementor Edumedia source', async ({ page }) => {
    await page.goto('https://ep-automation.wpqa.site/elementor-edumedia/');
    await expect(page.locator('iframe')).toBeVisible();
});

// As now we only have embed support 