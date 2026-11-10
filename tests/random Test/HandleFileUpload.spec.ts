import {test,expect} from '@playwright/test'

test('handle Upload file with Tagname Input', async ({page})=>{

    await page.goto('https://leafground.com/file.xhtml');
    await page.locator("//input[@type='file']").first().setInputFiles('./testData/Shashank_Bundela_Playwright_CV.pdf');

})

test('Multiple file upload with Tagname Input', async ({page})=>{

    await page.goto('https://leafground.com/file.xhtml');
    await page.locator("//input[@type='file']").last().setInputFiles('./testData/shashank_old_Pic (1).jpg','./testData/sign.jpg');
    await page.waitForTimeout(5000);

})

test('upload file with Event Listener', async ({page})=>{


    await page.goto('https://leafground.com/file.xhtml');
    //create a promise
    const uploadFile = page.waitForEvent('filechooser');
    //do the action
    await page.locator("//input[@type='file']").first().click();

    //resolve the promise

    const file = await uploadFile
    await file.setFiles("./testData/Shashank_Bundela_Playwright_CV.pdf");

})