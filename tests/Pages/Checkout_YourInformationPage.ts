import { BasePage } from './BasePage';

export class Checkout_YourInformationPage extends BasePage{

    async enterDetails(firstName:string,lastName:string,postalCode:string){

        await this.type(this.page.getByPlaceholder("First Name"), firstName);
        await this.type(this.page.getByPlaceholder("Last Name"), lastName);
        await this.type(this.page.getByPlaceholder("Zip/Postal Code"), postalCode);

    }

    async clickOnContinueButton(){
        await this.click(this.page.getByRole("button",{name:'Continue'}));
    }

}
