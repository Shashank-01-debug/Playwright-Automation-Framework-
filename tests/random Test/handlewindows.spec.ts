import {test,expect} from '@playwright/test'

test('handle Windows', async ({page,context})=>{

   await  page.goto('https://www.amazon.in/');
  await  page.locator("//input[@id='twotabsearchtextbox']").pressSequentially("iphone 16");
  await  page.locator("//input[@type='submit']").click();

  //?step 1 Create Promise
  //?create an eventListener
  const parentWindow = context.waitForEvent("page")
  //! step 2 : Do the action

  await page.locator("(//span[contains(text(),'iPhone 16 128 GB: 5G Mobile Phone with Camera Control, A18 Chip and a Big Boost in Battery Life. Works with AirPods; Ultramarine')])[2]").click();
//?step 3 resolve the promise
//?switch the control to child window.

const childWindow = await parentWindow;
await childWindow.waitForLoadState(); //let the new tab finish loading
const childTitle = await childWindow.title();
console.log(childTitle);
const price=await childWindow.locator("(//span[@class='a-price-whole'])[5]").innerText();
console.log('price of the desired Phone:',price);
//close the child window

//childWindow.close();
//! without closing child window control will come to parent window.
//! It will give control to parent window without closing child window.
await page.bringToFront();


await page.locator("//span[text()='Fresh']").click();

})

test.only('practice handleWindows', async ({page,context})=>{

await page.goto('https://www.leafground.com/window.xhtml;');
//!create promise
const parentWindow = context.waitForEvent("page");
//! do the action
await page.locator("//span[text()='Open']").click();

const childWindow = await parentWindow;
await childWindow.waitForLoadState();
await childWindow.getByPlaceholder("E-mail Address").fill("shashankb150@gmail.com");

await page.bringToFront();
await page.locator("//span[text()='Open Multiple']").click();








})