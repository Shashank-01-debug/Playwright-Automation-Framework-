import{test} from '@playwright/test'
import { Checkout_CompletePage } from '../Pages/Checkout_CompletePage'


test('Login to Confirm Order', async ({page})=>{

    const object = new Checkout_CompletePage(page);

await object.loadUrl("https://www.saucedemo.com/");
await object.EnterUsername("standard_user");
await object.EnterPassword("secret_sauce");
await object.clickOnSubmitButton();
await object.selectingProducts();
await object.clickOnCart();
await object.clickOnCheckOut();
await object.enterDetails('shashank',"bundela","411057");
await object.clickOnContinueButton();
await object.verifyShopping();
await object.clickOnFinishButton();
await object.ConfirmationOrder()




})