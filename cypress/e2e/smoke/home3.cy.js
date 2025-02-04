import '@testing-library/cypress/add-commands'

describe('Validate Hero banner message', () => {

  it('QATEST-1315 - EU', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'))

    cy.findByTestId('typewriter-wrapper').findByText('Forex').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Cryptocurrencies').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Stocks & indices').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Commodities').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Derived Indices').should('be.visible')
    cy.findByLabelText('create free demo account').click()
    cy.findByRole('heading', { name: 'Sign up' }).should('be.visible')
  })

})
