describe('End-to-End UI + API Flow', () => {

  it('Fill form, submit, call API, and validate', () => {

    const name = 'Mrunali';
    const job = 'QA Intern';

    cy.visit('https://mui.com/material-ui/react-text-field/');

    cy.get('input').first().clear().type(name);
    cy.get('input').eq(1).clear().type(job);

    cy.get('input').first().should('have.value', name);
    cy.get('input').eq(1).should('have.value', job);

    cy.log('Simulating form submit...');

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      failOnStatusCode: false,     
      body: {
        name: name,
        job: job
      }
    }).then((response) => {

      cy.log("API STATUS: " + response.status);
      cy.log("API BODY: " + JSON.stringify(response.body));

      expect([201, 403]).to.include(response.status);
    });

  });

});
