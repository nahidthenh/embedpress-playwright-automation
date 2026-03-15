# EmbedPress Compatibility CI

## Overview

This GitHub Actions workflow automatically tests the EmbedPress WordPress plugin for compatibility across different WordPress and PHP versions.

## What It Tests

The workflow tests EmbedPress plugin compatibility with:

### WordPress Versions
- Latest (currently 6.7+)
- WordPress 6.7
- WordPress 6.6
- WordPress 6.5

### PHP Versions
- PHP 7.4
- PHP 8.0
- PHP 8.1
- PHP 8.2
- PHP 8.3

## Test Coverage

Each test combination performs the following checks:

1. **PHP Syntax Check** - Validates all PHP files for syntax errors
2. **Plugin Activation** - Tests if the plugin activates successfully
3. **Plugin Verification** - Confirms the plugin is active in WordPress
4. **WordPress Health Check** - Ensures WordPress remains functional
5. **REST API Test** - Verifies WordPress REST API works with the plugin
6. **Debug Log Analysis** - Checks for fatal errors in WordPress debug log
7. **Deactivation/Reactivation** - Tests plugin can be deactivated and reactivated
8. **Plugin Integrity Check** - Validates plugin files and structure

## How to Run

### Automatic Triggers

The workflow runs automatically on:

1. **Push to main branch** - Every time code is pushed to main
2. **Pull requests to main** - When PRs are created/updated
3. **Weekly schedule** - Every Monday at 9:00 AM UTC

### Manual Trigger

You can also run the workflow manually:

1. Go to **Actions** tab in GitHub
2. Select **EmbedPress Compatibility CI**
3. Click **Run workflow**
4. Optionally specify:
   - **Plugin Repository URL** (default: `https://github.com/WPDevelopers/embedpress.git`)
   - **Plugin Branch** (default: `master`)

## Viewing Results

### GitHub Actions UI

1. Navigate to the **Actions** tab
2. Click on the workflow run
3. View individual job results for each WordPress/PHP combination
4. Check the **Test Summary** job for an overview

### Test Summary

After all tests complete, a summary is automatically generated showing:
- Test matrix details
- Overall pass/fail status
- Links to detailed logs

### Debug Logs

If any test fails, debug logs are automatically uploaded as artifacts:
- Artifact name: `debug-log-wp{version}-php{version}`
- Retention: 7 days
- Download from the workflow run page

## Configuration

### Customizing Test Matrix

Edit `.github/workflows/embedpress-compatibility-ci.yml`:

```yaml
matrix:
  wordpress: ['latest', '6.7', '6.6', '6.5']  # Add/remove versions
  php: ['7.4', '8.0', '8.1', '8.2', '8.3']    # Add/remove versions
```

### Excluding Incompatible Combinations

Some WordPress/PHP combinations may be incompatible:

```yaml
exclude:
  - wordpress: 'latest'
    php: '7.4'  # Example: Latest WP may not support old PHP
```

### Changing Plugin Source

To test a different plugin repository or branch, modify the checkout step or use manual workflow dispatch inputs.

## Troubleshooting

### Common Issues

**Issue**: Plugin activation fails
- Check PHP version compatibility
- Review debug logs artifact
- Verify plugin file structure

**Issue**: Syntax errors
- Review the specific PHP file mentioned in logs
- Check PHP version-specific syntax requirements

**Issue**: MySQL connection errors
- Usually temporary - retry the workflow
- Check MySQL service health in logs

### Getting Help

1. Check the workflow run logs for detailed error messages
2. Download debug log artifacts for WordPress errors
3. Review individual test step outputs

## Best Practices

1. **Run before releases** - Always run compatibility tests before releasing new versions
2. **Monitor weekly runs** - Check scheduled test results regularly
3. **Update test matrix** - Keep WordPress/PHP versions current with market usage
4. **Review failures promptly** - Address compatibility issues quickly

## Technical Details

- **Runner**: Ubuntu Latest
- **MySQL**: 5.7
- **WP-CLI**: Latest
- **Test Isolation**: Each combination runs in a fresh environment
- **Parallel Execution**: All combinations run simultaneously (fail-fast disabled)

