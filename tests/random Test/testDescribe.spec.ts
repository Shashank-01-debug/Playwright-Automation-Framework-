import {test,expect} from '@playwright/test'

test.describe("Smoke", async ()=>{

    test.describe.configure({mode:'serial',retries:2})

test('test 1', async ({page})=>{
    await page.goto('https://www.leafground.com/input.xhtml');
    const title = await page.title();
    console.log(title);

    await expect(title).toBe("Input Components");

    
})

test('test 2', async ({page})=>{

    await page.goto('https://leafground.com/file.xhtml');
    await page.locator("//input[@type='file']").first().setInputFiles('./testData/Shashank_Bundela_Playwright_CV.pdf');
  
})


})