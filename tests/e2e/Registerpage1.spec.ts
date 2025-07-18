import { test, expect } from '@playwright/test';
import { Registerpage } from '../../pages/registerpage';
import * as dotenv from 'dotenv' 
dotenv.config();

test('launch google', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register')

        const password =process.env.password;
const confirmpassword=process.env.confirmpassword;
const email=process.env.email;

if (!password || !confirmpassword ||! email ) {
        throw new Error('Email or Password is not set in the .env file');
    }

console.log(password);
console.log(confirmpassword);
console.log(email);



  //await page.locator("(//a['.list-group-item'])[54]").click();

   await page.waitForTimeout (2000)
  const registerPage = new Registerpage(page)
//await registerPage.clicktheContinuebutton();
await registerPage.enterfirstname ('Sheela');
await registerPage.enterlastname ('M');
await registerPage.enteremailaddress(email);
await registerPage.enterphno('911111111');

await registerPage.enterpassword(password);
 await registerPage.enterconfirmpassword(confirmpassword);
await registerPage.clickcheckbox();
await registerPage.clicksubmit1();



// await page.locator("(//input[@type='text'])[2]").fill('TestFirstname')
// await page.locator("(//input[@type='text'])[3]").fill('Lastname')
// await page.locator("//input[@type='email']").fill('test@gmail.com')
// await page.locator("(//input[@type='tel'])").fill('9000000000')
// await page.locator("(//input[@type='password'])[1]").fill('test@123')
// await page.locator("(//input[@type='password'])[2]").fill('test@123')
// await page.locator("(//input[@type='radio'])[3]").click();
// await page.locator("(//input[@type='checkbox'])").click();

await page.waitForTimeout(1000)

const timestamp=Date.now()
await page.screenshot ({path: `screenshots/RegisterPage1-${timestamp}.png`})



})
 ;
