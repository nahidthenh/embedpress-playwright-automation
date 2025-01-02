# EmbedPress Test Automation
Testing the EmbedPress Plugin Using Playwright

# About EmbedPress

EmbedPress – embed from unlimited sources – embed pdf with 3d flipbook viewer, embed youtube, social feeds, google docs, maps, vimeo, wistia, spotify, etc without coding & display in websites created with elementor, gutenberg block editor, or other page builders

EmbedPress enhances the interactive storytelling on your WordPress website by offering one-click embeds of videos, social feeds, maps, PDFs, 3D flipbooks, posts, pages, documents, and much more from unlimited multimedia content sources.

Fuel up your website’s engagement and make it aesthetically pleasing by embedding content directly in Classic Editor, Gutenberg Block Editor, Elementor, or by using EmbedPress shortcodes on other WordPress page builders with ease.

## Getting Started
Install playwright using the following command:
```
npm init playwright@latest
```
Install dotenv:
```
npm install dotenv@latest
```
Install playwright-slack-report
```
npm install playwright-slack-report@latest
```
To update playwright:
```
npm install -D @playwright/test@latest
```
Usually after Playwright update, browsers need to be updated with command:
```
npx playwright install --with-deps
```
Install WordPress e2e test Utils For Playwright
Documentation: https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-test-utils-playwright
```
npm install @wordpress/e2e-test-utils-playwright
```
Test Result 
Result: https://nahidthenh.github.io/embedpress-playwright-automation/
```