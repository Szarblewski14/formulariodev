describe('Formulário para convite de festas e eventos', () => {
  beforeEach('visitando site', () => {
    cy.visit('./src/index.html')
  })

  it('Verifica o titulo da aplicação', () => {
    cy.contains('h1', 'Crie seu convite')
      .should('be.visible')
  })

  it('Preenche os campos obrigatórios e envia formulário', () => {
    cy.PreencheOsCamposObrigatóriosEnvia()
  })

  it('Faz uma descrição do evento', () => {
    const longText = Cypress._.repeat ('Teste', 10)

    cy.get('#descrition')
      .invoke('val',longText)
      .should('have.value', longText)

    cy.PreencheOsCamposObrigatóriosEnvia()
  })

  it('Selecionando todos os checkbox', () => {
    cy.get('input[type=checkbox]')
      .check()
      .should('be.checked')
  })

  it('Preenche e limpa campos nome, email e telefone', () => {
    cy.PreencheElimpa()
  })
})