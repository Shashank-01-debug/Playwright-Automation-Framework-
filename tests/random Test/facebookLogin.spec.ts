import {test,expect} from '@playwright/test'

test('facebook Login', async({page})=>{

  await  page.goto('https://m.facebook.com/?wtsid=rdr_0UClIQ5MHKvtSeq3f');
  await page.locator("//input[@name='email']").pressSequentially('shashank');
  await page.locator("//input[@name='pass']").fill("superman312");
  console.log(await page.title());
  await page.waitForTimeout(5000);
  
})

