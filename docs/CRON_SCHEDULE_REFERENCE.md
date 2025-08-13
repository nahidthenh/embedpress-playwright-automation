# Cron Schedule Reference for GitHub Actions

## Current Schedule Configuration

**Cron Expression**: `'0 2 * * 1'`

**Breakdown**:
- `0` - Minute (0th minute)
- `2` - Hour (2 AM UTC)
- `*` - Day of month (any day)
- `*` - Month (any month)
- `1` - Day of week (Monday, where 0=Sunday, 1=Monday, etc.)

**Execution Time**:
- **UTC**: Monday at 2:00 AM
- **Bangladesh Time (UTC+6)**: Monday at 8:00 AM

## Time Zone Conversion

| Time Zone | Time |
|-----------|------|
| UTC | Monday 02:00 |
| Bangladesh (UTC+6) | Monday 08:00 |
| India (UTC+5:30) | Monday 07:30 |
| Singapore (UTC+8) | Monday 10:00 |
| Japan (UTC+9) | Monday 11:00 |

## Alternative Schedule Options

If you need to change the schedule in the future:

### Daily at 8 AM Bangladesh Time
```yaml
- cron: '0 2 * * *'  # Every day at 8:00 AM Bangladesh time
```

### Weekdays at 8 AM Bangladesh Time
```yaml
- cron: '0 2 * * 1-5'  # Monday to Friday at 8:00 AM Bangladesh time
```

### Twice a week (Monday and Thursday)
```yaml
- cron: '0 2 * * 1,4'  # Monday and Thursday at 8:00 AM Bangladesh time
```

### Monthly (First Monday of each month)
```yaml
- cron: '0 2 1-7 * 1'  # First Monday of each month at 8:00 AM Bangladesh time
```

## Cron Expression Format

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
│ │ │ │ │
* * * * *
```

## Important Notes

1. **GitHub Actions uses UTC time** - Always calculate your local time offset
2. **Minimum interval** - GitHub Actions may not run exactly on schedule during high load
3. **Repository activity** - Scheduled workflows may not run if repository is inactive
4. **Default branch** - Cron schedules only work from the default branch (main/master)

## Testing Schedule

To test if your cron schedule is correct:
1. Use online cron calculators (e.g., crontab.guru)
2. Check the next few execution times
3. Monitor the Actions tab after the scheduled time

## Current Configuration Verification

**Expected next runs** (assuming current date):
- Next Monday at 8:00 AM Bangladesh time
- Subsequent Mondays at the same time
- Will continue weekly on Mondays

**To verify**: Check the Actions tab in your GitHub repository after Monday 8:00 AM Bangladesh time to confirm execution.
