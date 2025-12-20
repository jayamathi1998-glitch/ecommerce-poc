const BasePage = require('./BasePage');
 
class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
  }
 
  async enterAddress(billing) {
    await this.page.locator('#name').fill(billing.name);
    await this.page.locator('#address').fill(billing.address);
    await this.page.locator('#card-name').fill(billing.holdername);
    await this.page.locator('#card-number').fill(billing.cardnumber);
    await this.page.locator('#card-expiry-month').fill(billing.expirymonth);
    await this.page.locator('#card-expiry-year').fill(billing.expiryyear);
    await this.page.locator('#card-cvc').fill(billing.cardcvc);
  }
 
  async clickPurchase() {
    await this.page.getByTestId('purchase').click();
  }
}
 
module.exports = CheckoutPage;