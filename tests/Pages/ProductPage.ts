import {LoginPage } from './LoginPage'

export class ProductPage extends LoginPage{

async selectProducts(productNames: string[]){
    for (const productName of productNames){
        const product = this.page.locator('.inventory_item').filter({hasText: productName});
        await product.getByRole('button', {name: 'Add to cart'}).click();
    }
}

async selectingProducts(){

    await this.page.locator("#add-to-cart-sauce-labs-bike-light").click();
    await this.page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']").click();

}

async clickOnCart(){
    await this.page.locator('.shopping_cart_link').click();
}

async clickOnLogout(){
 
     await this.page.getByRole('button',{name:'Open Menu'}).click() ;
     await this.page.locator("//a[text()='Logout']").click();

} 

}