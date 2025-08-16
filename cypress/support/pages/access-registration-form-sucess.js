const BTN_ADD = '#addNewRecordButton'
const TITLE_MODEL_REGISTR_FORM = '#registration-form-modal'
const FIRST_NAME = '#firstName'
const LAST_NAME = '#lastName'
const EMAIL = '#userEmail'
const AGE = '#age'
const SALARY = '#salary'
const DEPARTMENT = '#department'


Cypress.Commands.add('clickBtnAdd', () => {
    cy.get(BTN_ADD).contains('Add').should('be.visible').click()
})

Cypress.Commands.add('validationModalAbert', (mensagem) => {
    cy.get(TITLE_MODEL_REGISTR_FORM)
        .contains('Registration Form')
        .should('contain', mensagem)
})

Cypress.Commands.add('evidencCamposRegistreForm', () => {
    const campos = [
        { selector: FIRST_NAME, name: 'First Name' },
        { selector: LAST_NAME, name: 'Last Name' },
        { selector: EMAIL, name: 'Email' },
        { selector: AGE, name: 'Age' },
        { selector: SALARY, name: 'Salary' },
        { selector: DEPARTMENT, name: 'Department' }
    ]

    campos.forEach(camp => { cy.get(camp.selector).should('be.visible').and('be.empty') })
})