
import { test, expect } from '@playwright/test';

// import { LoginPage } from '../../pages/loginpage';
// import { Registerpage } from '../../pages/registerpage';
test('launch google', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')


     await page.waitForTimeout (1000)

const text = await page.locator ("//h2[text()='New Customer']").textContent()
    await page.waitForTimeout (1000)

    const text1 = await page.locator ("//h2[text()='Returning Customer']").textContent()

console.log( text1);
console.log( text);


})




//await page.locator('#upload').setInputFiles('')

