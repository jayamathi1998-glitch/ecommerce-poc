const BasePage = require('./BasePage');
 
class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }
 
  async openLoginPage() {
    await this.page.goto('https://practice.expandtesting.com/bookstore');
    await this.page.waitForLoadState('networkidle');
    await this.page.locator("//a[text()='Sign In']").click();
    await this.page.waitForURL('**/signin', {timeout: 40000});
    await this.page.locator("//a[text()='Sign Up!']").click();
    await this.page.waitForURL('**/signup', {timeout: 40000});
  }
 
 async login(user) {
    await this.page.getByPlaceholder('Enter your name...').fill(user.username);
    await this.page.getByPlaceholder('Enter your email...').fill(user.email);
    await this.page.locator('#password').fill(user.password);
    await this.page.locator('#password2').fill(user.password2);
    await this.page.locator('#submit').click();
  }
 
  async allBooks() {
    await this.page.locator("//a[text()='All Books']").click();
    await this.page.waitForURL('**/bookstore', {timeout: 40000});
   
  }
}
 
module.exports = LoginPage;