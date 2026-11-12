import{test} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ProductPage } from '../Pages/ProductPage'
import { YourCartPage } from '../Pages/YourCartPage'
import { Checkout_YourInformationPage } from '../Pages/Checkout_YourInformationPage'
import { Checkout_YourOverviewPage } from '../Pages/Checkout_YourOverviewPage'
import { Checkout_CompletePage } from '../Pages/Checkout_CompletePage'


test('Login to Confirm Order', async ({page})=>{

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new YourCartPage(page);
    const informationPage = new Checkout_YourInformationPage(page);
    const overviewPage = new Checkout_YourOverviewPage(page);
    const completePage = new Checkout_CompletePage(page);

await loginPage.loadUrl("https://www.saucedemo.com/");
await loginPage.EnterUsername("standard_user");
await loginPage.EnterPassword("secret_sauce");
await loginPage.clickOnSubmitButton();
await productPage.selectingProducts();
await productPage.clickOnCart();
await cartPage.clickOnCheckOut();
await informationPage.enterDetails('shashank',"bundela","411057");
await informationPage.clickOnContinueButton();
await overviewPage.verifyShopping();
await overviewPage.clickOnFinishButton();
await completePage.ConfirmationOrder()

})
