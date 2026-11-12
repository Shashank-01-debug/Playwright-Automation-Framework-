import { BasePage } from './BasePage'


export class LoginPage extends BasePage{

    async EnterUsername(username:string){
        await this.type(this.page.getByPlaceholder("Username"), username);
    }

    async EnterPassword(password:string){
        await this.type(this.page.getByPlaceholder("Password"), password);
    }

    async clickOnSubmitButton(){
        await this.click(this.page.getByRole('button',{name:'Login'}));
    }

}
