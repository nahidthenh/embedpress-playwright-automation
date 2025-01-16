const { test, expect } = require('@playwright/test');

let slug = 'playwright-classic-editor/classic-spotify';


test.describe('Classic Spotify', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Classic Spotify Playlist', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Classic Spotify' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        const pageLocator = page.locator('iframe[title="Spotify Embed\\: Kids Quran playlist"]')

        await expect(pageLocator).toBeVisible();
        await expect(pageLocator.contentFrame().locator('.CoverArtBase_coverArt__ne0XI')).toBeVisible();
        await expect(pageLocator.contentFrame().getByRole('link', { name: 'Kids Quran playlist' })).toBeVisible();
        await expect(pageLocator.contentFrame().getByTestId('spotify-logo')).toBeVisible();
        await expect(pageLocator.contentFrame().getByTestId('play-pause-button')).toBeVisible();
        await expect(pageLocator.contentFrame().getByLabel('More')).toBeVisible();
        await expect(pageLocator.contentFrame().getByTestId('tracklist-row-0')).toBeVisible();
        await pageLocator.contentFrame().getByTestId('play-pause-button').click();
        await page.waitForTimeout(300)
        await pageLocator.contentFrame().getByTestId('play-pause-button').click();
    });

    test('Classic Spotify Single', async ({ page }) => {
        const heading = page.getByText('Spotify Single');
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.locator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').contentFrame().locator('.BackgroundColorContainer_backgroundColorContainer__YZSQ7')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').contentFrame().getByRole('link', { name: 'Surah Ar-Rahman (Be Heaven)' })).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').contentFrame().locator('.CoverArtBase_coverArt__ne0XI')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').contentFrame().getByTestId('spotify-logo')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').contentFrame().getByLabel('More')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').contentFrame().getByTestId('play-pause-button')).toBeVisible();
        await page.locator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').contentFrame().getByTestId('play-pause-button').click();
        await page.waitForTimeout(300)
        await page.locator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').contentFrame().getByTestId('play-pause-button').click();
    });

    test('Classic Spotify Artist', async ({ page }) => {
        const heading = page.getByText('Spotify Artist');
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.locator('iframe[title="Spotify Embed\\: Omar Hisham"]').contentFrame().locator('.CoverArtBase_coverArt__ne0XI')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Omar Hisham"]').contentFrame().getByTestId('spotify-logo')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Omar Hisham"]').contentFrame().getByLabel('More')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Omar Hisham"]').contentFrame().getByTestId('play-pause-button')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Omar Hisham"]').contentFrame().getByTestId('tracklist-row-0')).toBeVisible();
        await expect(page.locator('iframe[title="Spotify Embed\\: Omar Hisham"]').contentFrame().getByTestId('tracklist-row-1')).toBeVisible();
        await page.locator('iframe[title="Spotify Embed\\: Omar Hisham"]').contentFrame().getByTestId('play-pause-button').click();
        await page.waitForTimeout(300)
        await page.locator('iframe[title="Spotify Embed\\: Omar Hisham"]').contentFrame().getByTestId('play-pause-button').click();
    });


    test('Classic Spotify Album', async ({ page }) => {
        const heading = page.getByText('Spotify Artist');
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

       await expect(page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().locator('.CoverArtBase_coverArt__ne0XI')).toBeVisible();
       await expect(page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().getByRole('link', { name: 'Al Sabaê Al Mounjiate (Quran)' })).toBeVisible();
       await expect(page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().getByRole('link', { name: 'Abd Al Rahman Al Soudaiss' })).toBeVisible();
       await expect(page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().getByTestId('spotify-logo')).toBeVisible();
       await expect(page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().getByLabel('More')).toBeVisible();
       await expect(page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().getByTestId('play-pause-button')).toBeVisible();
       await expect(page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().getByTestId('tracklist-row-0')).toBeVisible();
       await page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().getByTestId('play-pause-button').click();
       await page.waitForTimeout(300)
       await page.locator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').contentFrame().getByTestId('tracklist-row-0').getByTestId('playback-indicator').click();
    });

});