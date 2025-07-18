
import { test, expect } from '@playwright/test';

test('launch google', async ({ page }) => {

      await page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html')
     
    page.on('dialog',async dialogue => { 

      console.log(dialogue.message());
       if (dialogue.type()==='alert')
         { 
          
          dialogue.accept()
console.log('inside alert');

         }  
         else if ( dialogue.type()==='confirm')
         {

          await dialogue.dismiss()
          console.log('inside confirm');
          
         }
       else if( dialogue.type()==='prompt'){
console.log('inside prompt');

        await dialogue.accept('yes')
       }

       else {

        console.log('no alerts');
        
       }
    })
         
    await page.locator("#button1").click();
    await page.waitForTimeout(2000)

     const timestamp=Date.now()
await page.screenshot ({path: `screenshots/alert-${timestamp}.png`})
  })

