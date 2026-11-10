import { expect } from "@playwright/test";
import { Checkout_YourOverviewPage } from "./Checkout_YourOverviewPage";



 export class Checkout_CompletePage extends Checkout_YourOverviewPage{

    async ConfirmationOrder(){
    const mesg = this.page.locator("//h2[text()='Thank you for your order!']");
    await expect(mesg).toHaveText("Thank you for your order!");
        
}


}