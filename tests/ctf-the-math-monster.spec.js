const { test, expect } = require('@playwright/test');

test.skip('Math Monster Challenge', async ({ page }) => {
    await page.goto('https://the-math-monster.hurayraiit.com');
    await page.click('[data-testid="start-button"]');

    let lastProblem = '';
    let problemCount = 0;

    while (true) {
        // Check if result screen appeared
        const isResultVisible = await page.locator('#result-screen').isVisible().catch(() => false);

        if (isResultVisible) {
            const resultText = await page.textContent('#result-content');
            console.log("RESULT:", resultText);
            break;
        }

        // Check if game UI is still visible
        const gameUIVisible = await page.locator('#game-ui').isVisible().catch(() => false);
        if (!gameUIVisible) {
            await page.waitForTimeout(50);
            continue;
        }

        // Get current problem
        const problemText = await page.textContent('[data-testid="math-problem"]').catch(() => '');

        // Skip if empty, loading, or same problem
        if (!problemText || problemText.trim() === '' || problemText.includes('Loading') || problemText === lastProblem) {
            await page.waitForTimeout(20);
            continue;
        }

        // Parse the math problem
        const match = problemText.match(/(-?\d+)\s*([\+\-\*\/%])\s*(-?\d+)/);

        if (!match) {
            console.log(`Parse failed: "${problemText}"`);
            await page.waitForTimeout(50);
            continue;
        }

        lastProblem = problemText;
        problemCount++;

        const a = parseInt(match[1]);
        const operator = match[2];
        const b = parseInt(match[3]);

        // Calculate answer
        let answer;
        if (operator === '+') answer = a + b;
        else if (operator === '-') answer = a - b;
        else if (operator === '*') answer = a * b;
        else if (operator === '%') answer = a % b;
        else if (operator === '/') answer = Math.floor(a / b);

        console.log(`${problemCount}. ${problemText} = ${answer}`);

        // Submit answer
        await page.fill('[data-testid="answer-input"]', answer.toString());
        await page.click('[data-testid="submit-button"]');

        // Wait briefly for next question
        await page.waitForTimeout(20);
    }
});
