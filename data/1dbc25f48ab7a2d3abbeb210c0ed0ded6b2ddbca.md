# Test info

- Name: Embed Classic Document Viewer source - Office
- Location: /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/pdf/document-office-viewer.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('iframe').contentFrame().locator('iframe[name="wacframe"]').contentFrame().getByRole('img', { name: 'Page' })
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('iframe').contentFrame().locator('iframe[name="wacframe"]').contentFrame().getByRole('img', { name: 'Page' })

    at /home/runner/work/embedpress-playwright-automation/embedpress-playwright-automation/tests/classic/pdf/document-office-viewer.spec.js:6:142
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
        - link "Random Gutenberg":
          - /url: https://embedpress.wpqa.site/random-gutenberg/
      - listitem:
        - link "Random Elementor":
          - /url: https://embedpress.wpqa.site/random-elementor/
      - listitem:
        - link "Random Classic":
          - /url: https://embedpress.wpqa.site/random-classic/
      - listitem:
        - link "Automation Report":
          - /url: https://nahidthenh.github.io/embedpress-playwright-automation/
      - listitem:
        - link "Md. Nahid Hasan (Admin)":
          - /url: https://embedpress.wpqa.site/wp-admin
  - paragraph
  - search "Search form":
    - searchbox "Search input"
    - textbox "Search autocomplete" [disabled]
  - button "Search magnifier":
    - img
  - paragraph
- banner:
  - banner:
    - heading "Document Office Viewer" [level=1]
- main:
  - article:
    - paragraph:
      - code: Powered By EP - No, Office Viewer
    - iframe
    - paragraph
- contentinfo:
  - paragraph: © 2025 EmbedPress Automation Testing WPDeveloper SQA Team
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('Embed Classic Document Viewer source - Office', async ({ page }) => {
   4 |     await page.goto('playwright-classic-editor/document-office-viewer/');
   5 |     await expect(page.getByText('Powered By EP - No, Office')).toBeVisible();
>  6 |     await expect(page.locator('iframe').contentFrame().locator('iframe[name="wacframe"]').contentFrame().getByRole('img', { name: 'Page' })).toBeVisible();
     |                                                                                                                                              ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   7 |     await expect(page.getByText('Powered By EmbedPress')).toBeHidden();
   8 | });
   9 |
  10 | // As now we only have embed support 
```