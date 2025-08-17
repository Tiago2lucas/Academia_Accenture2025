import { faker } from "@faker-js/faker"

import { FIRST_NAME, LAST_NAME, EMAIL, AGE, SALARY, DEPARTMENT, BTN_REGISTRATION } from "../commands"

Cypress.Commands.add('prencheDados', () => {
    const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.number.int({ min: 18, max: 99 }),
        salary: faker.number.int({ min: 20000, max: 150000 }),
        department: faker.commerce.department()
    }

    cy.get(FIRST_NAME).type(userData.firstName)
    cy.get(LAST_NAME).type(userData.lastName)
    cy.get(EMAIL).type(userData.email)
    cy.get(AGE).type(userData.age)
    cy.get(SALARY).type(userData.salary)
    cy.get(DEPARTMENT).type(userData.department)


    cy.wrap(userData).as('userData', { timeout: 10000 })
})

Cypress.Commands.add('clickSubmitBtn', () => {
    cy.get(BTN_REGISTRATION).click()
})

Cypress.Commands.add('validateRecord', (userData) => {
    cy.get('.rt-tr-group').should('contain', userData.firstName)
        .and('contain', userData.lastName)
        .and('contain', userData.age)
        .and('contain', userData.email)
        .and('contain', userData.salary)
        .and('contain', userData.department)
})