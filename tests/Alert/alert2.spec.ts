


import { test, expect } from '@playwright/test';
import { moveCursor } from 'readline';

test.only('launch google', async ({ page }) => {

      await page.goto('https://demo.automationtesting.in/Alerts.html')


      await page.waitForTimeout(1000)
    
    page.on('dialog',async dialogue => { 

      console.log(dialogue.message());
       if (dialogue.type()==='alert')
         { 
         
          await dialogue.accept()
          
           
 //console.log('inside alert');

         }  
         else if ( dialogue.type()==='confirm')
         {

          await dialogue.accept()
          //console.log('click ok');
          
         }
       else if( dialogue.type()==='prompt'){
//console.log('inside prompt');

        await dialogue.accept('yes')
       }

       else {

        //console.log('no alerts');
        
       }
    });
          
      //await page.locator("#OKTab").click();

           await page.locator ("//a[text()='Alert with OK & Cancel ']").click();
           await page.waitForTimeout(1000)
           await page.locator("//button[text()='click the button to display a confirm box ']").click();
     //await page.waitForTimeout(3000)
  const timestamp=Date.now()
await page.screenshot ({path: `screenshots/alert2-${timestamp}.png`})
               
  })

  



