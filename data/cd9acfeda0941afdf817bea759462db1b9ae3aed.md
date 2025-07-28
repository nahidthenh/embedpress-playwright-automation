# Test info

- Name: Embed Elementor Matterport source
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/elementor/matterport.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('iframe[title="Shoppable Home Office"]').contentFrame().locator('#tint')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('iframe[title="Shoppable Home Office"]').contentFrame().locator('#tint')

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/elementor/matterport.spec.js:5:105
```

# Page snapshot

```yaml
- heading "Error establishing a database connection" [level=1]
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('Embed Elementor Matterport source', async ({ page }) => {
   4 |     await page.goto('https://embedpress.wpqa.site/playwright-elementor/elementor-matterport/');
>  5 |     await expect(page.locator('iframe[title="Shoppable Home Office"]').contentFrame().locator('#tint')).toBeVisible();
     |                                                                                                         ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   6 |     await expect(page.locator('iframe[title="Shoppable Home Office"]').contentFrame().getByRole('heading', { name: 'Shoppable Home Office' })).toBeVisible();
   7 |     await expect(page.locator('iframe[title="Shoppable Home Office"]').contentFrame().getByRole('button', { name: 'Play' })).toBeVisible();
   8 | });
   9 |
  10 | // As now we only have embed support
  11 |
  12 |
```