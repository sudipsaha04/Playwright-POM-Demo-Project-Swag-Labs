export default class checkoutobjects {

  constructor(page) {
    this.page = page;

    this.firstName = this.page.locator("//input[@id='first-name']");
    this.lastName = this.page.locator("//input[@id='last-name']");
    this.postalCode = this.page.locator("//input[@id='postal-code']");
    this.continueBtn = this.page.locator("//input[@id='continue']");
    this.finishBtn = this.page.locator("//button[@id='finish']");
    this.totalLabel = this.page.locator("//div[@class='summary_total_label']");
    this.successMsg = this.page.locator("//h2[@class='complete-header']");
  }
}
