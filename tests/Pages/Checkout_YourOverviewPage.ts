import { Checkout_YourInformationPage } from "./Checkout_YourInformationPage";
import { expect } from "@playwright/test";

export class Checkout_YourOverviewPage extends Checkout_YourInformationPage{

async verifyShopping(){
    
    const mesg=this.page.locator("//div[text()='Free Pony Express Delivery!']");
    await expect (mesg).toHaveText("Free Pony Express Delivery!");
}

async clickOnFinishButton(){
    await this.page.getByRole('button',{name:'Finish'}).click();
}

}