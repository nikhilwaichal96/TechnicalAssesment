// scoresAndFixture.js
const { Given, Then, When } = require('@cucumber/cucumber');
const ScoresAndFixturePage  = require('../page-objects/ScoresAndFixturePage');

let scoresAndFixturePage;

Given('I open the scores & fixtures page', async function () {
    scoresAndFixturePage = new ScoresAndFixturePage(this.page);
    await scoresAndFixturePage.open();  
});

Then('I should be able to see all team names with a match today',async function(){
    const teams = await scoresAndFixturePage.getListOfAllTeams()
    for (const team of teams) {
        const teamName = await team.innerText();
        console.log(teamName);
    }
})

When('I click on the search BBC input box',async function(){
    await scoresAndFixturePage.clickOnSearchBBCInputBox();
})
