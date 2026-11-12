import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { ProductPage } from '../Pages/ProductPage';
import { YourCartPage } from '../Pages/YourCartPage';
import { Checkout_YourInformationPage } from '../Pages/Checkout_YourInformationPage';
import { Checkout_YourOverviewPage } from '../Pages/Checkout_YourOverviewPage';
import { Checkout_CompletePage } from '../Pages/Checkout_CompletePage';

test('complete SauceDemo checkout with two products', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new YourCartPage(page);
  const informationPage = new Checkout_YourInformationPage(page);
  const overviewPage = new Checkout_YourOverviewPage(page);
  const completePage = new Checkout_CompletePage(page);

  await loginPage.loadUrl('https://www.saucedemo.com/');
  await loginPage.EnterUsername('standard_user');
  await loginPage.EnterPassword('secret_sauce');
  await loginPage.clickOnSubmitButton();
  await expect(page.locator('.title')).toHaveText('Products');

  await productPage.selectProducts(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  await productPage.clickOnCart();
  await expect(page.locator('.cart_item')).toHaveCount(2);
  await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible();
  await expect(page.locator('.cart_item').filter({ hasText: 'Sauce Labs Bike Light' })).toBeVisible();

  await cartPage.clickOnCheckOut();
  await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
  await informationPage.enterDetails('Test', 'User', '12345');
  await informationPage.clickOnContinueButton();
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');
  await expect(page.locator('.summary_subtotal_label')).toHaveText('Item total: $39.98');
  await overviewPage.verifyShopping();

  await overviewPage.clickOnFinishButton();
  await completePage.ConfirmationOrder();
});
