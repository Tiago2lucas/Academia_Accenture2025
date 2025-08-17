
import { When, Then, } from "cypress-cucumber-preprocessor/steps"


When('eu seleciono o ícone de Excluir para esse registro', () => {
    cy.excluirUltimoRegistro()
})
Then('evidêncio o registro deletado', () => {
    cy.validarUltimaLinhaVazia().printTela('Evidencia_Remoção')
}) 