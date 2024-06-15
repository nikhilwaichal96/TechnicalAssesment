class ScoresAndFixturePage {
    constructor(page) {
      this.page = page;
    }
  
    async open() {
      await this.page.goto('https://www.bbc.com/sport/football/scores-fixtures');
    }

    async getListOfAllTeams(){
        const teams = await this.page.locator(`//div[contains(@class,'TeamNameWrapper')]//span[contains(@class,'DesktopValue')]`).all();
        if (teams.length === 0) {
            console.log('There are no matches today');
        } 
        return teams;
    }

    async clickOnSearchBBCInputBox(){
      await this.page.locator(`//div[@aria-label='Search BBC']`).click();
    }
    
    async clickOnSignInLink(){
      await this.page.locator(`a[class*='AccountLink']`).click()
    }
}

module.exports = ScoresAndFixturePage;
