const { test, expect } = require('@playwright/test');

let slug = 'playwright-classic-editor/classic-youtube/';


test.describe("Elementor YouTube", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await page.waitForLoadState('networkidle');
    });

    test('Default YouTube', async ({ page }) => {
        await expect(page.getByText('Default YouTube')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=0').locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=0').getByLabel('Play', { exact: true })).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=0').getByRole('button', { name: 'Share' })).toBeVisible();
    });

    test('Copy URL Form URL Box On Top', async ({ page }) => {
        await expect(page.getByText('Copy URL Form URL Box On Top')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=1').locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=1').getByLabel('Play', { exact: true })).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=1').getByRole('button', { name: 'Share' })).toBeVisible();

    });

    test('Copy URL Form Share Icon', async ({ page }) => {
        await expect(page.getByText('Copy URL Form Share Icon')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=2').locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=2').getByLabel('Play', { exact: true })).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=2').getByRole('button', { name: 'Share' })).toBeVisible();

    });

    test('Copy URL Form Embed Code', async ({ page }) => {
        await expect(page.getByText('Copy URL Form Embed Code')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=3').locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=3').getByLabel('Play', { exact: true })).toBeVisible();
        await expect(page.frameLocator('iframe[title="Full Restoration 40 Years Old ruined Classic Motorcycle"] >> nth=3').getByRole('button', { name: 'Share' })).toBeVisible();
    });
});