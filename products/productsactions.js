import ProductsObjects from './productsobjects'

export default class ProductsAction {

  constructor(page) {
    this.page = page;
    this.products = new ProductsObjects(page);
  }

  async resetAppState() {
    await this.products.menuButton.click();
    await this.products.resetApp.click();
  }

  async logout() {
    await this.products.menuButton.click();
    await this.products.logout.click();
  }
  async logoutAfterReset() {
    await this.products.logout.click();
  }
  async addItems(count) {
    for (let i = 0; i < count; i++) {
      await this.products.addToCartBtn.nth(i).click();
    }
  }

  async sortZtoA() {
    await this.products.filter.selectOption('za');
  }

  async addFirstItem() {
    await this.products.addToCartBtn.first().click();
  }

  async goToCart() {
    await this.products.cartIcon.click();
  }
}
