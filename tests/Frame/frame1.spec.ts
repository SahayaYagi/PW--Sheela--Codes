


import { test, expect } from '@playwright/test';

test.only('launch google', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Frames.html')

  await page.locator("(//a[text()='Single Iframe '])").click();
await page.waitForTimeout(1000)
await page.locator("(//a[text()='Iframe with in an Iframe'])").click();

await page.waitForTimeout(1000)

                 const timestamp=Date.now()
await page.screenshot ({path: `screenshots/frame1-${timestamp}.png`})



})