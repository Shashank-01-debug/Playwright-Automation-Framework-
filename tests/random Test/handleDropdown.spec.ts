import {test,expect} from '@playwright/test'

test('handle Dropdown', async({page})=>{

await page.goto("https://www.leafground.com/select.xhtml;");
await page.selectOption("//select[@class='ui-selectonemenu']",{label:'Playwright'});
await page.selectOption("//select[@class='ui-selectonemenu']",{index:3});

})
//! only this testcase will be executed....
test.only ('handle dropdown with Non Select tag', async ({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml;");
    await page.locator("//label[text()='Select Country']").click();
    await page.locator("//li[@class='ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all']").nth(2).click();

})

