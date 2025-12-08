describe('UI Automation - MUI Demos', () => {
  it('Text Field Form Interaction', () => {
    cy.visit('https://mui.com/material-ui/react-text-field/')

    // find input elements by selector (data-testid, id, etc.)
    // Example (you will adjust selectors by inspecting the page):
    cy.get('input').eq(0).type('Mrunali')
    cy.get('input').eq(1).type('test@example.com')
    cy.get('input').eq(2).type('12345')

    cy.get('input').eq(0).should('have.value', 'Mrunali')
    cy.get('input').eq(1).should('have.value', 'test@example.com')
    cy.get('input').eq(2).should('have.value', '12345')
  })

  it('Dropdown Selection (MUI Select)', () => {
    cy.visit('https://mui.com/material-ui/react-select/')

    // open dropdown, pick option, assert selected text
  })

  it('Autocomplete / Auto-suggest', () => {
    cy.visit('https://mui.com/material-ui/react-autocomplete/')

    // type partial text, choose from list, validate selected
  })

  it('Table Interaction', () => {
    cy.visit('https://mui.com/material-ui/react-table/')

    // read rows, assert cell content, maybe assert sorted order
  })
})
