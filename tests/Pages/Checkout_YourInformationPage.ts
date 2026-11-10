import { YourCartPage } from "./YourCartPage";

export class Checkout_YourInformationPage extends YourCartPage{

    async enterDetails(firstName:string,lastName:string,postalCode:string){

        await this.page.getByPlaceholder("First Name").fill(firstName);
        await this.page.getByPlaceholder("Last Name").fill(lastName);
        await this.page.getByPlaceholder("Zip/Postal Code").fill(postalCode);

    }

    async clickOnContinueButton(){
        await this.page.getByRole("button",{name:'Continue'}).click();
    }

}