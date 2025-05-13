const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Overflow source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gu-overflow/');
      await expect(page.locator('.embera-embed-responsive')).toBeVisible();
   
});

// As now we only have embed support for MeetUp

