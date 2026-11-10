import {test,expect} from '@playwright/test'

test('handle Iframe', async ({page})=>{

    await page.goto("https://leafground.com/frame.xhtml;");
    //!best way to handle iframe is frame.locator();
    
    //! first step is to count the number of frames in page.
    //! To count the number of frames inside one page.

    const framesValue = page.frames();
    
    console.log('total frames in the page: '+framesValue.length);  //5
    //*but actually there are 4 frames but playwright considers full page also as a frame

   // await page.locator("#click").click();

   //index value in frame starts with 1
   // 0 Main Page considers index as 0.
   // first frame index 1.

   await framesValue[1].locator("#Click").click();
   //* from frame to back to webpage.
   await page.locator("(//li[@class='ui-menuitem-submenu']/following-sibling::li)[1]").click();

})

test('Handle Nested Frame', async ({page})=>{

    await page.goto('https://leafground.com/frame.xhtml;');
    //! To handle nested frame in playwright we need to locator of frame which is nested which is inside.
    const framesValue = page.frames();

    
    console.log('total frames in the page: '+framesValue.length); 
     //! handling nested frame.
  await   framesValue[4].locator("#Click").click();


})

test('handle frame using frameLocator Method', async ({page})=>{

    await page.goto('https://leafground.com/frame.xhtml;')
    await page.frameLocator("(//iframe)[1]").locator("//button[@id='Click']").click();
})

test('handle Nested frame using frameLocator Method', async ({page})=>{

    await page.goto('https://leafground.com/frame.xhtml;')
    await page.frameLocator("(//iframe)[3]").
    frameLocator("//iframe[@id='frame2']").
    locator("//button[@id='Click']").
    click();

    
})
