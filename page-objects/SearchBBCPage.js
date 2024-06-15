class SearchBBCPage {
  constructor(page) {
    this.page = page;
  }

  async searchArticle(articleName) {
    await this.page.getByPlaceholder('Search the BBC').fill(articleName);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async getArticlesLength() {
    const articleHeadlines = await this.page.locator(`//p[contains(@class,'PromoHeadline')]//span[@aria-hidden='true']`).all();
    return articleHeadlines.length;
  }
  async getArticleHeadLine(index){
    const articleHeadlines = await this.page.locator(`//p[contains(@class,'PromoHeadline')]//span[@aria-hidden='true']`).all();
    return articleHeadlines[index].innerText()
  }
}
module.exports = SearchBBCPage;