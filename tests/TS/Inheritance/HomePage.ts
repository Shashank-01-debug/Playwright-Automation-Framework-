import { WelcomePage } from "./WelcomePage.ts";

class HomePage extends WelcomePage{

    clickOnLeads(){
        console.log('click on Leads');

        
    }

    clickOnAccounts(){
        console.log('click on Accounts');
        
    }


}

let homePage = new HomePage();
console.log('_'.repeat(30));

homePage.enterUserName();
homePage.enterPassword();
homePage.clickOnSubmitButton();
homePage.clickOnCRMSFA();
homePage.clickOnLeads();