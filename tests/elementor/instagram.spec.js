const { test, expect } = require('@playwright/test');

let slug = 'elementor-instagram';


test.describe("Elementor Instagram Feed", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Default Instagram', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Default Instagram' });
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

    test('User Account Pro Features Masonry Layout', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'User Account Pro Features Masonry Layout' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.locator('#ep-elements-id-a2d6ab2').getByRole('banner')).toBeVisible();
        await expect(page.locator('#ep-elements-id-a2d6ab2').getByRole('img', { name: 'Md. Nahid Hasan' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-a2d6ab2').getByRole('link', { name: 'nahidwpd' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-a2d6ab2').getByRole('link', { name: 'Please Follow' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-a2d6ab2').getByText('Reels')).toBeHidden({ message: 'Reels tab should not be visible' });
        await expect(page.locator('#ep-elements-id-a2d6ab2').getByText('Album')).toBeHidden({ message: 'Album tab should not be visible' });
        await expect(page.locator('#ep-elements-id-a2d6ab2').getByText('Posts', { exact: true })).toBeHidden({ message: 'Posts tab should not be visible' });
        await page.locator('.insta-gallery-image').first().click();
        await page.waitForTimeout(500);
        await page.locator('.popup-close').first().click();
    });

    test('Business Account Pro Features Masonry Layout', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Business Account Pro Features Masonry Layout' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        const sectionLocator = page.locator("div#a67a350 div.ose-instagram-feed div.instagram-container div.embedpress-insta-container div.insta-gallery div.insta-gallery-item").first();
        const popupLocator = page.locator("div#a67a350 div.ose-instagram-feed div.instagram-container div.insta-popup");

        await expect(page.locator('#ep-elements-id-a67a350').getByRole('banner')).toBeVisible();
        await expect(page.locator('#ep-elements-id-a67a350').getByRole('img', { name: 'Md. Nahid Hasan' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-a67a350').getByRole('link', { name: 'nahidwpd' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-a67a350').getByRole('link', { name: 'Please Follow' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-a67a350').getByRole('link', { name: '0 followers' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-a67a350').getByText('Md. Nahid Hasan')).toBeVisible();
        await expect(page.locator('#ep-elements-id-a67a350').getByText('Reels')).toBeVisible();
        await expect(page.locator('#ep-elements-id-a67a350').getByText('Album')).toBeVisible();
        await expect(page.locator('#ep-elements-id-a67a350').getByText('Posts', { exact: true })).toBeVisible();

        await page.waitForTimeout(2000);
        await sectionLocator.waitFor();
        await sectionLocator.hover();
        await sectionLocator.locator('.insta-gallery-item-info').click();

        await popupLocator.getByText('✕').waitFor();
        await popupLocator.getByText('✕').click();

        // Remove the previous hover action
        await heading.click();
        await page.waitForTimeout(500);
        await expect(sectionLocator.locator('.insta-gallery-item-info').locator('.insta-gallery-item-likes')).not.toBeVisible();
        await expect(sectionLocator.locator('.insta-gallery-item-info').locator('.insta-gallery-item-comments')).not.toBeVisible();

        await sectionLocator.hover();
        await page.waitForTimeout(500);
        await expect(sectionLocator.locator('.insta-gallery-item-info').locator('.insta-gallery-item-likes')).toBeVisible();
        await expect(sectionLocator.locator('.insta-gallery-item-info').locator('.insta-gallery-item-comments')).toBeVisible();
    });



});