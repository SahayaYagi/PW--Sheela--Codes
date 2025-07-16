
import { test, expect } from '@playwright/test';

test.only('launch google', async ({ page }) => {
    await page.goto('https://www.passportindia.gov.in/AppOnlineProject/online/knowPassportSeva#')

        

 await page.locator("(//a['.list-group-item'])[54]").click();

await page.locator("(//input[@type='text'])[2]").fill('TestFirstname')
await page.locator("(//input[@type='text'])[3]").fill('Lastname')
await page.locator("//input[@type='email']").fill('test@gmail.com')
await page.locator("(//input[@type='tel'])").fill('9000000000')
await page.locator("(//input[@type='password'])[1]").fill('test@123')
await page.locator("(//input[@type='password'])[2]").fill('test@123')
await page.locator("(//input[@type='radio'])[3]").click();
await page.locator("(//input[@type='checkbox'])").click();

await page.waitForTimeout(1000)
await page.locator("(//input[@type='submit'])").click();
const timestamp=Date.now()
await page.screenshot ({path: `screenshots/RegisterPage1-${timestamp}.png`})




//const timestamp=Date.now()
   //await page.screenshot ({path: `screenshots/page-${timestamp}.png`})
})
 ;
