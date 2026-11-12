import { BasePage } from './BasePage';

export class Checkout_YourOverviewPage extends BasePage{

async verifyShopping(){
    const mesg = this.page.locator("//div[text()='Free Pony Express Delivery!']");
    await this.verifyText(mesg, "Free Pony Express Delivery!");
}

async clickOnFinishButton(){
    await this.click(this.page.getByRole('button',{name:'Finish'}));
}

}
