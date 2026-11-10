import {test, expect} from '@playwright/test'

test.beforeEach('login to application', async ({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
await page.getByRole('textbox',{name:'E-Mail Address'}).fill('amotooricap6@gmail.com');
await page.getByRole('textbox',{name:'Password'}).fill("12345");
await page.locator("input[value='Login']").click();
await expect(page).toHaveURL(/route=account\/account/);

})

test.afterEach('log out of application', async ({page})=>{

    await page.getByRole('link', { name: ' My Account' }).click();
   await page.getByRole('link',{name:'Logout'}).click();


})



test('search with existing product', async ({page})=>{

await page.getByRole('textbox',{name:'Search'}).fill("HP");
await page.locator("(//button)[5]").click();
await expect (page.getByRole('link',{name:"HP LP3065"}).first()).toBeVisible();


})

test('search with non existing product', async ({page})=>{

await page.getByRole('textbox',{name:'Search'}).fill("Honda");
await page.locator("(//button)[5]").click();
await expect (page.locator("//p[text()='There is no product that matches the search criteria.']")).toHaveText("There is no product that matches the search criteria.");

//await page.locator("//li[@class='dropdown open']/ul/li/a[text()='Logout']").click();
})


test('search without any product', async ({page})=>{


await page.locator("(//button)[5]").click();
await expect (page.locator("//p[text()='There is no product that matches the search criteria.']")).toHaveText("There is no product that matches the search criteria.");

//await page.locator("//li[@class='dropdown open']/ul/li/a[text()='Logout']").click();
})