const BasePage = require('./BasePage');
 
class OrdersPage extends BasePage {
  constructor(page) {
    super(page);
  }
 
  async deleteOrder() {
    await this.page.getByRole('button', { name: 'Delete All Orders' });
  }
}
 
module.exports = OrdersPage;