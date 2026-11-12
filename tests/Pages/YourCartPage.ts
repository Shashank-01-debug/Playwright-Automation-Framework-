import { BasePage } from './BasePage';

export class YourCartPage extends BasePage{

    async clickOnCheckOut(){
        await this.click(this.page.getByRole("button",{name:'Checkout'}));
    }
}
