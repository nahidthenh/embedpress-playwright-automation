const { test, expect } = require('@playwright/test');

let slug = 'playwright-classic-editor/classic-content-protection/';

test.describe('Content Protection Pro Feature - Classic Editor', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect(page.getByRole('heading', { name: 'Classic Content Protection' })).toBeVisible();
    });

    test('should protect content in classic editor', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Content Protection Type : User Role – Editor', exact: true })).toBeVisible();
        await expect(page.getByText('Only editor will see the')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Content Protection Type : Password – Password is' })).toBeVisible();
        await expect(page.getByText('Content Locked Content is')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Content Protection Type : User Role – Editor : PDF Support' })).toBeVisible();
        await expect(page.getByText('This content is protected.')).toBeVisible();
    });
});