export default class productsobjects {

  constructor(page) {
    this.page = page;

    this.menuButton = this.page.locator("//button[@id='react-burger-menu-btn']");
    this.resetApp = this.page.locator("//a[@id='reset_sidebar_link']");
    this.logout = this.page.locator("//a[@id='logout_sidebar_link']");
    this.filter = this.page.locator("//select[@data-test='product-sort-container']");
    this.addToCartBtn = this.page.locator("//button[contains(text(),'Add to cart')]");
    this.cartIcon = this.page.locator("//a[@class='shopping_cart_link']");
  }
}
