import {test,expect} from '@playwright/test'
import testData from '../../utils/facebookLogin.json' with { type: 'json' }

for(let getValue of testData){
test(`login using json ${getValue['serial No']}`, async ({page})=>{

    await page.goto('https://www.facebook.com/');
    await page.locator("//input[@name='email']").fill(getValue.Username);
    await page.locator("//input[@name='pass']").fill(getValue.password);
    await page.locator("//span[text()='Log in']").click();


})
}