import { BasePage } from './BasePage';

export class ProductPage extends BasePage{

async selectProducts(productNames: string[]){
    for (const productName of productNames){
        const product = this.page.locator('.inventory_item').filter({hasText: productName});
        await this.click(product.getByRole('button', {name: 'Add to cart'}));
    }
}

async selectingProducts(){

    await this.click(this.page.locator("#add-to-cart-sauce-labs-bike-light"));
    await this.click(this.page.locator("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']"));

}

async clickOnCart(){
    await this.click(this.page.locator('.shopping_cart_link'));
}

async clickOnLogout(){

     await this.click(this.page.getByRole('button',{name:'Open Menu'}));
     await this.click(this.page.locator("//a[text()='Logout']"));

}

}
