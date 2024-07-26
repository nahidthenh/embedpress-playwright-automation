# EmbedPress Test Automation Plugin
Testing the EmbedPress Plugin Using Playwright

# About EmbedPress

EmbedPress – embed from unlimited sources – embed pdf with 3d flipbook viewer, embed youtube, social feeds, google docs, maps, vimeo, wistia, spotify, etc without coding & display in websites created with elementor, gutenberg block editor, or other page builders

EmbedPress enhances the interactive storytelling on your WordPress website by offering one-click embeds of videos, social feeds, maps, PDFs, 3D flipbooks, posts, pages, documents, and much more from unlimited multimedia content sources.

Fuel up your website’s engagement and make it aesthetically pleasing by embedding content directly in Classic Editor, Gutenberg Block Editor, Elementor, or by using EmbedPress shortcodes on other WordPress page builders with ease.

## Getting Started

Install playwright using the following command:

### Step 1 - Clone this repo
```bash
git clone git@github.com:nahidthenh/embedpress-playwright-automation.git

```
### Step 2 - Install NPM
```bash
npm install -f

```
### Step 3 - Running the Script
```bash
npx playwright test
```

### Step 3.1 - Running a Specific Test
```bash
npx playwright test tests/modern_pdf.spec.js
```

### Step 3.2 - Running a Specific Test on a Specific Browser
```bash
npx playwright test tests/modern_pdf.spec.js --project chromium
```

### Step 3.3 - Running a Specific Test on a Specific Browser with headed mode
```bash
npx playwright test tests/modern_pdf.spec.js --project chromium --headed
```