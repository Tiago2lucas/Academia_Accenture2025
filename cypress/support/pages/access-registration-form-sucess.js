const BTN_ADD = '#addNewRecordButton'
const TITLE_MODEL_REGISTR_FORM = '#registration-form-modal'



Cypress.Commands.add('clickBtnAdd', () => {
    cy.get(BTN_ADD).contains('Add').should('be.visible').click()
})

Cypress.Commands.add('validationModalAbert', (mensagem) => { cy.get(TITLE_MODEL_REGISTR_FORM).contains('Registration Form').should('contain', mensagem) })