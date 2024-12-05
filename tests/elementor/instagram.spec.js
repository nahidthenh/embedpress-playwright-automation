const { test, expect } = require('@playwright/test');

let slug = 'elementor-instagram';


test.describe("Elementor Instagram Feed", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Default Instagram', async ({ page }) => {
        const heading = page.getByRole('heading', {name: 'Default Instagram' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.locator('#ep-elements-id-935ddfc').getByRole('banner')).toBeVisible();
        await expect(page.locator('#ep-elements-id-935ddfc').getByRole('img', { name: 'Md. Nahid Hasan' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-935ddfc').getByRole('link', { name: 'nahidwpd' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-935ddfc').getByRole('link', { name: 'Follow' })).toBeVisible();
        await expect(page.locator('.posts-tab-options').first()).toBeVisible();
        await page.locator('#ep-elements-id-935ddfc').getByText('Reels').click();
        await page.locator('#ep-elements-id-935ddfc').getByText('Album').click();
        await page.locator('#ep-elements-id-935ddfc').getByText('Posts', { exact: true }).click();
        await page.locator('.insta-gallery-image').first().click();
        await page.waitForTimeout(500);
        await page.locator('#ep-elements-id-935ddfc').getByText('✕').click();
    });

    
});