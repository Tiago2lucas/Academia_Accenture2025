Cypress.Commands.add('excluirUltimoRegistro', () => {
    cy.get('.rt-tr-group:has([title="Delete"])').last().within(() => {
        cy.get('.rt-td').eq(0).invoke('text').as('firstName')
    })

    cy.get('.rt-tr-group:has([title="Delete"])')
        .last()
        .find('[title="Delete"]')
        .click()
})

Cypress.Commands.add('validarUltimaLinhaVazia', () => {
    cy.get('.rt-tr-group').last().within(() => {
        cy.get('.rt-td').each($td => {
            expect($td.text().trim()).to.eq('')
        })
    })
})