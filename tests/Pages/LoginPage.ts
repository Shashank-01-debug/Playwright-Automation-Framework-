import{Page} from '@playwright/test'


export class LoginPage{


    //!global Variable and also it is userdefine
    page:Page

    //?to reuse the page reference to all page
    constructor(page:Page){
        this.page=page

    }

    async loadUrl(url:string){
        await this.page.goto(url)
    }

    async EnterUsername(username:string){
       await this.page.getByPlaceholder("Username").fill(username);
    }

    async EnterPassword(password:string){

        await this.page.getByPlaceholder("Password").fill(password);

    }

    async clickOnSubmitButton(){
        await this.page.getByRole('button',{name:'Login'}).click();
    }

}