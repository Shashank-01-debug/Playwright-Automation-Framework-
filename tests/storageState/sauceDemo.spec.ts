import {test,expect} from '@playwright/test'
//annotation
test.use({storageState:"Data/SF_Login.json"})


test ('use of storage state', async ({page})=>{

    //no login needed, cookie comes from storage state
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/inventory.html/);
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
})
