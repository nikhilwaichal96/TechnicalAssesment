const { Before, After } = require('@cucumber/cucumber');

Before(async function () {
  await this.openApiContext();
});

After(async function () {
  await this.disposeApiContext();
});
