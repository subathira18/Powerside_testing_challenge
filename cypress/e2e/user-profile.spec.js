import LoginPage from '../pages/LoginPage'

//------------------------------------------------
// Test 3: User Profile Update
//------------------------------------------------
describe('Profile Settings', () => {

let user
before(() => {
  cy.fixture('user').then((data) => {
    user = data
  })
  })

beforeEach(()=>{
  LoginPage.login(user.username, user.password)
  cy.visit('https://testapp1.andresfloresv.com/me')

})

it('should accept a valid email address', () => {
    cy.get('input[name="email"]').clear().type('subathira18@example.com')
    .should('have.value', 'subathira18@example.com')
    cy.get('#user_submit').scrollIntoView().click()
    cy.get('#flash_success').scrollIntoView().should('be.visible')
  })

  it('should not accept an invalid email address', () => {
    cy.get('input[name="email"]').clear().type('subathira18example.com')
    cy.get('#user_submit').scrollIntoView().click()
    cy.get('#flash_danger').scrollIntoView().should('be.visible')
  })

  it('should accept e-email addresses separated by comma', () => {
    cy.get('input[name="kindle_mail"]').clear().type('subathira18example.com,test123@gmail.com')
    cy.get('#user_submit').scrollIntoView().click()
    cy.get('#flash_danger').scrollIntoView().should('be.visible')
  })

    it('home page should only show sections enabled in settings', () => {
    cy.get('input[name="show_8192"]').scrollIntoView().uncheck()  
    cy.get('#user_submit').scrollIntoView().click()
    cy.contains('Ratings').should('not.be.visible')
  })
})



