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
}

module.exports = ScoresAndFixturePage;
