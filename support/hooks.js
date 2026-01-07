const { Before, After, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
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
 
AfterStep(async function ({ result }) {
 
  if (result.status === 'PASSED') {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');
  }
 
});
 
After(async function () {
  await this.browser.close();
});
 