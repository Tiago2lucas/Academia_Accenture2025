import { faker } from "@faker-js/faker"

const FIRST_NAME = '#firstName'
const LAST_NAME = '#lastName'
const EMAIL = '#userEmail'
const AGE = '#age'
const SALARY = '#salary'
const DEPARTMENT = '#department'
const BTN_SUBMIT = '#submit'

Cypress.Commands.add('editarRegistroAleatorio', () => {
    cy.get('.rt-tr-group:has([title="Edit"])').its('length').then(numRegistros => {
        const indiceAleatorio = Math.floor(Math.random() * numRegistros)

        cy.get('.rt-tr-group:has([title="Edit"])').eq(indiceAleatorio).as('linhaOriginal')
        cy.get('@linhaOriginal').find('[title="Edit"]').click()
    })
})

Cypress.Commands.add('preencherCamposEdicao', () => {
    const novosDados = {
        firstName: faker.person.firstName(),
        age: faker.number.int({ min: 18, max: 99 })
    }

    cy.wrap(novosDados).as('novosDados')

    cy.get(FIRST_NAME).clear().type(novosDados.firstName)
    cy.get(AGE).clear().type(novosDados.age)
})

Cypress.Commands.add('validarAlteracaoRegistro', () => {
    cy.get('@novosDados').then(novosDados => {
        cy.get('.rt-tr-group').should('contain', novosDados.firstName).and('contain', novosDados.age)
    })
})

Cypress.Commands.add('clicarSubmit', () => {
    cy.get(BTN_SUBMIT).click()
})