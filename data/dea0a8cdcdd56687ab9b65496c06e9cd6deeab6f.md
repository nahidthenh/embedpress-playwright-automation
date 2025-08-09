# Test info

- Name: Embed Classic Infogram source
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/infogram.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_TIMED_OUT at https://embedpress.wpqa.site/playwright-classic-editor/classic-infogram/
Call log:
  - navigating to "https://embedpress.wpqa.site/playwright-classic-editor/classic-infogram/", waiting until "load"

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/infogram.spec.js:4:16
```

# Test source

```ts
  1 | const { test, expect } = require('@playwright/test');
  2 |
  3 | test('Embed Classic Infogram source', async ({ page }) => {
> 4 |     await page.goto('https://embedpress.wpqa.site/playwright-classic-editor/classic-infogram/');
    |                ^ Error: page.goto: net::ERR_TIMED_OUT at https://embedpress.wpqa.site/playwright-classic-editor/classic-infogram/
  5 |     await expect(page.locator('iframe[title="EmbedPress test"]').contentFrame().locator('div').filter({ hasText: /^Sharemade with$/ }).nth(1)).toBeVisible();
  6 | });
  7 |
  8 | // As now we only have embed support 
```