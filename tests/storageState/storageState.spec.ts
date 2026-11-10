import {test,expect} from '@playwright/test'

test('storage state Demo', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    
//use of storage state
//storage state --> value in json format
//json --> key and value pairs

await page.context().storageState({path:'Data/SF_Login.json'})



})