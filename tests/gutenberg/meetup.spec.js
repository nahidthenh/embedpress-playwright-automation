const { test, expect } = require('@playwright/test');

test('Embed Gutenberg Gumroad source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/playwright-gutenberg/gutenberg-meetup/');
    await expect(page.getByRole('link', { name: 'Scrum Master product Owner' })).toBeVisible();
    await expect(page.locator('#ep-gutenberg-content-64fb49f3414eada2755e818947255be7').getByRole('article').locator('div').filter({ hasText: 'Hosted ByDhirender Verma S.' }).first()).toBeVisible();
    await expect(page.getByRole('img', { name: 'Scrum Master product Owner' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Details$/ })).toBeVisible();
});

// As now we only have embed support for Gumroad

