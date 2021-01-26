import {Then} from 'cypress-cucumber-preprocessor/steps';

Then(`I see All Courses in the title`, (title) => {
  cy.get('[data-cy=header-courses]').should('contain', "All Courses")
  //cy.get('[data-cy=header-courses]')
})
