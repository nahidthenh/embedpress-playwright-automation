# GitHub Workflow and Pages Setup Guide

## Overview
This document explains the updated GitHub workflow configuration for EmbedPress Playwright automation, including scheduled execution, HTML report deployment, and Telegram notifications.

## Workflow Changes Made

### 1. Schedule Configuration ✅
- **Updated**: Workflow now runs every Monday at 8:00 AM Bangladesh time (UTC+6)
- **Cron Expression**: `'0 2 * * 1'` (2:00 AM UTC = 8:00 AM UTC+6)
- **Previous**: Daily at 5:00 AM Bangladesh time
- **Trigger**: Automatic execution every Monday morning

### 2. GitHub Pages Deployment ✅
- **Fixed**: Separated deployment into dedicated job for better reliability
- **Updated**: Using latest GitHub Actions for Pages deployment
- **Added**: Proper permissions and concurrency controls
- **Environment**: Configured `github-pages` environment

### 3. Telegram Notifications ✅
- **Enhanced**: Improved notification format with detailed information
- **Status**: Currently commented out (ready to enable when needed)
- **Features**: 
  - Test result summary with emojis
  - Direct link to HTML report
  - Execution timestamp and commit information
  - Status-based messaging (success/failure)

### 4. Action Updates ✅
- **Updated**: All actions to latest versions (v4)
- **Improved**: Better error handling and artifact management
- **Added**: Proper concurrency controls for Pages deployment

## GitHub Pages Setup Requirements

### Repository Settings
To enable GitHub Pages deployment, ensure the following settings in your repository:

1. **Go to Repository Settings** → **Pages**
2. **Source**: Select "GitHub Actions" (not "Deploy from a branch")
3. **Custom Domain** (optional): Configure if using custom domain

### Required Secrets
Ensure these secrets are configured in your repository:

**Existing Secrets:**
- `SLACK_WEBHOOK_URL` - For Slack notifications
- `PERSONAL_ACCESS_TOKEN` - For repository access
- `PASSWORD` - WordPress login password
- `USERNAME` - WordPress login username
- `SUBSCRIBER_USER` - Subscriber user credentials
- `SUBSCRIBER_PASS` - Subscriber password

**For Telegram (when enabled):**
- `TELEGRAM_BOT_TOKEN` - Bot token from @BotFather
- `TELEGRAM_CHAT_ID` - Chat ID where notifications will be sent

### Permissions Required
The workflow now includes these permissions:
- `contents: write` - For repository access
- `pages: write` - For GitHub Pages deployment
- `id-token: write` - For OIDC authentication

## Workflow Structure

### Job 1: Test Execution
- Runs Playwright tests
- Generates HTML reports
- Uploads artifacts
- Parses test results

### Job 2: GitHub Pages Deployment
- Downloads test artifacts
- Configures GitHub Pages
- Deploys HTML reports
- Provides deployment URL

## Enabling Telegram Notifications

When ready to enable Telegram notifications:

1. **Create Telegram Bot**:
   ```
   - Message @BotFather on Telegram
   - Use /newbot command
   - Get bot token
   ```

2. **Get Chat ID**:
   ```
   - Add bot to your chat/channel
   - Send a message to the bot
   - Visit: https://api.telegram.org/bot<TOKEN>/getUpdates
   - Find chat_id in response
   ```

3. **Add Secrets**:
   - Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` to repository secrets

4. **Uncomment Code**:
   - Remove comment markers from Telegram notification steps in workflow

## Troubleshooting

### GitHub Pages Not Working
1. Check repository settings → Pages → Source is "GitHub Actions"
2. Verify workflow permissions include `pages: write`
3. Check if deployment job completed successfully
4. Ensure artifacts are properly uploaded

### Schedule Not Triggering
1. Verify cron expression syntax
2. Check if repository has recent activity
3. Ensure workflow file is in default branch

### Telegram Notifications Not Working
1. Verify bot token and chat ID are correct
2. Check if bot has permission to send messages
3. Ensure secrets are properly configured

## Report Access

After successful deployment, HTML reports will be available at:
```
https://<username>.github.io/<repository-name>/
```

For this repository:
```
https://nahidthenh.github.io/embedpress-playwright-automation/
```

## Monitoring

- **Workflow Status**: Check Actions tab in GitHub repository
- **Deployment Status**: Check Deployments section in repository
- **Report Access**: Visit the GitHub Pages URL after deployment
- **Logs**: Review workflow logs for debugging

## Future Enhancements

Potential improvements for the workflow:
1. **Matrix Testing**: Run tests on multiple browsers/OS
2. **Conditional Notifications**: Different messages for different failure types
3. **Report Retention**: Automatic cleanup of old reports
4. **Performance Tracking**: Historical test performance data
5. **Slack Integration**: Alternative to Telegram notifications
