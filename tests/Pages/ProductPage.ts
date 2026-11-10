import {LoginPage } from './LoginPage'

export class ProductPage extends LoginPage{

async selectingProducts(){

    await this.page.locator("#add-to-cart-sauce-labs-bike-light").click();
    await this.page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']").click();

}

async clickOnCart(){
    await this.page.getByRole('button',{name:'Cart, 2 items'}).click();
}

async clickOnLogout(){
 
     await this.page.getByRole('button',{name:'Open Menu'}).click() ;
     await this.page.locator("//a[text()='Logout']").click();

} 

}