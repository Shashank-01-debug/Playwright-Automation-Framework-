import {test,expect} from '@playwright/test'
import dotenv from 'dotenv'

//set the value from config
dotenv.config({path:'utils/QA.env'})

test('run test from env file', async ({page})=>{
//process.env.keyName

//process-refers to global object for Node.js
//env -> Environment
//keyname --> LT_username, LT_password

let url = process.env.url as string
let username = process.env.LT_username as string
let password = process.env.LT_password as string

    await page.goto(url);
    await page.locator("//input[@id='username']").fill(username);
    await page.locator("//input[@id='password']").fill(password);
    await page.locator("//input[@type='submit']").click();



})