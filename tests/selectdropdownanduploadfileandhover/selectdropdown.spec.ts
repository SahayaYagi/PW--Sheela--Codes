import { test, expect } from '@playwright/test';
test.only('launch google', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')

        await page.locator("(//input[@type='text'])[1]").fill('Phone')

          await page.locator("(//span['.btn btn-default btn-lg'])[8]").click()
 //await page.mouse.wheel(0,1000)
   //await page.waitForTimeout(2000)
 //await page.selectOption("//select[@name='category_id']",{index:4})
   await page.selectOption("//select[@name='category_id']","Tablets");
    await page.waitForTimeout(1000)

    const timestamp=Date.now()
await page.screenshot ({path: `screenshots/selectdropdown-${timestamp}.png`})

})
 ;