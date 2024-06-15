Feature: Validate Exchange Rate API

  Scenario: Verify the API response
    Given I send a request to API
    Then the response status should be 200
    And count the total number of currencies returned
    And validate currency "GBP" should be in the response
