import { Given, When, And, Then, Before, After, } from "cypress-cucumber-preprocessor/steps";

Given('que estou na página Web Tables', () => {
    cy.visit('/webtables')
})
When('clico no botão Add', () => { cy.clickBtnAdd() })


Then('deve abrir um modal intitulado {string}', (mensagem) => { cy.validationModalAbert(mensagem) })