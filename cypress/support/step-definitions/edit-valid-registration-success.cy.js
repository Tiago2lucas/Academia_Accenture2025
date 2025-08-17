import { When, And, } from "cypress-cucumber-preprocessor/steps"


When('seleciono o icone de edição para último registro', () => {
    cy.editarRegistroAleatorio()
        .printTela('Pre-Edicao')
})

And('o modal {string} é exibido', (mensagem) => {
    cy.validationModalAbert(mensagem)
})

And('altero os seguintes campos:', () => {
    cy.preencherCamposEdicao()
})

And('evidêncio os dados atualizados devem ser refletidos na tabela', () => {
    cy.clicarSubmit()
        .validarAlteracaoRegistro()
        .printTela('Pos-Edicao')

})