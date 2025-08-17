// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './pages/access-portal-success'
import './pages/access-registration-form-success'
import './pages/filling-fields-success'

Cypress.on('uncaught:exception', (err) => {

    if (err.message.includes('Script error') || err.message.includes('cross origin')) {
        return false
    }
    return true
})

beforeEach(() => {
    cy.intercept('**/adsbygoogle.js', { statusCode: 204 }).as('blockAds')
    cy.intercept('**/doubleclick.net/**', { statusCode: 204 }).as('blockDoubleClick')
    cy.intercept('**/google-analytics.com/**', { statusCode: 204 }).as('blockAnalytics')

    Cypress.on('uncaught:exception', (err) => {
        if (
            err.message.includes('adsbygoogle') ||
            err.message.includes('doubleclick') ||
            err.message.includes('google-analytics')
        ) {
            return false;
        }
        return true;
    })
})
Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})