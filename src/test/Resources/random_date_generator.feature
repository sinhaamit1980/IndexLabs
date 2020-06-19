Feature: Random Date Generator

  Scenario: Number of random date to generate corresponds to the number in how many date to generate field
    Given I am on the random date generator page
    When I enter '21' for the number of date option
    Then I can see '21' dates are generated


  Scenario: Generate random Dates button keep generating new dates
    Given I am on the random date generator page
    And I enter '1' for the number of date option
    When I click 'generate random Dates' button
    Then a new set of date is generated

  Scenario: Generate date in different format
    Given I am on the random date generator page
    And I enter '1' for the number of date option
    When I provide a date format 'Year Month Date hh:mm:ss'
    Then I can see the date generated in 'Year Month Date hh:mm:ss' format

  Scenario: Not providing custom date format when output date format is set to custom date format
    Given I am on the random date generator page
    And I enter '1' for the number of date option
    When I provide a date format 'Custom date format'
    And I clear the custom date format field
    And I click 'generate random Dates' button
    Then no random dates are generated

  Scenario: Generate custom Date format
    Given I am on the random date generator page
    And I enter '1' for the number of date option
    When I provide custom date format 'YYYY#MM#DD'
    Then I can see the date generated in this format

  Scenario: All date generated are of same format which is set in output date format
    Given I am on the random date generator page
    And I enter '3' for the number of date option
    When I provide a date format 'Year Month Date hh:mm:ss'
    Then I can see the date generated in 'Year Month Date hh:mm:ss' format

  Scenario: Changing date format updated the result with the format selected
    Given I am on the random date generator page
    And I enter '1' for the number of date option
    When I provide a date format 'Year Month Date hh:mm:ss'
    Then I can see the date generated in 'Year Month Date hh:mm:ss' format
    When I provide a date format 'ISO 8601'
    Then I can see the date generated in 'ISO 8601' format

