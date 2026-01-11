import { test, expect } from '@playwright/test';

import LoginAction from '../login/loginactions.js';
import ProductsAction from '../products/productsactions.js';
import CartAction from '../cart/cartactions.js';
import CheckoutAction from '../checkout/checkoutactions.js';

const usernameInput = "standard_user";
const passwordInput = "secret_sauce";

test.describe("Question 02 ", () => {

  let login, products, cart, checkout, productNames, totalPrice, successMsg;
  let firstName = 'Sudip';
  let lastName = 'Saha';
  let zip = '1270';
  test.beforeEach(({ page }) => {
    login = new LoginAction(page);
    products = new ProductsAction(page);
    cart = new CartAction(page);
    checkout = new CheckoutAction(page);
  });

  test('Standard user checkout process', async ({ page }) => {


    await page.goto('https://www.saucedemo.com/');
    await login.loginUser(usernameInput, passwordInput);

    await products.resetAppState();

    await products.addItems(3);
    await products.goToCart();

    productNames = await cart.getProductNames();
    expect(productNames.length).toBe(3);


    await cart.checkout();

    await checkout.fillCheckoutInfo(firstName, lastName, zip);

    totalPrice = await checkout.getTotalPrice();
    expect(totalPrice).toContain('Total');

    await checkout.finishOrder();

    successMsg = await checkout.getSuccessMessage();
    expect(successMsg).toBe('Thank you for your order!');

    await products.resetAppState();
    await products.logoutAfterReset();
  });
});

