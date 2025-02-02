const { test, expect } = require('@playwright/test');

test.use({ storageState: 'playwright/.auth/user.json' });

test.describe('Dashboard Branding Tab', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://embedpress.wpqa.site/wp-admin/admin.php?page=embedpress&page_type=custom-logo');
    });

    test('Should display EmbedPress Branding content and functionility Options', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Global Branding Settings' })).toBeVisible();
        await expect(page.getByText('Powered by EmbedPress')).toBeVisible();
        await expect(page.locator('form div').filter({ hasText: 'Powered by EmbedPress' }).locator('label')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Custom Logo' })).toBeVisible();
        await expect(page.getByText('YouTube Custom Branding')).toBeVisible();
        await expect(page.locator('form div').filter({ hasText: 'YouTube Custom Branding' }).locator('label').first()).toBeVisible();
        await expect(page.getByText('Vimeo Custom Branding')).toBeVisible();
        await expect(page.locator('form div').filter({ hasText: 'Vimeo Custom Branding' }).locator('label').first()).toBeVisible();
        await expect(page.getByText('Wistia Custom Branding')).toBeVisible();
        await expect(page.locator('form div').filter({ hasText: 'Wistia Custom Branding' }).locator('label').first()).toBeVisible();
        await expect(page.getByText('Twitch Custom Branding')).toBeVisible();
        await expect(page.locator('form div').filter({ hasText: 'Twitch Custom Branding' }).locator('label').first()).toBeVisible();
        await expect(page.getByText('Dailymotion Custom Branding')).toBeVisible();
        await expect(page.locator('form div').filter({ hasText: 'Dailymotion Custom Branding' }).locator('label').first()).toBeVisible();
        await expect(page.getByText('Document Custom Branding')).toBeVisible();
        await expect(page.locator('form div').filter({ hasText: 'Document Custom Branding' }).locator('label').first()).toBeVisible();
        await expect(page.getByRole('button', { name: 'Save Changes' })).toBeVisible();
        await page.locator('form div').filter({ hasText: 'Powered by EmbedPress' }).locator('span').click();
        await page.locator('form div').filter({ hasText: 'Powered by EmbedPress' }).locator('span').click();

        await expect(page.getByRole('link', { name: 'Settings ' })).toBeHidden();
        await page.locator('div:nth-child(5) > .form__control__wrap > .input__switch > span').click();
        await expect(page.getByRole('link', { name: 'Settings ' })).toBeVisible();

        await page.getByRole('link', { name: 'Settings ' }).click();
        await expect(page.locator('form div').filter({ hasText: 'YouTube Custom Branding' }).locator('#yt_logo__upload__preview')).toBeVisible();
        await expect(page.locator('form div').filter({ hasText: 'YouTube Custom Branding' }).locator('img').nth(1)).toBeVisible();
        await page.getByRole('link', { name: '' }).click();
        await page.locator('form div').filter({ hasText: 'YouTube Custom Branding' }).locator('i').nth(1).click();
        await page.getByLabel('Screenshot 2024-05-23 at 11-').click();
        await page.getByRole('button', { name: 'Use this image' }).click();
        await page.getByRole('button', { name: 'Save Changes' }).click();
        await page.getByRole('link', { name: 'Settings ' }).click();
        await page.locator('div:nth-child(5) > .form__control__wrap > .input__switch > span').click();
        await page.getByRole('button', { name: 'Save Changes' }).click();
        await expect(page.locator('#wpbody-content div').filter({ hasText: 'Settings Updated' }).nth(4)).toBeVisible();

    });
});