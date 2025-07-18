
import { test, expect } from '@playwright/test';

test('launch google', async ({ page }) => {

    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login ')

  

 await page.hover("//a[text()='Components']")
 await page.locator("//a[text()='Printers (0)']").click();
const timestamp=Date.now()
await page.screenshot ({path: `screenshots/filehover-${timestamp}.png`})


})
 ;


 