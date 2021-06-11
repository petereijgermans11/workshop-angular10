import {Given} from 'cypress-cucumber-preprocessor/steps'

beforeEach(() => {
  cy.fixture('courses.json').as("coursesJSON"); // use alias for async

  cy.server();  // Start a server to begin routing responses to cy.route(), and to change the behavior of network requests

  cy.route('/api/courses', "@coursesJSON").as("courses"); // use alias for async

  cy.visit('/');
});

Given('I open the app to see all beginner courses', () => {
  cy.contains("All Courses");

  cy.wait('@courses');
})

Then('I see {int} beginner courses', (countBeginnerCourses) => {
  cy.get("mat-card").should("have.length", countBeginnerCourses);
})


Given('I want to see all advanced courses', () => {
  cy.contains("All Courses");

  cy.wait('@courses');
})

And('I see {int} tabs', (countTabs) => {
  cy.get('.mat-tab-label').should("have.length", countTabs);
})

And('I click on the second tab', () => {
  cy.get('.mat-tab-label').last().click();
  cy.get('.mat-tab-body-active .mat-card-title').its('length').should('be.gt', 1);
})

Then('I see the advanced course {string}', (courseName) => {
  cy.get('.mat-tab-body-active .mat-card-title').first()
    .should('contain', courseName);
})

Given('I edit the first advanced course', () => {
  cy.get(':nth-child(1) > .mat-card-actions > .mat-accent > .mat-button-wrapper').last().click();

})

And('I edit description', () => {
  cy.get('[data-cy=dialog-text-area]').type('HHHHIIIII')
})
