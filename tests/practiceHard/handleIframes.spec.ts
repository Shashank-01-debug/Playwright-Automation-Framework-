import {test,expect} from '@playwright/test'

test('handle frames using frameLocator', async ({page})=>{

    await page.goto("https://letcode.in/frame");
  const frameOne =  await page.frameLocator("//iframe[@id='firstFr']");

   //recommended way --> frameLocator

   frameOne.locator("//input[@name='fname']").fill("Arun");
      
})

test('practice frames', async ({page})=>{
    await page.goto('https://docs.oracle.com/javase/8/docs/api/');
    const thirdFrame = await page.frameLocator("//frame[@name='classFrame']");
     thirdFrame.locator("//a[text()='Description']").click();

})

test('handle frames using URL', async ({page})=>{
    await page.goto('https://docs.oracle.com/javase/8/docs/api/');
   const thirdFrame=await page.frame({url:"https://docs.oracle.com/javase/8/docs/api/overview-summary.html"});
   thirdFrame?.locator("//a[text()='Description']").click();

})



test('handle framesssssss', async ({page})=>{
    
    await page.goto('https://the-internet.herokuapp.com/nested_frames');
    const title = await page.frameLocator("//frame[@name='frame-top']").frameLocator("//frame[@name='frame-right']").locator("//body").innerText();
    console.log(title);
    
   

    

})