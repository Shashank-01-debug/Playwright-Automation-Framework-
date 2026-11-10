import {test,expect} from '@playwright/test'

test.skip('Test Method', async ({page})=>{

    await page.goto('https://www.amazon.com')
    const title = await page.title();
    console.log(title);
    
})


test('Test using only annotation', async ({page})=>{

    test.info().annotations.push({type:'author',description:'Shashank'},
        {type:'smoke Testing',description:'login Functionality'})

    await page.goto('https://www.flipkart.com')
    const title = await page.title();
    console.log(title);
    
})
