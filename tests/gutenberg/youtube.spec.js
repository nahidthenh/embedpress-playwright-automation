const { test, expect } = require('@playwright/test');

let slug = 'playwright-gutenberg/gutenberg-youtube';


test.describe("Gutenberg YouTube", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });


    test('YouTube Chanel Gallery Layout', async ({ page }) => {

        const heading = page.getByRole('heading', { name: 'YouTube Chanel Gallery' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.frameLocator('iframe[title="MrBeast"]').locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
        await expect(page.locator('.channel-header').first()).toBeVisible();
        await expect(page.getByRole('heading', { name: 'MrBeast' })).toBeVisible();
        await expect(page.getByRole('img', { name: 'MrBeast' })).toBeVisible();
        await expect(page.frameLocator('iframe[title="MrBeast"]').getByLabel('Watch on www.youtube.com')).toBeVisible();
        await expect(page.locator('.thumb').first()).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .thumb').first()).toBeVisible();
        await expect(page.locator('.description-container').first()).toBeVisible();
        await expect(page.locator('.page-number').first()).toBeVisible();
        await expect(page.locator('.ep-next').first()).toBeVisible();
        await page.locator('.ep-next').first().click();
        await page.waitForTimeout(2000)
        await expect(page.locator('.ep-prev').first()).toBeVisible();
    });


    test('YouTube Chanel List Layout', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'YouTube Chanel List' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .channel-header')).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div').first()).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div > .body > .description-container > .details > .channel').first()).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div > .body > .description-container > .thumbnail').first()).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div:nth-child(2)').first()).toBeVisible();
        await page.locator('div:nth-child(2) > .youtube__content__body > .content__wrap > div > .thumb > .play-icon > img').first().click();
        await page.waitForTimeout(2000)
        await expect(page.frameLocator('#videoIframe').locator('div').filter({ hasText: /^Jamuna TVSubscribeSubscribed$/ }).first()).toBeVisible();
        await expect(page.getByText('×', { exact: true })).toBeVisible();
        await page.getByText('×', { exact: true }).click();
    });


    test('YouTube Chanel Grid Layout', async ({ page }) => {

        const heading = page.getByRole('heading', { name: 'YouTube Chanel Grid' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();

        await expect(page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .channel-header')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'SATV' })).toBeVisible();
        await expect(page.getByRole('img', { name: 'SATV' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Subscribe' }).nth(2)).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div > .thumb').first()).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div > .body > .description-container').first()).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div:nth-child(2) > .thumb')).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .ep-youtube__content__pagination > .is_desktop_device > span').first()).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .ep-youtube__content__pagination > .ep-next')).toBeVisible();
        await page.getByText('Next').nth(2).click();
        await page.waitForTimeout(2000)
        await page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .content__wrap > div:nth-child(2) > .thumb > .play-icon > img').click();
        await page.waitForTimeout(2000)
        await expect(page.frameLocator('#videoIframe').locator('video')).toBeVisible();
        await page.waitForTimeout(1000)
        await page.getByText('×', { exact: true }).click();
        await expect(page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .ep-youtube__content__pagination > .ep-prev')).toBeVisible();
        await page.waitForTimeout(1000)
        await page.locator('div:nth-child(3) > .wp-block-group__inner-container > #ab00cc1d-ce27-4096-acea-0ce8eedb17e0 > .wp-block-embed__wrapper > #ep-gutenberg-content-9fb3b6005a21730a9ea83dd1fbf1f613 > div > .ep-embed-content-wraper > .ose-youtube > .ep-player-wrap > .ep-youtube__content__block > .youtube__content__body > .ep-youtube__content__pagination > .ep-prev').click();

    });


    test('YouTube Chanel Carousel Layout', async ({ page }) => {

    });














































    test('Default YouTube', async ({ page }) => {
        const framelocator = page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]')
        await expect(page.getByRole('heading', { name: 'Default YouTube' })).toBeVisible();
        await expect(page.getByText('Copy URL Form Right-click on')).toBeVisible();
        await expect(page.locator('.ep-embed-content-wraper').first()).toBeVisible();
        await expect(framelocator.getByLabel('Play', { exact: true })).toBeVisible();
        await expect(framelocator.getByRole('button', { name: 'Share' })).toBeVisible();
        await expect(framelocator.locator('div').filter({ hasText: 'শ্রেষ্ঠ মানুষেরা - [পর্ব ৮] - ইবরাহিম (আঃ)' }).nth(4)).toBeVisible();
        await expect(framelocator.getByRole('link', { name: 'Watch on YouTube' })).toBeVisible();
    });

    test('Custom Player Preset 1', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Custom Player Preset 1' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.getByText('Copy URL Form URL Box On Top')).toBeVisible();
        await expect(page.locator('.plyr__poster').first()).toBeVisible();
        await expect(page.locator('button').filter({ hasText: /^Play$/ }).first()).toBeVisible();
        await expect(page.getByText('PausePlay').first()).toBeVisible();
        await expect(page.getByRole('button', { name: 'Forward 10s' }).first()).toBeVisible();
        await expect(page.getByRole('button', { name: 'Settings' }).first()).toBeVisible();
    });

    test('Custom Player Preset 2 Disable Few Controls', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Custom Player Preset 2' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.getByText('Copy URL Form Share Icon')).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .wp-block-group__inner-container > [id="\\31 998d8c1-ffb7-4cbf-9151-a47bae06e9b8"] > .wp-block-embed__wrapper > #ep-gutenberg-content-7b716cefe198dfacb8659909c9701949 > div > .ep-embed-content-wraper > .plyr > .plyr__video-wrapper > .plyr__poster')).toBeVisible();
        await expect(page.locator('button').filter({ hasText: /^Play$/ }).nth(1)).toBeVisible();
        await expect(page.getByRole('button', { name: 'Restart' }).nth(1)).toBeVisible();
        await expect(page.getByText('PausePlay').nth(1)).toBeVisible();
        await expect(page.getByRole('button', { name: 'Settings' }).nth(1)).toBeVisible();
    });

    test('Enable Custom Player and Thumbnail', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Enable Custom Player and' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
        await expect(page.getByText('Copy URL Form Embed Code')).toBeVisible();
        await expect(page.locator('div:nth-child(4) > .wp-block-group__inner-container > [id="\\31 998d8c1-ffb7-4cbf-9151-a47bae06e9b8"] > .wp-block-embed__wrapper > #ep-gutenberg-content-7b716cefe198dfacb8659909c9701949 > div > .ep-embed-content-wraper > .plyr > .plyr__video-wrapper > .plyr__poster')).toBeVisible();
        await expect(page.locator('button').filter({ hasText: /^Play$/ }).nth(2)).toBeVisible();
        await expect(page.getByRole('button', { name: 'Forward 10s' }).nth(2)).toBeVisible();
        await expect(page.getByRole('button', { name: 'Settings' }).nth(2)).toBeVisible();
    });
});