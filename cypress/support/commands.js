// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


export const CARD_ELEMENTS = 'h5'
export const ELEMENTS_WEB_TABLES = '#item-3'
export const TITLE_WEB_TABLES = 'h1'
export const BTN_ADD = '#addNewRecordButton'
export const BTN_SUBMIT = '#submit'
export const BTN_EDIT = '[title="Edit"]'
export const BTN_DELETE = '[title="Delete"]'
export const BTN_REGISTRATION = '#submit'
export const FIRST_NAME = '#firstName'
export const LAST_NAME = '#lastName'
export const EMAIL = '#userEmail'
export const AGE = '#age'
export const SALARY = '#salary'
export const DEPARTMENT = '#department'
export const MODAL_TITLE = '.modal-title'
export const TITLE_MODEL_REGISTRATION_FORM = '#registration-form-modal'
export const ALERT_AGE_ERR = '#age-wrapper'
export const ALERT_SALARY_ERR = '#salary-wrapper'
export const ALERT_EMAIL_ERR = '#userEmail-wrapper'
export const ALERT_FIRSTNAME_ERR = '#firstName-wrapper'
export const ALERT_LASTNAME_ERR = '#lastName-wrapper'
export const ALERT_DEPARTMENT_ERR = '#department-wrapper'

Cypress.Commands.add('printTela', (nome = 'screenshot') => {

    cy.screenshot(nome, { capture: 'viewport' })
})

