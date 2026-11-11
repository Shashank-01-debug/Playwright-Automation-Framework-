import { expect, test } from '@playwright/test';
import { Checkout_CompletePage } from '../Pages/Checkout_CompletePage';

test('complete SauceDemo checkout with two products', async ({ page }) => {
  const app = new Checkout_CompletePage(page);

  await app.loadUrl('https://www.saucedemo.com/');
  await app.EnterUsername('standard_user');
  await app.EnterPassword('secret_sauce');
  await app.clickOnSubmitButton();
  await expect(page.locator('.title')).toHaveText('Products');

  await app.selectProducts(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  await app.clickOnCart();
  await expect(page.locator('.cart_item')).toHaveCount(2);
  await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible();
  await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Bike Light' })).toBeVisible();

  await app.clickOnCheckOut();
  await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  await app.enterDetails('Test', 'User', '12345');
  await app.clickOnContinueButton();
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');
  await expect(page.locator('.summary_subtotal_label')).toHaveText('Item total: $39.98');
  await app.verifyShopping();

  await app.clickOnFinishButton();
  await app.ConfirmationOrder();
});