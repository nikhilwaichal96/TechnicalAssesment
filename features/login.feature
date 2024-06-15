Feature: As a QA, I would like to verify all negative scenarios for login

    Scenario Outline: Verify negative email scenarios during login
        Given I open the scores & fixtures page
        And I click on sign in link
        When I login with "<email>" email
        Then I should see <errorMessage>
        Examples:
            | email                   | errorMessage                                                              |
            |                         | "Something's missing. Please check and try again."                        |
            | invalidEmail            | "Sorry, that email doesn’t look right. Please check it's a proper email."  |
            | user@domain             | "Sorry, that email doesn’t look right. Please check it's a proper email." |
            | @domain.com             | "Sorry, that email doesn’t look right. Please check it's a proper email." |
            | user@.com               | "Sorry, that email doesn’t look right. Please check it's a proper email." |
            | user@domain..com        | "Sorry, that email doesn’t look right. Please check it's a proper email." |
            | user@domain.c           | "Sorry, that email doesn’t look right. Please check it's a proper email." |
            | invalid@domain.com.     | "Sorry, that email doesn’t look right. Please check it's a proper email." |
            | nikhilwaichal@yahoo.com | "We don't recognise that email"                                           |