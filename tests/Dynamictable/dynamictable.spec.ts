
import { test, expect } from '@playwright/test';

test.only('launch google', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/?m=1')

  const table=page.locator("(//h2[text()='Dynamic Web Table'])")
  await table.scrollIntoViewIfNeeded()
const rows= page.locator("(//h2[text()='Dynamic Web Table'])/parent::div/div/table/tbody/tr")

const rowcount= await rows.count()

// console.log(`total number of rows: ${rowcount}`);
// console.log('total number of rows: ${rowcount}');

//const column= page.locator('td')
let index:number
for (let i=0;i<rowcount;i++)

{

const browser= await rows.nth(i).locator('td').nth(0).textContent()
console.log(browser);
if ( browser==='Firefox'){
    index=i
console.log(`Firefoxindexpost : ${index}`);

}
}
})


