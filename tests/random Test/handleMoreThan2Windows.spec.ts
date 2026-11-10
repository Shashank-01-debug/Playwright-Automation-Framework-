import {test,expect} from '@playwright/test'

test('handle Windows', async ({page,context})=>{

    await page.goto('https://www.leafground.com/window.xhtml;');

    //create promise
    //do the action
    //resolve the promise

    const [multipleWindow] = await Promise.all([

        context.waitForEvent('page'),
        page.locator("//span[text()='Open Multiple']").click()
    ])
    // to count the number of windows
    const count = multipleWindow.context().pages();
    console.log(count.length);
    

    //create variable for 2 child window--> transfer ethe control to child page

    let webtable:any
    let dashboard: any

    for(let i=0;i<count.length;i++){
        const title = await count[i].title();
        console.log(title);
        await count[i].waitForTimeout(3000);
        
        
    }


})
