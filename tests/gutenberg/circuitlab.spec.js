const { test, expect } = require('@playwright/test');

test('Embed Gutenberg CircuitLab source', async ({ page }) => {
    await page.goto('https://embedpress.wpqa.site/gutenberg-circuitlab/');
    await expect(page.locator('iframe[title="Welcome to CircuitLab"]').contentFrame().getByRole('link', { name: 'Welcome to CircuitLab' })).toBeVisible();
});

// As now we only have embed support 