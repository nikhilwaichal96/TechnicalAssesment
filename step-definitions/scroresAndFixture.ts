const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
Given('I open the scores & fixtures page', async function () {
    await this.page.goto('https://www.bbc.com/sport/football/scores-fixtures');
});
