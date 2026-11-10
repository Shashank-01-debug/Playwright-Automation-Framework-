import { LoginPage } from "./LoginPage.ts";

export class WelcomePage extends LoginPage{


    clickOnCRMSFA(){
        console.log('click on CRMSFA');
        
    }


}



//!create object for child class
let wp = new WelcomePage();

/*wp.enterUserName();
wp.enterPassword();
wp.clickOnSubmitButton();
wp.clickOnCRMSFA();
*/