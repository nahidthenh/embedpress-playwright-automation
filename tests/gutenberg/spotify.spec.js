const { test, expect } = require('@playwright/test');

let slug = 'playwright-gutenberg/gutenberg-spotify';


test.describe("Gutenberg Spotify", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Spotify Single', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Spotify Single' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        const framelocator = page.frameLocator('iframe[title="Spotify Embed: Surah Ar-Rahman (Be Heaven)"]');

        await expect(framelocator.locator('.BackgroundColorContainer_backgroundColorContainer__YZSQ7')).toBeVisible();
        await expect(framelocator.locator('.CoverArtBase_coverArt__ne0XI')).toBeVisible();
        await expect(framelocator.getByRole('link', { name: 'Surah Ar-Rahman (Be Heaven)' })).toBeVisible();
        await expect(framelocator.getByLabel('More')).toBeVisible();
        await expect(framelocator.getByTestId('play-pause-button')).toBeVisible();

        await framelocator.getByTestId('play-pause-button').click();
        await framelocator.getByTestId('play-pause-button').click();

        await framelocator.getByLabel('Close').click();


    });

});