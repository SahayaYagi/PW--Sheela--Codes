

import { test, expect } from '@playwright/test';

test('launch google', async ({ page }) => {

      https://tutorialsninja.com/demo/index.php?route=account/login')
        await page.locator("(//input[@type='text'])[1]").fill('Phone')

          await page.locator("(//span['.btn btn-default btn-lg'])[8]").click()

            await page.mouse.wheel(0,500)
   

const element = page.locator("(//h4/a[text()='iPhone'])")
        //scroll until the button is visible
        await element.scrollIntoViewIfNeeded();
 await page.waitForTimeout(1000)

  await page.locator("(//h4/a[text()='iPhone'])").click();
   await page.locator("(//*[@id='button-cart'])").click();
 await page.waitForTimeout(1000)
// const message = page.locator('.alert alert-success alert-dismissible'); // Use actual class or id
//  await page.waitForTimeout(1000)
// await expect(message).toHaveText('Success: You have added iPhone to your shopping cart!');
//  await page.waitForTimeout(1000)

const message = page.locator('text=Success: You have added iPhone to your shopping cart!');
  await expect(message).toBeVisible();

const timestamp=Date.now()
await page.screenshot ({path: `screenshots/addtocart-${timestamp}.png`})

          })
 