const { test, expect } = require('@playwright/test');

let slug = 'elementor-youtube-2';


test.describe("Elementor YouTube", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await page.waitForLoadState('networkidle');
    });

    test('YouTube Chanel Gallery', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'YouTube Chanel Gallery' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.frameLocator('iframe[title="Baseera"]').locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
        await expect(page.locator('.channel-header').first()).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Baseera' })).toBeVisible();
        await expect(page.getByRole('img', { name: 'Baseera' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-7cb3671').getByRole('link', { name: 'Subscribe' })).toBeVisible();
        await expect(page.locator('.thumb').first()).toBeVisible();
        await expect(page.locator('.description-container').first()).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .thumb').first()).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .body > .description-container').first()).toBeVisible();
        await expect(page.locator('#ep-elements-id-7cb3671').getByText('1', { exact: true }).first()).toBeVisible();
        await expect(page.locator('.ep-next').first()).toBeVisible();
        await page.locator('#ep-elements-id-7cb3671').getByText('Next').click();
        await page.waitForTimeout(1000)
        await expect(page.locator('.ep-prev').first()).toBeVisible();
        await page.locator('.ep-prev').first().click();
    });

    test('YouTube Chanel List', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'YouTube Chanel List' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.locator('#b283ee7 > .ose-youtube > .ep-player-wrap > .channel-header')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Ahmadullah' })).toBeVisible();
        await page.getByRole('img', { name: 'Ahmadullah' }).click();
        await expect(page.locator('#ep-elements-id-b283ee7').getByRole('link', { name: 'Subscribe' })).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div > .thumb').first()).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div > .body > .description-container').first()).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div:nth-child(2)').first()).toBeVisible();
        await page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div > .thumb > .play-icon > img').first().click();
        await page.waitForTimeout(1000)
        await expect(page.getByText('×', { exact: true })).toBeVisible();
        await page.getByText('×', { exact: true }).click();
    });

    test('YouTube Chanel Grid', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'YouTube Chanel List' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.locator('[id="\\31 d37408"] > .ose-youtube > .ep-player-wrap > .channel-header')).toBeVisible();
        await expect(page.getByRole('img', { name: 'UFC' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'UFC' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-1d37408').getByRole('link', { name: 'Subscribe' })).toBeVisible();
        await expect(page.locator('[id="\\31 d37408"] > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div > .thumb').first()).toBeVisible();
        await expect(page.locator('[id="\\31 d37408"] > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div:nth-child(2) > .thumb')).toBeVisible();
        await expect(page.locator('[id="\\31 d37408"] > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div > .body > .description-container').first()).toBeVisible();
        await expect(page.locator('[id="\\31 d37408"] > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div:nth-child(2) > .body > .description-container')).toBeVisible();
        await page.locator('[id="\\31 d37408"] > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div:nth-child(2) > .thumb > .play-icon > img').click();
        await page.waitForTimeout(1100)
        await expect(page.frameLocator('#videoIframe').locator('video')).toBeVisible();
        await expect(page.getByText('×', { exact: true })).toBeVisible();
        await page.getByText('×', { exact: true }).click();

    });

    test('YouTube Chanel Carousel', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'YouTube Chanel List' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.locator('#bb8a111 > .ose-youtube > .ep-player-wrap > .channel-header')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Dhruv Rathee' })).toBeVisible();
        await expect(page.getByRole('img', { name: 'Dhruv Rathee' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-bb8a111').getByRole('link', { name: 'Subscribe' })).toBeVisible();
        await expect(page.locator('#bb8a111 > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div > .thumb').first()).toBeVisible();
        await expect(page.locator('#bb8a111 > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div > .body > .description-container').first()).toBeVisible();
        await page.locator('#bb8a111 > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div:nth-child(2) > .thumb > .play-icon > img').click();
        await page.waitForTimeout(1000)
        await expect(page.getByText('×', { exact: true })).toBeVisible();
        await page.getByText('×', { exact: true }).click();

    });

    test('Default YouTube', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Default YouTube' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        const framelocator = page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]');

        await expect(page.getByText('Copy URL Form Right-click on')).toBeVisible();
        await expect(framelocator.locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
        await expect(framelocator.getByRole('button', { name: 'Share' })).toBeVisible();
        await expect(framelocator.getByLabel('Play', { exact: true })).toBeVisible();
        await expect(framelocator.locator('div').filter({ hasText: 'শ্রেষ্ঠ মানুষেরা - [পর্ব ৮] - ইবরাহিম (আঃ)' }).nth(4)).toBeVisible();
        await expect(framelocator.getByRole('link', { name: 'Watch on YouTube' })).toBeVisible();
    });

    test('Custom Player Preset 1', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Custom Player Preset 1' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.getByText('Copy URL Form URL Box On Top')).toBeVisible();
        await expect(page.locator('.plyr__poster').first()).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0 button').filter({ hasText: /^Play$/ })).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0').getByText('PausePlay')).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Settings' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Restart' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Mute' })).toBeVisible();
    });

    test('Custom Player Preset 2 Disable Few Controls', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Custom Player Preset 2' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.getByText('Copy URL Form Share Icon')).toBeVisible();
        await expect(page.locator('[id="\\39 7765ca"] > .plyr > .plyr__video-wrapper > .plyr__poster')).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca button').filter({ hasText: /^Play$/ })).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Restart' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Forward 10s' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Settings' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Rewind 10s' })).toBeVisible();
    });

    test('Enable Custom Player and Thumbnail', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Enable Custom Player and' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.getByText('Copy URL Form Embed Code')).toBeVisible();
        await expect(page.locator('#ep-elements-id-27221be').getByText('PausePlay')).toBeVisible();
        await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Mute' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Settings' })).toBeVisible();
        await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Fullscreen' })).toBeVisible();
    });
});