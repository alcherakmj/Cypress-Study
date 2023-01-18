/// <reference types="cypress" />

describe('dom array methods test', () => {
  beforeEach(() => {
    cy.visit('dom-array-methods/index.html')
  })

  it('Error Message', () => {
    // 모든 정보 입력X, 에러 메시지 확인하는 TestCase
    cy.get('[type="submit"]')
      .click()

    cy.contains('Username must be at least 3 characters').should('be.visible')
    cy.contains('Email is not valid').should('be.visible')
    cy.contains('Password must be at least 6 characters').should('be.visible')
    cy.contains('Password2 is required').should('be.visible')
    })

})