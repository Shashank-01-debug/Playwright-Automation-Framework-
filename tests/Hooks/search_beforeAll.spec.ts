import {test, expect} from '@playwright/test'

//!we declare global page
let page:any
/*test.beforeEach('login to application', async ({page})=>{

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
await page.getByRole('textbox',{name:'E-Mail Address'}).fill('amotooricap6@gmail.com');
await page.getByRole('textbox',{name:'Password'}).fill("12345");
await page.locator("input[value='Login']").click();
await expect(page).toHaveURL(/route=account\/account/);

})
*/

test.beforeAll('login into application', async({browser})=>{

const context = await browser.newContext();
 page = await context.newPage(); 

await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
await page.getByRole('textbox',{name:'E-Mail Address'}).fill('amotooricap6@gmail.com');
await page.getByRole('textbox',{name:'Password'}).fill("12345");
await page.locator("input[value='Login']").click();
await expect(page).toHaveURL(/route=account\/account/);
})

test.afterAll('log out of application', async ()=>{

    await page.getByRole('link', { name: ' My Account' }).click();
   await page.getByRole('link',{name:'Logout'}).click();


})



test('search with existing product', async ({})=>{

await page.getByRole('textbox',{name:'Search', exact:true}).fill("HP");
await page.locator('#search button').click();
await expect (page.getByRole('link',{name:"HP LP3065"}).first()).toBeVisible();


})

test('search with non existing product', async ({})=>{

await page.getByRole('textbox',{name:'Search', exact:true}).fill("Honda");
await page.locator('#search button').click();
await expect (page.locator("//p[text()='There is no product that matches the search criteria.']")).toHaveText("There is no product that matches the search criteria.");

//await page.locator("//li[@class='dropdown open']/ul/li/a[text()='Logout']").click();
})


test('search without any product', async ({})=>{

await page.getByRole('textbox',{name:'Search', exact:true}).clear();
await page.locator('#search button').click();
await expect (page.locator("//p[text()='There is no product that matches the search criteria.']")).toHaveText("There is no product that matches the search criteria.");

//await page.locator("//li[@class='dropdown open']/ul/li/a[text()='Logout']").click();
})