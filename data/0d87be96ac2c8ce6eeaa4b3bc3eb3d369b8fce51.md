# Test info

- Name: Embed Elementor Canva source
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/elementor/canva.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://embedpress.wpqa.site/playwright-elementor/el-canva/", waiting until "load"

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/elementor/canva.spec.js:4:16
```

# Test source

```ts
  1 | const { test, expect } = require('@playwright/test');
  2 |
  3 | test('Embed Elementor Canva source', async ({ page }) => {
> 4 |     await page.goto('https://embedpress.wpqa.site/playwright-elementor/el-canva/');
    |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  5 |     await expect(page.locator('iframe[title="Accounting Service Website in Black and White Photographic Style"]').contentFrame().locator('div:nth-child(2) > .uk_25A > .Izwocg')).toBeVisible();
  6 |     await expect(page.locator('iframe[title="Accounting Service Website in Black and White Photographic Style"]').contentFrame().getByText('EmbedPress')).toBeVisible();
  7 | });
  8 |
  9 | // As now we only have embed support 
```