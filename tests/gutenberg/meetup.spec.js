const { test, expect } = require('@playwright/test');

test('Embed Gutenberg MeetUp source', async ({ page }) => {
    await page.goto('playwright-gutenberg/gutenberg-meetup/');
    await expect(page.locator('div').filter({ hasText: /^Details$/ })).toBeVisible();
});

// As now we only have embed support for MeetUp

