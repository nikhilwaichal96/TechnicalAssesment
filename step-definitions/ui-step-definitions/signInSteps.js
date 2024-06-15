const { Given, Then, When } = require('@cucumber/cucumber');
const SignInPage = require('../../page-objects/LoginPage.js');
const { expect } = require('playwright/test');
let signInPage;

When('I login with {string} email', async function (email) {
    signInPage = new SignInPage(this.page);
    await signInPage.enterEmail(email)
    await signInPage.clickOnContinueButton();
});

Then('I should see {string}', async function (errorMessage) {
    expect(await signInPage.getErrorMessage()).toBe(errorMessage)
    console.log(await signInPage.getErrorMessage())
})

