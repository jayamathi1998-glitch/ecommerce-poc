const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
 
setDefaultTimeout(120000);
 
Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });
 
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  await this.page.setViewportSize({ width: 1280, height: 800 });
});
 
After(async function () {
  await this.browser.close();
});
 