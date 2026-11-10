import {test,expect} from '@playwright/test'

test('handle Confirm Alert AutoDismiss', async ({page})=>{

    await page.goto('https://leafground.com/alert.xhtml');
    await page.locator("(//span[text()='Show'])[2]").click();
    await page.waitForTimeout(5000);

})



test('handle Alert with Page.once', async ({page})=>{

    
    page.once('dialog',alertType =>{

        const type = alertType.type();
        console.log(type);

        const mesg= alertType.message();
        console.log(mesg);
        
        alertType.accept();
        

    })

    
    await page.goto('https://leafground.com/alert.xhtml');
    //!confirm alert
    await page.locator("(//span[text()='Show'])[2]").click();

    await page.waitForTimeout(5000);
    //!prompt alert
    //? second alert got auto dismiss because we used page.once.
 await page.locator("(//span[text()='Show'])[5]").click();
 await page.waitForTimeout(5000);

})

test('handle Alert with Page.on', async ({page})=>{

    
    page.on('dialog',alertType =>{

        const type = alertType.type();
        console.log(type);

        const mesg= alertType.message();
        console.log(mesg);
       //!to handle prompt alert and type the message 
     //  alertType.accept('shashank');

     if(type==="confirm"){
        alertType.dismiss();
     }
     else if(type==='prompt'){
        alertType.accept('shashank');
     }
        

    })

    
    await page.goto('https://leafground.com/alert.xhtml');
    //!confirm alert
    await page.locator("(//span[text()='Show'])[2]").click();

    await page.waitForTimeout(5000);
    //!prompt alert
 await page.locator("(//span[text()='Show'])[5]").click();
 await page.waitForTimeout(5000);

  const verify=await page.locator("//span[@id='confirm_result']").innerText();
  await expect(verify).toContain("User entered name as: shashankk");

})


