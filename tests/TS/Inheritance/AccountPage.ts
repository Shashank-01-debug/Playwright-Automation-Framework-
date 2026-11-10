import { WelcomePage } from "./WelcomePage.ts";

class AccountPage extends WelcomePage{
   
    clickOnAccount(){
        console.log('click on account');
        
    }


    
}

let account = new AccountPage();
account.enterUserName();
account.enterPassword();
account.clickOnSubmitButton();
account.clickOnCRMSFA();
account.clickOnAccount();