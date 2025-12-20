const BasePage = require('./BasePage');
 
class CartPage extends BasePage {
  constructor(page) {
    super(page);
  }
 
  async clickCheckout() {
    // await this.page.locator("span.badge").filter({ hasText: '1'}).waitFor({timeout: 40000});
    await this.page.locator("//a[contains(@href,'/bookstore/cart')]").click();
    await this.page.waitForURL('**/cart', {timeout: 40000});
    await this.page.getByTestId('checkout').click();
    await this.page.waitForURL('**/checkout', {timeout: 40000});
 
  }
}
 
module.exports = CartPage;