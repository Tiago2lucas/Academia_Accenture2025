const CARD_ELEMENTS = 'h5'
const ELEMENTS_WEB_TABLES = '#item-3'
const TITLE_WEB_TABLES = 'h1'



Cypress.Commands.add('clcikElements', () => {
    cy.get(CARD_ELEMENTS).contains('Elements').should('be.visible').click()
})
Cypress.Commands.add('clcikElementsWebTable', () => {
    cy.get(ELEMENTS_WEB_TABLES).contains('Web Tables').should('be.visible',).click()
})
Cypress.Commands.add('validationTitle', () => {
    cy.get(TITLE_WEB_TABLES).contains('Web Tables').should('be.visible')

})




