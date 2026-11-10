import {test,expect} from '@playwright/test'


test('Auto Retry Assertions In playwright', async ({page})=>{

await page.goto('https://www.leafground.com/input.xhtml');
const enable= page.locator("//input[@placeholder='Babu Manickam']");
//!hard assert
//await expect(enable).toBeDisabled({timeout:10000});
await expect.soft(enable).toBeDisabled({timeout:10000});
console.log('After Assertion');

})

test('Non retry Assertions', async ({page})=>{
    await page.goto('https://www.leafground.com/input.xhtml')
    const title = await page.title();
    console.log(title);
    expect.soft(title).toBe("Input Componentaaas");
    console.log('After Assertion');

    
})

