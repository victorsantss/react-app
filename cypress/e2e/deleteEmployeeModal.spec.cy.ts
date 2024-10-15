/// <reference types="cypress" />
describe('Delete Employee Modal', () => {
  it('should be able to delete employee', () => {
    // Create a new employee
    cy.visit('http://localhost:5173/funcionarios')
    cy.get('#new-employee-button').click()
    cy.get('[data-testid="nome"]')
      .type('John Delete')
      .should('have.value', 'John Delete');
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
    cy.get('#save-new-employee-button').click();
    // Search for the employee
    cy.get('[data-testid="digite"]')
      .type('John Delete')
      .should('have.value', 'John Delete');
    cy.get('#search-button').click();
    // Delete the employee
    cy.get('#delete-employee-button').click();
    cy.get('#confirm-delete-employee').click();
  })
})
