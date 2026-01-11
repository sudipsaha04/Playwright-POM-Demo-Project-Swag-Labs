import CartObjects from "./cartobjects";

export default class CartAction {

  constructor(page) {
    this.page = page;
    this.cart = new CartObjects(page);
  }

  async getProductNames() {
    return await this.cart.productNames.allTextContents();
  }
  async getProductPrices() {
    return await this.cart.productPrices.allTextContents();
  }
  async checkout() {
    await this.cart.checkoutButton.click();
  }
}
