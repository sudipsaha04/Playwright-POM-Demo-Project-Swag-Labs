import { test, expect } from '@playwright/test';

import LoginAction from '../login/loginactions.js';
import ProductsAction from '../products/productsactions.js';
import CartAction from '../cart/cartactions.js';
import CheckoutAction from '../checkout/checkoutactions.js';

const usernameInput = "performance_glitch_user";
const passwordInput = "secret_sauce";
test.describe("Question 03 ", () => {


  let login, products, cart, checkout, productNames;
  let firstName = 'Sudip';
  let lastName = 'Saha';
  let zip = '1270';

  test.beforeEach(({ page }) => {
    login = new LoginAction(page);
    products = new ProductsAction(page);
    cart = new CartAction(page);
    checkout = new CheckoutAction(page);
  });
  test('Performance glitch user checkout process', async ({ page }) => {


    await page.goto('https://www.saucedemo.com/');
    await login.loginUser(usernameInput, passwordInput);

    await products.resetAppState();
    await products.sortZtoA();
    await products.addFirstItem();
    //await page.pause(3000);
    await products.goToCart();
    //await page.waitForTimeout(5000); //freeze wait

    productNames = await cart.getProductNames();
    const actualProductNames =productNames.length;
    const expectedProductNames = 1;
    expect(expectedProductNames).toBe(actualProductNames);
    //await page.waitForTimeout(5000);

    await cart.checkout();
    await checkout.fillCheckoutInfo(firstName, lastName, zip);

    const expectedPrice = "Total";
    const actualPrice = await checkout.getTotalPrice();
    expect(actualPrice).toContain(expectedPrice);
    await checkout.finishOrder();

    //await page.waitForTimeout(5000);
    const expectedMsg = "Thank you for your order!";
    const actualMSg = await checkout.getSuccessMessage();
    expect(expectedMsg).toBe(actualMSg);

    await products.resetAppState();
    //await page.waitForTimeout(5000);
 
    await products.logoutAfterReset();
  });

});





