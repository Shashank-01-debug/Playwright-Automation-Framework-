import { ProductPage } from "./ProductPage";

export class YourCartPage extends ProductPage{

    async clickOnCheckOut(){
        await this.page.getByRole("button",{name:'Checkout'}).click();
    }
}