import { Given, When, And, Then, } from "cypress-cucumber-preprocessor/steps";

When('edito um registro e insiro no campo Age negativa', () => { cy.preencheDadosAgeInvalido() })

And('o modal apresenta um alert no campo Age', () => {
    cy.alertErroAge()
})

Then('as alterações não devem ser salvas no campo Age', () => {
    cy.clicarSubmit()
    cy.printTela('AltecaoNaoSalvaAge')
})

When('edito um registro e insiro no campo Email sem @', () => { cy.preencheDadosEmailInvalido() })

And('o modal apresenta um alert no campo Email', () => {
    cy.clicarSubmit()
    cy.alertErroEmail()
})

Then('as alterações não devem ser salvas no campo Email', () => {
    cy.printTela('AltecaoNaoSalvaEmail')
})

When('edito um registro e insiro no campo Salary', () => {
    cy.preencheDadosSalaryInvalido()
})

And('o modal apresenta um alert no campo Salary', () => {
    cy.alertErroSalary()
})
Then('as alterações não devem ser salvas no campo Salary', () => {
    cy.clicarSubmit()
    cy.printTela('AltecaoNaoSalva')
})