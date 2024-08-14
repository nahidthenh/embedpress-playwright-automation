const { test, expect } = require('@playwright/test');

let slug = 'playwright-elementor/elementor-spotify';


test.describe('Elementor Spotify', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test('Spotify Single', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Spotify Single' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').locator('.BackgroundColorContainer_backgroundColorContainer__YZSQ7')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').locator('.CoverArtBase_coverArt__ne0XI')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').getByRole('link', { name: 'Surah Ar-Rahman (Be Heaven)' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').getByTestId('play-pause-button')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Surah Ar-Rahman \\(Be Heaven\\)"]').getByLabel('More')).toBeVisible();
    });

    test('Spotify Artist', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Spotify Artist' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Omar Hisham"]').getByTestId('tracklist').locator('div').filter({ hasText: 'Surah Ar-Rahman (Be Heaven)' }).nth(1)).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Omar Hisham"]').getByTestId('tracklist-row-0')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Omar Hisham"]').getByTestId('tracklist-row-1')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Omar Hisham"]').getByLabel('More')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Omar Hisham"]').getByTestId('play-pause-button')).toBeVisible();
        await page.frameLocator('iframe[title="Spotify Embed\\: Omar Hisham"]').getByTestId('play-pause-button').click();
        await page.frameLocator('iframe[title="Spotify Embed\\: Omar Hisham"]').getByTestId('play-pause-button').click();
        await page.frameLocator('iframe[title="Spotify Embed\\: Omar Hisham"]').getByLabel('Close').click();
    });

    test('Spotify Album', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Spotify Album' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByRole('link', { name: 'Al Sabaê Al Mounjiate (Quran)' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByRole('link', { name: 'Abd Al Rahman Al Soudaiss' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByTestId('play-pause-button')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByLabel('More')).toBeVisible();

        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByTestId('tracklist').locator('div').filter({ hasText: 'Al FatihaAbd Al Rahman Al' }).nth(1)).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByTestId('tracklist-row-0')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByTestId('tracklist-row-1')).toBeVisible();

        await page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByTestId('play-pause-button').click();
        await page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByTestId('play-pause-button').click();
        await page.frameLocator('iframe[title="Spotify Embed\\: Al Sabaê Al Mounjiate \\(Quran\\)"]').getByLabel('Close').click();


    });

    test('Spotify Playlist', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Spotify Playlist' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();


        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByTestId('play-pause-button')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByLabel('More')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByRole('link', { name: 'Kids Quran playlist' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByTestId('tracklist').locator('div').filter({ hasText: 'AlbaqarahMashary Rashid Al-' }).nth(1)).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByTestId('tracklist-row-0')).toBeVisible();
        await expect(page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByTestId('tracklist-row-1')).toBeVisible();
        await page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByTestId('play-pause-button').click();
        await page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByTestId('play-pause-button').click();
        await page.frameLocator('iframe[title="Spotify Embed\\: Kids Quran playlist"]').getByLabel('Close').click();
    });
});