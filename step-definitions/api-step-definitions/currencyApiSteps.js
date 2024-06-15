const { Given, Then } = require('@cucumber/cucumber');
const { expect,request } = require('playwright/test');
let response;
let apiContext

Given('I send a request to API', async function () {
  response = await this.apiContext.get('https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD');
  console.log('Response of Api',await response.json())
});

Then('the response status should be {int}', async function (status) {
  expect(response.status()).toBe(status);
});

Then('count the total number of currencies returned', async function () {
  const responseBody = await response.json();
  const currencies = Object.keys(responseBody.conversion_rates);
  console.log(`Total number of currencies: ${currencies.length}`);
});

Then('validate currency {string} should be in the response', async function (currency) {
  const responseBody = await response.json();
  const currencies = Object.keys(responseBody.conversion_rates);
  expect(currencies).toContain(currency);
});