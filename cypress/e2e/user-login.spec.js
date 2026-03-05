import LoginPage from '../pages/LoginPage'

let user
before(() => {
  cy.fixture('user').then((data) => {
    user = data
  })
  })

//------------------------------------------------
// Test 1: User Login
//------------------------------------------------
it('Should login successdully with valid cerdentials', () => {
  LoginPage.login(user.username, user.password)
  cy.contains(user.username).should('be.visible')
})

it('Should not login with empty cerdentials', () => {
    LoginPage.login(String(' '), String(' '))
    cy.get('#flash_danger').scrollIntoView().should('be.visible')
})

