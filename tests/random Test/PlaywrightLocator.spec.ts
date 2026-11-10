import {test, expect} from '@playwright/test'

test('Practice Locator', async ({page})=>{

    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=BB216631602EDA7F3EE2D5E906D5454C');
    await page.getByText('Admin Page').click();
   // await page.getByRole('textbox',{name:'username'}).fill("url");
    await page.getByAltText("ParaBank").click();
    await page.getByRole('link',{name:'Register'}).click();

})


test('Practice Locators', async ({page})=>{
   await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone 17');
  await page.getByRole('button', { name: 'iphone 17 pro max 256+gb' }).click();


})