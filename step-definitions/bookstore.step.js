const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const data = require('../testdata/testData.json');
 
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const OrdersPage = require('../pages/OrdersPage');
 
Given('user is logged into the bookstore', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.openLoginPage();
  await this.loginPage.login(data.user);
  await this.loginPage.allBooks();
});
 
Then('user should see books list home page', async function () {
  await expect(this.page.getByText('Books List')).toBeVisible();
});
 
When('user searches a product and adds it to cart', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.searchProduct(data.product.name);
  await this.homePage.selectFirstProductAndAddToCart();
 
  this.cartPage = new CartPage(this.page);
  await this.cartPage.clickCheckout();
});
 
Then('user should see checkout page', async function () {
  await expect(this.page.getByText('Checkout')).toBeVisible();
});
 
When('user completes checkout and purchase', async function () {
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.enterAddress(data.billing);
  await this.checkoutPage.clickPurchase();
});
 
Then('user deletes the order', async function () {
  this.ordersPage = new OrdersPage(this.page);
  await this.ordersPage.deleteOrder();
});
 