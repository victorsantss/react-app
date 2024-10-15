/// <reference types="cypress" />
describe('Edit Employee Modal', () => {
  it('should be able to open and edit the Employee Modal', () => {
    // Create a new employee
    cy.visit('http://localhost:5173/funcionarios')
    cy.get('#new-employee-button').click()
    cy.get('[data-testid="nome"]')
      .type('John Edit')
      .should('have.value', 'John Edit');
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
    //  Search for the employee
    cy.get('[data-testid="digite"]')
      .type('John Edit')
      .should('have.value', 'John Edit');
    cy.get('#search-button').click();
    // Edit the employee
    cy.get('#edit-employee-button').click();
  })
})
