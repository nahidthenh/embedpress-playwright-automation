const { test, expect } = require('@playwright/test');

test('Embed Elementor Sway source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/el-sway/');
    await expect(page.locator('iframe[title="The Universe"]').contentFrame().getByRole('paragraph').filter({ hasText: 'A cheat sheet for what’s' })).toBeVisible();
});

// As now we only have embed support this source 