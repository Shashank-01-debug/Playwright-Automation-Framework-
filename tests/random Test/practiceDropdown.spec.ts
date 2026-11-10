import {test,expect} from '@playwright/test'

test('handle DropDown',async ({page})=>{

    await page.goto('https://www.telerik.com/contact');
    await page.selectOption("//select[@id='Dropdown-1']",{value:"Renewal"});
    await page.selectOption("//select[@id='Dropdown-2']",{value:'Telerik UI for .NET MAUI'});
    await page.selectOption("//select[@id='Country-1']",{label:'Bolivia'});


})


test('xpath Advance', async ({page})=>{

    await page.goto('https://www.amazon.in/');
    await page.locator("//div[@class='nav-search-field ']/label/following-sibling::input").fill("iphone 17");
    

})



