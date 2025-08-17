import { Given, When, And, Then, } from "cypress-cucumber-preprocessor/steps"

Given('que estou na página Web Tables', () => {
    cy.visit('/webtables')
})
When('clico no botão Add', () => { cy.clickBtnAdd() })


Then('deve abrir um modal intitulado {string}', (mensagem) => {
    cy.validationModalAbert(mensagem)
})

And('evidencio todos os campos que  deve está visíveis e vazios conforme especificação:',
    () => {
        cy.evidencCamposRegistreForm()
        cy.printTela('ValidacaoRegistrationVazio')
    })