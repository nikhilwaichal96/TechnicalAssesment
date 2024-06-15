class SignInPage {
    constructor(page) {
      this.page = page;
    }
  
    async enterEmail(emailID){
        await this.page.locator(`input[name='email']`).fill(emailID)
    }
    async clickOnContinueButton(){
        await this.page.locator(`button[type='submit']`).click()
    }
    async getErrorMessage(){
        return await this.page.locator(`div[data-bbc-title*='error']`).innerText()
    }
}

module.exports = SignInPage;
