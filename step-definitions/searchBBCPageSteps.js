const { Given, Then, When } = require('@cucumber/cucumber');
const SearchBBCPage = require('../page-objects/SearchBBCPage.js');
let searchBBCPage;

When('I search for {string} article', async function (articleName) {
    console.log(articleName)
    searchBBCPage = new SearchBBCPage(this.page);
    await searchBBCPage.searchArticle(articleName);
})

Then('print first and last article headline', async function () {
    const articlesLength = await searchBBCPage.getArticlesLength()
    console.log(await searchBBCPage.getArticleHeadLine(0))
    console.log(await searchBBCPage.getArticleHeadLine(articlesLength - 1))
})