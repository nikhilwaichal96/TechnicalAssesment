const { setWorldConstructor} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(100 * 1000);
class CustomWorld {
  async openBrowser() {
    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.setDefaultNavigationTimeout(30000);
    await this.page.setDefaultTimeout(30000);
  }

  async closeBrowser() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
