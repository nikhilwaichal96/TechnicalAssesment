class SearchBBCPage {
  constructor(page) {
    this.page = page;
    this.searchInputLocator = this.page.getByPlaceholder('Search the BBC');
    this.searchButtonLocator = this.page.getByRole('button', { name: 'Search' });
    this.articleHeadlineLocator = this.page.locator(`//p[contains(@class,'PromoHeadline')]//span[@aria-hidden='true']`);
  }

  async searchArticle(articleName) {
    await this.searchInputLocator.fill(articleName);
    await this.searchButtonLocator.click();
  }

  async getArticlesLength() {
    const articleHeadlines = await this.articleHeadlineLocator.all();
    return articleHeadlines.length;
  }
  async getArticleHeadLine(index) {
    const articleHeadlines = await this.articleHeadlineLocator.all();
    return articleHeadlines[index].innerText()
  }
}
module.exports = SearchBBCPage;