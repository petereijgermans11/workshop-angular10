Feature: Home test

  I want to display a list of courses

  Scenario: Display a list of beginner courses
    Given I open the app to see all beginner courses
    Then I see 9 beginner courses

  Scenario: Display a list of advanced courses
    Given I want to see all advanced courses
    And I see 2 tabs
    And I click on the second tab
    Then I see the advanced course "Angular Security Course"

  Scenario: Edit advanced course
    Given I edit the first advanced course
    And I edit description
