import {Given} from 'cypress-cucumber-preprocessor/steps'

// const url = 'http://localhost:4200/'

beforeEach(() => {
  cy.fixture('courses.json').as("coursesJSON");

  cy.server();

  cy.route('/api/courses', "@coursesJSON").as("courses");

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
