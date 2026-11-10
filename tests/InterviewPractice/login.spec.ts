import {test, expect} from '@playwright/test'

test('login functionality', async ({page})=>{

    await page.goto('https://automationexercise.com/login');
    await page.getByRole('textbox',{name:'Email Address'}).first().fill('shashank');
    await page.getByRole('textbox',{name:'Password'}).fill("PASS1234");
    await page.getByRole('button',{name:'Login'}).click();


})