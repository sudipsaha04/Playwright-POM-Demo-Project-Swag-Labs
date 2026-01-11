import loginobjects from "./loginobjects";


export default class LoginAction {

  constructor(page) {
    this.page = page;
    this.login = new loginobjects(page);
  }

  async loginUser(username, password) {
    await this.login.usernameInput.fill(username);
    await this.login.passwordInput.fill(password);
    await this.login.loginButton.click();
  }

  async getErrorMessage() {
    return await this.login.errorMessage.textContent();
  }
}


