

import { test, expect } from '@playwright/test';


test.only('launch google', async ({ page }) => {

await page.goto('https://demoqa.com/buttons')

await page.locator('#rightClickBtn').click({button:'right'})

await page.locator('#doubleClickBtn').dblclick();
await page.waitForTimeout(1000)

await page.mouse.wheel(0,300)
await page.waitForTimeout(1000)
})