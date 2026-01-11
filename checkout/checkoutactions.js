import CheckoutObjects from "./checkoutobjects"

export default class CheckoutAction {

  constructor(page) {
    this.page = page;
    this.checkout = new CheckoutObjects(page);
  }

  async fillCheckoutInfo(first, last, zip) {
    await this.checkout.firstName.fill(first);
    await this.checkout.lastName.fill(last);
    await this.checkout.postalCode.fill(zip);
    await this.checkout.continueBtn.click();
  }

  async getTotalPrice() {
    return await this.checkout.totalLabel.textContent();
  }

  async finishOrder() {
    await this.checkout.finishBtn.click();
  }

  async getSuccessMessage() {
    return await this.checkout.successMsg.textContent();
  }
}
