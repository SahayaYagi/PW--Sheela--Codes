

import { test, expect } from '@playwright/test';

test('launch google', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Slider.html')


const element= page.frameLocator('#frame')
 if(element){
for ( let i=1;i<=50;i++){

  console.log(i);
  
//await element.locator("//a[@data-slide='next']/span").click()
//await page.waitForTimeout(1000)
await element.locator("(//*[contains(@id, 'slider')])").click()
//await page.waitForTimeout(1000)
await element.locator("//a[@class='ui-slider-handle ui-state-default ui-corner-all']/parent::div/a").click()
}
 }
await page.waitForTimeout(1000)
 const timestamp=Date.now()
await page.screenshot ({path: `screenshots/frame-${timestamp}.png`})
               
  })

