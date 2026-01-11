import { test, expect } from '@playwright/test';
import LoginAction from '../login/loginactions';

const usernameInput = "locked_out_user";
const passwordInput = "secret_sauce";

test.describe("Question 01 ", () => {

    let login, error;
    test.beforeEach(({ page }) => {
        login = new LoginAction(page);
    });

    test("Locked out user verify", async ({ page }) => {


        await page.goto('https://www.saucedemo.com/');
        await login.loginUser(usernameInput, passwordInput);

        error = await login.getErrorMessage();
        expect(error).toContain('locked out');
    });

});

