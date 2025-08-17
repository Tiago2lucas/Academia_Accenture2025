import { faker } from "@faker-js/faker"


const FIRST_NAME = '#firstName'
const LAST_NAME = '#lastName'
const EMAIL = '#userEmail'
const AGE = '#age'
const SALARY = '#salary'
const DEPARTMENT = '#department'
const ALERT_AGE_ERR = '#age-wrapper'
const ALERT_SALARY_ERR = '#salary-wrapper'
const ALERT_EMAIL_ERR = '#userEmail-wrapper'


function preencherCamposBase(overrides = {}) {
    const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 99 }),
        salary: faker.number.int({ min: 20000, max: 150000 }),
        department: faker.commerce.department(),
        ...overrides
    }

    cy.get(FIRST_NAME).clear().type(userData.firstName)
    cy.get(LAST_NAME).clear().type(userData.lastName)
    cy.get(EMAIL).clear().type(userData.email)
    cy.get(AGE).clear().type(userData.age)
    cy.get(SALARY).clear().type(userData.salary)
    cy.get(DEPARTMENT).clear().type(userData.department)

    cy.wrap(userData).as('userData', { timeout: 10000 })
}


Cypress.Commands.add('preencheDadosAgeInvalido', () => {
    preencherCamposBase({ age: faker.lorem.word() })
})

Cypress.Commands.add('preencheDadosEmailInvalido', () => {
    preencherCamposBase({ email: faker.internet.email().replace('@', '') })
})


Cypress.Commands.add('preencheDadosSalaryInvalido', () => {
    preencherCamposBase({ salary: faker.lorem.word() })
})

Cypress.Commands.add('alertErroAge', () => {
    cy.get(ALERT_AGE_ERR).should('be.visible',
        { timeout: 2000 })
})

Cypress.Commands.add('alertErroEmail', () => {

    cy.get(ALERT_EMAIL_ERR).should('be.visible',
        { timeout: 2000 })
})

Cypress.Commands.add('alertErroSalary', () => {
    cy.get(ALERT_SALARY_ERR).should('be.visible',
        { timeout: 2000 })
})