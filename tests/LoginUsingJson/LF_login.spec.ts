import {test} from '@playwright/test'
import loginTestData from '../../utils/LT_login.json' with { type: 'json' }

//*if we want to execute only one set of data
const getValue=loginTestData[0];

//for(let getValue of loginTestData){
test (`login with json ${getValue.TC_NO}`, async ({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.locator("//input[@id='username']").fill(getValue.username);
    await page.locator("//input[@id='password']").fill(getValue.password);
    await page.locator("//input[@type='submit']").click();

})
//}