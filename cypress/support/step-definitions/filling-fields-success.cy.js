import { Given, When, And, Then, } from "cypress-cucumber-preprocessor/steps"

And('que o modal Registration Form está aberto', () => {
    cy.evidencCamposRegistreForm()
})
When('preencho todos os campos com dados válidos gerados por um gerador:', () => {
    cy.prencheDados()
    cy.printTela('ValidacioDadoPreenchidos')
})
And('clico no botão Submit', () => {
    cy.clickSubmitBtn()
})

Then('o novo registro deve ser exibido na tabela', () => {

    cy.get('@userData').then((userData) => {
        cy.validateRecord(userData)
    })
})
And('realizo a evidência do registro criado', () => {
    cy.printTela('ValidacaoCadastroNovo')
})