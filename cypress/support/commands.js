Cypress.Commands.add('PreencheOsCamposObrigatóriosEnvia', () => {
    cy.get('.name')
        .type('Leonardo Laurindo Szarblewski')
    cy.get('.email')
        .type('leo@gmail.com')
    cy.get('.telefone')
        .type('51 999999999')
    cy.get('#btnFooter')
        .click()
        .should('have.value', '')
})

Cypress.Commands.add('PreencheElimpa', (data = {
    firstName: 'leo',
    email: 'leo@gmail.com',
    phone: '99999999999'
}) => {
    cy.get('.name')
        .invoke('val', data.firstName)
        .should('be.visible')
        .clear()
        .should('have.value', '')
    cy.get('.email')
        .invoke('val', data.email)
        .should('be.visible')
        .clear()
        .should('have.value', '')
    cy.get('.telefone')
        .invoke('val', data.phone)
        .should('be.visible')
        .clear()
        .should('have.value', '')
})