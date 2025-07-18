import { test, expect } from '@playwright/test';

test('launch google', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/upload#google_vignette ')

  
await page.setInputFiles("//input[@type='file']","C:/Users/sheela/Desktop/Basics of Programming.txt")
      
await page.locator("//button[@data-testid='file-submit']").click();
// // await page.hover("//a[text()='Components']")
// // await page.locator("//a[text()='Printers (0)']").click();
const timestamp=Date.now()
await page.screenshot ({path: `screenshots/uploadfile-${timestamp}.png`})


})
 ;


 