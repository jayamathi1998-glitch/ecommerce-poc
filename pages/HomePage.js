const BasePage = require('./BasePage');
 
class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }
 
  async searchProduct(productName) {
 
    await this.page.getByPlaceholder('Enter keywords...').fill(productName);
    await this.page.getByRole('button', { name: 'Search' }).click();
    // await this.page.waitForLoadState('networkidle');
 
  }
 
  async selectFirstProductAndAddToCart() {
    await this.page.getByTestId('cart-674108466cb6226060a20d44').click();
    await this.page.waitForLoadState('networkidle');
    // await this.page.getByRole('button', { name: 'Add To Card' });
    // await this.page.waitForLoadState('networkidle');
 
  }
}
 
module.exports = HomePage;