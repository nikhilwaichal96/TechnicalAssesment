Feature: As a sports user, I would like to read about all articles related to sports
Scenario: Use the search option to find all articles related to ‘sports’.
Given I open the scores & fixtures page
When I click on the search BBC input box
And I search for "sports" article
Then print first and last article headline
