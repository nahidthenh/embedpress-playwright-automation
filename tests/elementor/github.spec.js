const { test, expect } = require('@playwright/test');

const slug = 'elementor-github-gist';

test('Elementor GitHub Gist', async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole('heading', { name: 'Elementor GitHub Gist' })).toBeVisible();
    await expect(page.locator('.entry-content-wrap')).toBeVisible();
    await expect(page.getByRole('cell', { name: 'const { test, expect } =' })).toBeVisible();
});