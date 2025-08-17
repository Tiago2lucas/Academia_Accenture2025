import { When, And, Then } from "cypress-cucumber-preprocessor/steps"

When('edito um registro e deixo o campo First Name vazio', () => {
    cy.preencheDadosFirstNameVazio()
})

And('o modal apresenta um alert no campo First Name', () => {
    cy.alertErroFirstName()
})

Then('as alterações não devem ser salvas no campo First Name', () => {
    cy.clicarSubmit()
    cy.printTela('AltecaoNaoSalvaFirstName')
})

When('edito um registro e deixo o campo Last Name vazio', () => {
    cy.preencheDadosLastNameVazio()
})

And('o modal apresenta um alert no campo Last Name', () => {
    cy.alertErroLastName()
})

Then('as alterações não devem ser salvas no campo Last Name', () => {
    cy.clicarSubmit()
    cy.printTela('AltecaoNaoSalvaLastName')
})

When('edito um registro e insiro no campo Email sem @', () => {
    cy.preencheDadosEmailInvalido()
})

And('o modal apresenta um alert no campo Email', () => {
    cy.alertErroEmail()
})

Then('as alterações não devem ser salvas no campo Email', () => {
    cy.clicarSubmit()
    cy.printTela('AltecaoNaoSalvaEmail')
})


When('edito um registro e insiro no campo Age negativa', () => {
    cy.preencheDadosAgeInvalido()
})

And('o modal apresenta um alert no campo Age', () => {
    cy.alertErroAge()
})

Then('as alterações não devem ser salvas no campo Age', () => {
    cy.clicarSubmit()
    cy.printTela('AltecaoNaoSalvaAge')
})

When('edito um registro e insiro no campo Salary', () => {
    cy.preencheDadosSalaryInvalido()
})

And('o modal apresenta um alert no campo Salary', () => {
    cy.alertErroSalary()
})

Then('as alterações não devem ser salvas no campo Salary', () => {
    cy.clicarSubmit()
    cy.printTela('AltecaoNaoSalvaSalary')
})

When('edito um registro e deixo o campo Departament vazio', () => {
    cy.preencheDadosDepartmentVazio()
})

And('o modal apresenta um alert no campo Departament', () => {
    cy.alertErroDepartment()
})

Then('as alterações não devem ser salvas no campo Departament', () => {
    cy.clicarSubmit()
    cy.printTela('AltecaoNaoSalvaDepartment')
})
