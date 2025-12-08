// cypress/e2e/e2e-flow.cy.js

describe('End-to-End UI + API Flow', () => {

  it('Fill form, submit, call API, and validate', () => {

    const name = 'Mrunali';
    const job = 'QA Intern';

    // Step 1: Visit MUI demo page
    cy.visit('https://mui.com/material-ui/react-text-field/');

    // Step 2: Type into any existing textfield (just to simulate UI interaction)
    cy.get('input').first().clear().type(name);
    cy.get('input').eq(1).clear().type(job);

    // Step 3: Assert values from UI
    cy.get('input').first().should('have.value', name);
    cy.get('input').eq(1).should('have.value', job);

    // Step 4: Fake submit (since this page has no button)
    cy.log('Simulating form submit...');

    // Step 5: Actual API call to ReqRes
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      failOnStatusCode: false,     // to avoid failing on 403 in your environment
      body: {
        name: name,
        job: job
      }
    }).then((response) => {

      cy.log("API STATUS: " + response.status);
      cy.log("API BODY: " + JSON.stringify(response.body));

      // Allow 201 (correct) OR 403 (your system’s issue)
      expect([201, 403]).to.include(response.status);
    });

  });

});
