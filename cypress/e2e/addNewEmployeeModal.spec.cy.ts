/// <reference types="cypress" />
describe('Add New Employee Modal', () => {
  it('should be able to open the New Employee Modal', () => {
    cy.visit('http://localhost:5173/funcionarios')
    cy.get('#new-employee-button').click()
  })

  it('should not be able to save a new employee without filling the fields', () => {
    cy.visit('http://localhost:5173/funcionarios')
    cy.get('#new-employee-button').click()
    cy.get('#save-new-employee-button').click()
  })

  it('should be able to save a new employee filling the fields', () => {
    cy.visit('http://localhost:5173/funcionarios')
    cy.get('#new-employee-button').click()
    cy.get('[data-testid="nome"]')
      .type('John Doe')
      .should('have.value', 'John Doe');
    cy.get('[data-testid="matricula"]')
      .type('123456')
      .should('have.value', '123456');
    cy.get('[data-testid="filial"]')
      .type('Filial 1')
      .should('have.value', 'Filial 1');
    cy.get('[data-testid="cargo"]')
      .type('Cargo 1')
      .should('have.value', 'Cargo 1');
    cy.get('[data-testid="dataAdmissao"]')
      .type('10/10/2021')
      .should('have.value', '10/10/2021');
    cy.get('#save-new-employee-button').click()
  })
})
