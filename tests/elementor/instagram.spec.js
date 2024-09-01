const { test, expect } = require('@playwright/test');

let slug = 'elementor-instagram';


test.describe("Elementor Instagram Feed", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('User Account Business Type', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'User Account Business Type' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.locator('#ep-elements-id-4337908').getByRole('banner')).toBeVisible();
        await expect(page.locator('#ep-elements-id-4337908').getByRole('img', { name: 'Md. Nahid Hasan' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-4337908').getByRole('link', { name: 'nahidthenh55' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-4337908').getByRole('link', { name: 'Follow Me' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-4337908').getByRole('link', { name: '520k followers' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-4337908').getByText('Md. Nahid Hasan')).toBeVisible();
        await expect(page.locator('.posts-tab-options').first()).toBeVisible();
        await page.locator('#ep-elements-id-4337908').getByText('Reels').click();
        await page.locator('#ep-elements-id-4337908').getByText('Album').click();
        await page.locator('#ep-elements-id-4337908').getByText('Posts', { exact: true }).click();
        await page.locator('.insta-gallery-image').first().click();
        await page.waitForTimeout(2000);
        await expect(page.getByText('nahidthenh55 Follow', { exact: true })).toBeVisible();
        await expect(page.getByRole('img', { name: 'Post 1: “The Future of' })).toBeVisible();
        await page.locator('#ep-elements-id-4337908').getByText('✕').click();
        await page.waitForTimeout(2000);
        await page.locator('.insta-gallery-image').first().hover();
        await expect(page.locator('.insta-gallery-item-likes').first()).toBeVisible();
        await expect(page.locator('.insta-gallery-item-comments').first()).toBeVisible();
    });

    test('Hashtag', async ({ page }) => {
        const heading = page.getByRole('heading', { name: '#Hashtag' });
        await heading.scrollIntoViewIfNeeded()
        await expect(heading).toBeVisible();

        await expect(page.getByText('#parentingtips Follow Me')).toBeVisible();
        await expect(page.getByRole('link', { name: '#parentingtips' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-0682a59').getByRole('link', { name: 'Follow Me' })).toBeVisible();
        await expect(page.locator('[id="\\30 682a59"] > .ose-instagram-feed > .posts-tab-options')).toBeVisible();
    });
    // test('Hashtag', async ({ page }) => { });
});