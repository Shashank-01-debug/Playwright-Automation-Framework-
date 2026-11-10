import { test, expect, chromium } from '@playwright/test';

test('Launch Browser', async() => {

    const browser = await chromium.launch({ headless: false });
    //to open the window

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.facebook.com/');

    const pageTitle = page.title();
    console.log(pageTitle);
    
});


test('Print title using fixture',async({page})=>{
    
    await page.goto('https://www.facebook.com/');
   const title= await page.title();
   console.log(title);
   
})