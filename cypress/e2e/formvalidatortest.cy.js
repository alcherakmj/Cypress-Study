describe('Form Validator Test', () => {
  beforeEach(() => {
    cy.visit('form-validator/index.html')
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

  it('Correct Profile Submit', () => {
    // 모든 정보 입력O, 정상 입력 TestCase
    cy.get('[id="username"]')
      .type('mjkim')
      .should('have.value', 'mjkim')

    cy.get('[id="email"]')
      .type('mj.kim@alcherainc.com')
      .should('have.value', 'mj.kim@alcherainc.com')

    cy.get('[id="password"]')
      .type('Dkfcpfk0609!')
      .should('have.value', 'Dkfcpfk0609!')

    cy.get('[id="password2"]')
      .type('Dkfcpfk0609!')
      .should('have.value', 'Dkfcpfk0609!')

    cy.get('[type="submit"]')
      .click()
  })

  // it('Error Message', () => {
  //   // 비밀번호와 비밀번호 확인이 다른 TestCase -> 이거 구현 잘못됨...
  //   cy.get('[id="username"]')
  //     .type('mjkim')
  //     .should('have.value', 'mjkim')

  //   cy.get('[id="email"]')
  //     .type('mj.kim@alcherainc.com')
  //     .should('have.value', 'mj.kim@alcherainc.com')

  //   cy.get('[id="password"]')
  //     .type('Dkfcpfk0609!')
  //     .should('have.value', 'Dkfcpfk0609!')

  //   cy.get('[id="password2"]')
  //     .type('notpasspw')
  //     .should('have.value', 'notpasspw')

  //     cy.get('[type="submit"]')
  //       .click()

  //   cy.contains('Passwords do not match').should('be.visible')
  //   })

})
