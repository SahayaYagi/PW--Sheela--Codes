
import { test, expect } from '@playwright/test';
//import { Registerpageorg } from '../../pages/Registerpageorg';
// import * as dotenv from 'dotenv' 
// dotenv.config();
  

test('launch google', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 //await page.waitForTimeout (30000)
  


// const username=process.env.username;
//   const password =process.env.password;

// if (!password ||! username ) {
//         throw new Error('Email or Password is not set in the .env file');
//     }

// console.log(username);
// console.log(password);
// await page.waitForTimeout (2000)
//   const registerpageorg = new Registerpageorg(page)

// await registerpageorg.enterusername(username)
// await registerpageorg.enterpassword(password);

// await registerpageorg.clicklogin();


await page.locator("//input[@name='username']").fill('Admin')
 await page.locator("//input[@type='password']").fill('admin123')

await page.locator("//button[@type='submit']").click();

})
 ;

