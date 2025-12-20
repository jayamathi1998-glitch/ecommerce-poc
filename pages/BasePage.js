class BasePage {
  constructor(page) {
    this.page = page;
  }
 
  async open(url) {
    await this.page.goto(url);
  }
 
  async clickByRole(role, options) {
    await this.page.getByRole(role, options).click();
  }
 
  async clickByText(text) {
    await this.page.getByText(text).click();
  }
 
  async typeByPlaceholder(placeholder, value) {
    await this.page.getByPlaceholder(placeholder).fill(value);
  }
}
 
module.exports = BasePage;