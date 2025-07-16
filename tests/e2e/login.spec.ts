
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import { Registerpage } from '../../pages/registerpage';
test.only('launch google', async ({ page }) => {
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')

 await page.waitForTimeout (1000)
const loginPage = new LoginPage(page)
const registerPage = new Registerpage(page)
//  await loginPage.enterEmailAddress('sheautomation@gmail.com')
//   await loginPage.enterpassword('Test@123')
// await loginPage.clickloginButton()

await loginPage.validLoginCredentials('sheautomation@gmail.com','Test@123')
const homePage = new HomePage(page)



// asyn loginPage (emailAddress: string ,password : string ){

//             await this.emailAddress (sheautomation@gmail.com);
//             await this.password(Test@123);
//             await this.clickloginButton


 await page.waitForTimeout (1000);

 const timestamp=Date.now()
await page.screenshot ({path: `screenshots/login-${timestamp}.png`})
})
;