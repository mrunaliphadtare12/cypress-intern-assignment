describe('UI Automation - MUI Demos', () => {
  it('Text Field Form Interaction', () => {
    cy.visit('https://mui.com/material-ui/react-text-field/')


    cy.get('input').eq(0).type('Mrunali')
    cy.get('input').eq(1).type('test@example.com')
    cy.get('input').eq(2).type('12345')

    cy.get('input').eq(0).should('have.value', 'Mrunali')
    cy.get('input').eq(1).should('have.value', 'test@example.com')
    cy.get('input').eq(2).should('have.value', '12345')
  })

  it('Dropdown Selection (MUI Select)', () => {
    cy.visit('https://mui.com/material-ui/react-select/')

  })

  it('Autocomplete / Auto-suggest', () => {
    cy.visit('https://mui.com/material-ui/react-autocomplete/')

  })

  it('Table Interaction', () => {
    cy.visit('https://mui.com/material-ui/react-table/')

  })
})
