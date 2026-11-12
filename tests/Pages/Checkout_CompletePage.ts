import { BasePage } from './BasePage';


export class Checkout_CompletePage extends BasePage{

    async ConfirmationOrder(){
        const mesg = this.page.locator("//h2[text()='Thank you for your order!']");
        await this.verifyText(mesg, "Thank you for your order!");
    }

}
