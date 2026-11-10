import {test as setup,expect} from '@playwright/test'

//runs before the tests (see 'setup' project in playwright.config.ts)
//saucedemo session cookie expires in ~10 mins, so we log in fresh on every run
setup('login and save storage state', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();

    //wait until login is complete, otherwise cookie may not be saved yet
    await expect(page).toHaveURL(/inventory.html/);

//use of storage state
//storage state --> value in json format
//json --> key and value pairs
    await page.context().storageState({path:'Data/SF_Login.json'})
})
