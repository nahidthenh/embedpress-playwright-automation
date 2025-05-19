const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Smash Notes source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-smash-notes/');
    await expect(page.locator('#ep-gutenberg-content-bc584662347acbead11f4f0053d97312 iframe').contentFrame().getByText('Pocket Casts PlusGet the')).toBeVisible();
    await expect(page.locator('iframe[title="The Good Whale - Ep\\. 6 - Serial"]').contentFrame().getByText('S13 E6 February 27, 2025 The Good Whale - Ep. 6 Serial 0:00 36:')).toBeVisible();
});

// As now we only have embed support for this Source
