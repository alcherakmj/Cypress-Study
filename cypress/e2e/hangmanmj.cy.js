/// <reference types="cypress" />

describe("learn about locators", () => {
  beforeEach(() => {
    cy.visit("hangman/index.html");
  });

  it('Hangman check default', () => {
    // Hangman Default 텍스트 & 배경 색상 확인
 
    cy.contains('Hangman').should('be.visible')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
    
    cy.contains('Find the hidden word - Enter a letter').should('be.visible')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
    
    cy.get('body').should('have.css', 'background-color', 'rgb(52, 73, 94)')

    cy.get('[id="line1"]').should('be.visible')
    cy.get('[id="line2"]').should('be.visible')
    cy.get('[id="line3"]').should('be.visible')
    cy.get('[id="line4"]').should('be.visible')

    cy.get('line')
      .should('have.css', 'color', 'rgb(255, 255, 255)')

    cy.get('[id="word"]').should('be.visible')
  })

  it('Insert same word', () => {
    // 이미 입력한 글자 또 입력, 팝업 창 확인 
    cy.get('body').type('t')
    cy.get('body').type('t')
    cy.get('[id="notification-container"]').should('be.visible')
      .contains('You have already entered this letter').should('be.visible')
  })

  it('Fail Case', () => {
    // 실패하는 case 확인
    
    cy.get('[class="letter"]')
      .then(($div) => {
        if ($div.length == 11) {
          const Name = "application"
          cy.log(Name)

          cy.get('body').type('x')
            .get('[id="circlehead"]').should('be.visible')
            .get('#wrong-letters').contains('Wrong').should('be.visible')
            .get('#wrong-letters').contains('x').should('be.visible')

            .get('body').type('v')
            .get('[id="linebody"]').should('be.visible')
            .get('#wrong-letters').contains('v').should('be.visible')

            .get('body').type('b')
            .get('[id="linearm1"]').should('be.visible')
            .get('#wrong-letters').contains('b').should('be.visible')

            .get('body').type('k')
            .get('[id="linearm2"]').should('be.visible')
            .get('#wrong-letters').contains('k').should('be.visible')

            .get('body').type('u')
            .get('[id="lineleg1"]').should('be.visible')
            .get('#wrong-letters').contains('u').should('be.visible')

            .get('body').type('y')
            .get('[id="lineleg2"]').should('be.visible')
            .get('#wrong-letters').contains('y').should('be.visible')


          cy.get('[class="popup"]').should('be.visible')  //popup 확인
            .get('[id="final-message"]').should('be.visible')
            .contains('Unfortunately you lost. 😕').should('be.visible')

          cy.get('#final-message-reveal-word').should('be.visible')
            .contains('...the word was: application').should('be.visible')

          cy.get('[id="play-button"]').should('be.visible') //play button 확인
            .contains('Play Again').should('be.visible')
        }

        if ($div.length == 9) {
          const Name = "interface"
          cy.log(Name)

          cy.get('body').type('x')
            .get('[id="circlehead"]').should('be.visible')
            .get('#wrong-letters').contains('Wrong').should('be.visible')
            .get('#wrong-letters').contains('x').should('be.visible')

            .get('body').type('v')
            .get('[id="linebody"]').should('be.visible')
            .get('#wrong-letters').contains('v').should('be.visible')

            .get('body').type('b')
            .get('[id="linearm1"]').should('be.visible')
            .get('#wrong-letters').contains('b').should('be.visible')

            .get('body').type('k')
            .get('[id="linearm2"]').should('be.visible')
            .get('#wrong-letters').contains('k').should('be.visible')

            .get('body').type('u')
            .get('[id="lineleg1"]').should('be.visible')
            .get('#wrong-letters').contains('u').should('be.visible')

            .get('body').type('y')
            .get('[id="lineleg2"]').should('be.visible')
            .get('#wrong-letters').contains('y').should('be.visible')


          cy.get('[class="popup"]').should('be.visible')  //popup 확인
            .get('[id="final-message"]').should('be.visible')
            .contains('Unfortunately you lost. 😕').should('be.visible')

          cy.get('#final-message-reveal-word').should('be.visible')
            .contains('...the word was: interface').should('be.visible')

          cy.get('[id="play-button"]').should('be.visible') //play button 확인
            .contains('Play Again').should('be.visible')
        }

        if ($div.length == 6) {
          const Name = "wizard"
          cy.log(Name)

          cy.get('body').type('x')
            .get('[id="circlehead"]').should('be.visible')
            .get('#wrong-letters').contains('Wrong').should('be.visible')
            .get('#wrong-letters').contains('x').should('be.visible')

            .get('body').type('v')
            .get('[id="linebody"]').should('be.visible')
            .get('#wrong-letters').contains('v').should('be.visible')

            .get('body').type('b')
            .get('[id="linearm1"]').should('be.visible')
            .get('#wrong-letters').contains('b').should('be.visible')

            .get('body').type('k')
            .get('[id="linearm2"]').should('be.visible')
            .get('#wrong-letters').contains('k').should('be.visible')

            .get('body').type('u')
            .get('[id="lineleg1"]').should('be.visible')
            .get('#wrong-letters').contains('u').should('be.visible')

            .get('body').type('y')
            .get('[id="lineleg2"]').should('be.visible')
            .get('#wrong-letters').contains('y').should('be.visible')


          cy.get('[class="popup"]').should('be.visible')  //popup 확인
            .get('[id="final-message"]').should('be.visible')
            .contains('Unfortunately you lost. 😕').should('be.visible')

          cy.get('#final-message-reveal-word').should('be.visible')
            .contains('...the word was: wizard').should('be.visible')

          cy.get('[id="play-button"]').should('be.visible') //play button 확인
            .contains('Play Again').should('be.visible')
        }
      })
  })

  it('Success Case', () => {
    // 성공하는 case 확인
    
    cy.get('[class="letter"]')
      .then(($div) => {
        if ($div.length == 11) {
          const Name = "application"
          cy.log(Name)

          cy.get('body').type('a')
            .get('#word').contains('a').should('be.visible')

            .get('body').type('p')
            .get('#word').contains('p').should('be.visible')

            .get('body').type('l')
            .get('#word').contains('l').should('be.visible')

            .get('body').type('i')
            .get('#word').contains('i').should('be.visible')

            .get('body').type('c')
            .get('#word').contains('c').should('be.visible')

            .get('body').type('t')
            .get('#word').contains('t').should('be.visible')

            .get('body').type('o')
            .get('#word').contains('o').should('be.visible')

            .get('body').type('n')
            .get('#word').contains('n').should('be.visible')


          cy.get('[class="popup"]').should('be.visible')  //popup 확인
            .get('[id="final-message"]').should('be.visible')
            .contains('Congratulations! You won! 😃').should('be.visible')

          cy.get('[id="play-button"]').should('be.visible') //play button 확인
            .contains('Play Again').should('be.visible')
        }

        if ($div.length == 9) {
          const Name = "interface"
          cy.log(Name)

          cy.get('body').type('i')
            .get('#word').contains('i').should('be.visible')

            .get('body').type('e')
            .get('#word').contains('e').should('be.visible')

            .get('body').type('r')
            .get('#word').contains('r').should('be.visible')

            .get('body').type('f')
            .get('#word').contains('f').should('be.visible')

            .get('body').type('c')
            .get('#word').contains('c').should('be.visible')

            .get('body').type('t')
            .get('#word').contains('t').should('be.visible')

            .get('body').type('a')
            .get('#word').contains('a').should('be.visible')

            .get('body').type('n')
            .get('#word').contains('n').should('be.visible')


          cy.get('[class="popup"]').should('be.visible')  //popup 확인
            .get('[id="final-message"]').should('be.visible')
            .contains('Congratulations! You won! 😃').should('be.visible')

          cy.get('[id="play-button"]').should('be.visible') //play button 확인
            .contains('Play Again').should('be.visible')
        }

        if ($div.length == 6) {
          const Name = "wizard"
          cy.log(Name)

          cy.get('body').type('w')
            .get('#word').contains('w').should('be.visible')

            .get('body').type('i')
            .get('#word').contains('i').should('be.visible')

            .get('body').type('z')
            .get('#word').contains('z').should('be.visible')

            .get('body').type('a')
            .get('#word').contains('a').should('be.visible')

            .get('body').type('r')
            .get('#word').contains('r').should('be.visible')

            .get('body').type('d')
            .get('#word').contains('d').should('be.visible')


          cy.get('[class="popup"]').should('be.visible')  //popup 확인
            .get('[id="final-message"]').should('be.visible')
            .contains('Congratulations! You won! 😃').should('be.visible')

          cy.get('[id="play-button"]').should('be.visible') //play button 확인
            .contains('Play Again').should('be.visible')
        }
      })
  })

})