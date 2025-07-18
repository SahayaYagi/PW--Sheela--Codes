

import { test, expect } from '@playwright/test';


test('launch google', async ({ page }) => {

// await page.goto('https://demo.automationtesting.in/Static.html')

// await page.locator('#angular').dragTo(page.locator('#droparea'))

// await page.waitForTimeout (1000)


await page.goto('https://webdriveruniversity.com/index.html')
await page.mouse.move(100,200)
await page.mouse.down()
//await page.waitForTimeout(1000)
await page.mouse.move(1000,6000)
await page.mouse.up()
//await page.waitForTimeout(1000)
})