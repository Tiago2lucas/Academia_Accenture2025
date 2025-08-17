import { CARD_ELEMENTS, ELEMENTS_WEB_TABLES, TITLE_WEB_TABLES } from "../commands"

Cypress.Commands.add('clcikElements', () => {
    cy.get(CARD_ELEMENTS).contains('Elements').should('be.visible').click()
})
Cypress.Commands.add('clcikElementsWebTable', () => {
    cy.get(ELEMENTS_WEB_TABLES).contains('Web Tables').should('be.visible',).click()
})
Cypress.Commands.add('validationTitle', () => {
    cy.get(TITLE_WEB_TABLES).contains('Web Tables').should('be.visible')

})




