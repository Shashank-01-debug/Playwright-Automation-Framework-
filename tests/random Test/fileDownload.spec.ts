import {test,expect} from '@playwright/test'

test('download file using event Listener', async ({page})=>{


    await page.goto('https://leafground.com/file.xhtml');

    //!create a promise
    const downloadFile = page.waitForEvent('download');
   //!Do the action

   await page.locator("//span[text()='Download']").click(); 
    //!resolve the promise
   const file =await downloadFile;
   (await downloadFile).saveAs("testData/"+file.suggestedFilename());


})