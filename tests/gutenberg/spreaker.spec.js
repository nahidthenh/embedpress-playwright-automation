const { test, expect } = require('@playwright/test');

let slug = 'gutenberg-spreaker';


test.describe("Google Docs Gutenberg", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect(page.getByRole('heading', { name: 'Gutenberg Spreaker' })).toBeVisible();
    });

    test('Spreaker Playlist', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Spreaker Playlist' })).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByRole('link', { name: 'The Deadliest Mountain on' })).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByLabel('Listen on Spreaker')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByRole('link', { name: 'Privacy Policy' })).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByRole('img', { name: 'The Deadliest Mountain on' }).first()).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByLabel('Play episode The Deadliest').first()).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByLabel('Skip back 10 seconds')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByLabel('Skip forward 30 seconds')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByLabel('Like episode')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByLabel('Read comments')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByLabel('Share episode on social media')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByLabel('player.download_episode')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().locator('.button_info').first()).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByText('The Deadliest Mountain on Earthepisode_explicit16:')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByRole('list').getByLabel('Play episode The Deadliest')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().getByRole('list').getByRole('img', { name: 'The Deadliest Mountain on' })).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().locator('li').filter({ hasText: 'The Deadliest Mountain on' }).locator('span')).toBeVisible();
        await expect(page.locator('iframe').first().contentFrame().locator('li').filter({ hasText: 'The Deadliest Mountain on' }).getByLabel('Read description')).toBeVisible();
        await page.locator('iframe').first().contentFrame().getByLabel('Play episode The Deadliest').first().click();
        await page.waitForTimeout(2000);
        await page.locator('iframe').first().contentFrame().getByLabel('Pause episode The Deadliest').first().click();
    });

    test('Enable Pro Features', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Enable Pro Features' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.getByText('Disable Downloads – Upload').first()).toBeVisible();

        
    });


    test('2', async ({ page }) => { });

    test('3', async ({ page }) => { });

    test('4', async ({ page }) => { });

    test('5', async ({ page }) => { });
});