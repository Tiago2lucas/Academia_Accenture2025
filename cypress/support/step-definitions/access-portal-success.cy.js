import { Given, When, And, Then, } from "cypress-cucumber-preprocessor/steps";

Given('que estou na página principal do portal', () => {
    cy.visit('/')
})
When('clico na opção Elements', () => { cy.clcikElements() })
And('clico na opção Web Tables', () => { cy.clcikElementsWebTable() })
Then('evidencio que estou na página Web Tables', () => {
    cy.validationTitle()

})