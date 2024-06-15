class SignInPage {
    constructor(page) {
        this.page = page;
        this.emailInputBox = this.page.locator(`input[name='email']`)
        this.continueButton = this.page.locator(`button[type='submit']`)
        this.errorMessage = this.page.locator(`div[data-bbc-title*='error']`)
    }

    async enterEmail(emailID) {
        await this.emailInputBox.fill(emailID)
    }
    async clickOnContinueButton() {
        await this.continueButton.click()
    }
    async getErrorMessage() {
        return await this.errorMessage.innerText()
    }
}

module.exports = SignInPage;
