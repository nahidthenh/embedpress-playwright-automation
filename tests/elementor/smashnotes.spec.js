const { test, expect } = require('@playwright/test');

test('Embed Elementor Smash Notes source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-elementor/el-smash-notes/');
    await expect(page.locator('iframe[title="The Good Whale - Ep\\. 6 - Serial"]').contentFrame().getByText('S13 E6 February 27, 2025 The Good Whale - Ep. 6 Serial 0:00 36:')).toBeVisible();
    await expect(page.locator('iframe').nth(1).contentFrame().getByText('Serial·S13 E6The Good Whale')).toBeVisible();
});

// As now we only have embed support for this Source

