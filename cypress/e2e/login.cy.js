describe('Login Page', () => {
  describe("Submission", () => {
    it('After submission go submit', () => {
    cy.visit('http://localhost:5173/')
    cy.get('input[data-cy="email"]').type('hello@hello.com')
    cy.get('input[data-cy="password"]').type('pa$sW0rd')
    cy.get('input[data-cy="terms"]').click()
    cy.get('button[data-cy="submit"]').click()
    cy.contains('You signed in succesfully').should('be.visible')
  })
  })
  describe("Errors", () => {
    it('Email wrong', () => {
      cy.visit('http://localhost:5173/')
      cy.get('input[data-cy="email"]').type('hello')
      cy.get('input[data-cy="password"]').type('pa$sW0rd')
      cy.get('input[data-cy="terms"]').click()
      cy.get('[data-cy="error"]').should('have.length', 1)
      cy.contains('Enter a valid email').should('be.visible')
      cy.get('[data-cy="submit"]').should('be.disabled')
    })
    it("Email and password wrong", () => {
      cy.visit('http://localhost:5173/')
      cy.get('input[data-cy="email"]').type('hello')
      cy.get('input[data-cy="password"]').type('password')
      cy.get('input[data-cy="terms"]').click()
      cy.get('[data-cy="error"]').should('have.length', 2)
      cy.contains('Enter a valid email').should('be.visible')
      cy.contains('Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character').should('be.visible')
      cy.get('[data-cy="submit"]').should('be.disabled')
    })
    it("Terms not accepted", () => {
      cy.visit('http://localhost:5173/')
      cy.get('input[data-cy="email"]').type('hello@hello.com')
      cy.get('input[data-cy="password"]').type('pa$sW0rd')
      cy.get('[data-cy="submit"]').should('be.disabled')
    })
  })
  
})