const { setWorldConstructor,setDefaultTimeout  } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

class CustomWorld {
  async openBrowser() {
    setDefaultTimeout(60 * 1000); 
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
