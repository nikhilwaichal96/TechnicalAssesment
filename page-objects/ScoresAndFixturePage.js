class ScoresAndFixturePage {
  constructor(page) {
    this.page = page;
    this.teamsLocator = this.page.locator(`//div[contains(@class,'TeamNameWrapper')]//span[contains(@class,'DesktopValue')]`);
    this.searchBBCInputBox = this.page.locator(`//div[@aria-label='Search BBC']`);
    this.signInLink = this.page.locator(`a[class*='AccountLink']`)
  }

  async open() {
    await this.page.goto('https://www.bbc.com/sport/football/scores-fixtures');
  }

  async getListOfAllTeams() {
    const teams = await this.teamsLocator.all();
    if (teams.length === 0) {
      console.log('There are no matches today');
    }
    return teams;
  }

  async clickOnSearchBBCInputBox() {
    await this.searchBBCInputBox.click();
  }

  async clickOnSignInLink() {
    await this.signInLink.click()
  }
}

module.exports = ScoresAndFixturePage;
