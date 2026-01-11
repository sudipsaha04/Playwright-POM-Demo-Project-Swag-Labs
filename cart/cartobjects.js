export default class cartobjects {

  constructor(page) {
    this.page = page;

    this.checkoutButton = this.page.locator("//button[@id='checkout']");
    this.productNames = this.page.locator("//div[@class='inventory_item_name']");
    this.productPrices = this.page.locator("//div[@class='inventory_item_price']");
  }
}
