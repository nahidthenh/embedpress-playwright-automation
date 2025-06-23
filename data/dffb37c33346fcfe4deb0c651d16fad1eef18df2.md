# Test info

- Name: Elementor YouTube Others >> Custom Player Preset 1
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/elementor/google/youtube-others.spec.js:24:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('#ep-elements-id-23222a0 button').filter({ hasText: /^Play$/ })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('#ep-elements-id-23222a0 button').filter({ hasText: /^Play$/ })

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/elementor/google/youtube-others.spec.js:30:100
```

# Page snapshot

```yaml
- link "Skip to content":
  - /url: "#main"
- banner:
  - navigation "Primary Navigation":
    - list:
      - listitem:
        - link "Home":
          - /url: https://embedpress.wpqa.site/
      - listitem:
        - link "Playwright GU":
          - /url: https://embedpress.wpqa.site/playwright-gutenberg/
        - button "Child menu of Playwright GU"
      - listitem:
        - link "Playwright El":
          - /url: https://embedpress.wpqa.site/playwright-elementor/
        - button "Child menu of Playwright El"
      - listitem:
        - link "Playwright Classic":
          - /url: https://embedpress.wpqa.site/playwright-classic-editor/
        - button "Child menu of Playwright Classic"
      - listitem:
        - link "Random Test":
          - /url: "#"
        - button "Child menu of Random Test"
      - listitem:
        - link "Md. Nahid Hasan":
          - /url: https://embedpress.wpqa.site/wp-admin
  - paragraph
  - search "Search form":
    - searchbox "Search input"
    - textbox "Search autocomplete" [disabled]
  - button "Search magnifier":
    - img
  - paragraph
- heading "Default YouTube" [level=2]
- paragraph: Copy URL Form Right-click on the video and copy
- iframe
- heading "Custom Player Preset 1" [level=2]
- paragraph:
  - strong: Copy URL Form URL Box On Top
- iframe
- heading "Custom Player Preset 2 Disable Few Controls" [level=2]
- paragraph:
  - strong: Copy URL Form Share Icon
- paragraph:
  - strong
- iframe
- heading "Enable Custom Player and Thumbnail" [level=2]
- paragraph:
  - strong: Copy URL Form Embed Code
- iframe
- contentinfo:
  - paragraph: © 2025 EmbedPress Automation Testing WPDeveloper SQA Team
- text: desktop
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | let slug = 'playwright-elementor/elementor-youtube-others/';
   4 |
   5 | test.describe("Elementor YouTube Others", () => {
   6 |     test.beforeEach(async ({ page }) => {
   7 |         await page.goto(slug);
   8 |     });
   9 |
  10 |     test('Default YouTube', async ({ page }) => {
  11 |         const heading = page.getByRole('heading', { name: 'Default YouTube' });
  12 |         await expect(heading).toBeVisible();
  13 |
  14 |         const framelocator = page.frameLocator('iframe[title="শ্রেষ্ঠ মানুষেরা - \\[পর্ব ৮\\] - ইবরাহিম \\(আঃ\\)"]');
  15 |
  16 |         await expect(page.getByText('Copy URL Form Right-click on')).toBeVisible();
  17 |         await expect(framelocator.locator('.ytp-cued-thumbnail-overlay-image')).toBeVisible();
  18 |         await expect(framelocator.getByRole('button', { name: 'Share' })).toBeVisible();
  19 |         await expect(framelocator.getByLabel('Play', { exact: true })).toBeVisible();
  20 |         await expect(framelocator.locator('div').filter({ hasText: 'শ্রেষ্ঠ মানুষেরা - [পর্ব ৮] - ইবরাহিম (আঃ)' }).nth(4)).toBeVisible();
  21 |         await expect(framelocator.getByRole('link', { name: 'Watch on YouTube' })).toBeVisible();
  22 |     });
  23 |
  24 |     test('Custom Player Preset 1', async ({ page }) => {
  25 |         const heading = page.getByRole('heading', { name: 'Custom Player Preset 1' });
  26 |         await heading.scrollIntoViewIfNeeded();
  27 |         await expect(heading).toBeVisible();
  28 |
  29 |         await expect(page.getByText('Copy URL Form URL Box On Top')).toBeVisible();
> 30 |         await expect(page.locator('#ep-elements-id-23222a0 button').filter({ hasText: /^Play$/ })).toBeVisible();
     |                                                                                                    ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  31 |         await expect(page.locator('#ep-elements-id-23222a0').getByText('PausePlay')).toBeVisible();
  32 |         await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Settings' })).toBeVisible();
  33 |         await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Restart' })).toBeVisible();
  34 |         await expect(page.locator('#ep-elements-id-23222a0').getByRole('button', { name: 'Mute' })).toBeVisible();
  35 |     });
  36 |
  37 |     test('Custom Player Preset 2 Disable Few Controls', async ({ page }) => {
  38 |         const heading = page.getByRole('heading', { name: 'Custom Player Preset 2' });
  39 |         await heading.scrollIntoViewIfNeeded();
  40 |         await expect(heading).toBeVisible();
  41 |
  42 |         await expect(page.getByText('Copy URL Form Share Icon')).toBeVisible();
  43 |         await expect(page.locator('[id="\\39 7765ca"] > .plyr > .plyr__video-wrapper > .plyr__poster')).toBeVisible();
  44 |         await expect(page.locator('#ep-elements-id-97765ca button').filter({ hasText: /^Play$/ })).toBeVisible();
  45 |         await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Restart' })).toBeVisible();
  46 |         await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Forward 10s' })).toBeVisible();
  47 |         await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Settings' })).toBeVisible();
  48 |         await expect(page.locator('#ep-elements-id-97765ca').getByRole('button', { name: 'Rewind 10s' })).toBeVisible();
  49 |     });
  50 |
  51 |     test('Enable Custom Player and Thumbnail', async ({ page }) => {
  52 |         const heading = page.getByRole('heading', { name: 'Enable Custom Player and' });
  53 |         await heading.scrollIntoViewIfNeeded();
  54 |         await expect(heading).toBeVisible();
  55 |
  56 |         await expect(page.getByText('Copy URL Form Embed Code')).toBeVisible();
  57 |         await expect(page.locator('#ep-elements-id-27221be').getByText('PausePlay')).toBeVisible();
  58 |         await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Mute' })).toBeVisible();
  59 |         await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Settings' })).toBeVisible();
  60 |         await expect(page.locator('#ep-elements-id-27221be').getByRole('button', { name: 'Fullscreen' })).toBeVisible();
  61 |     });
  62 | });
```