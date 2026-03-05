import LoginPage from '../pages/LoginPage'
import BooksPage from '../pages/BooksPage'

//------------------------------------------------
// Test 2: Set the Status of the book
//------------------------------------------------
describe('Set status of Book', () => {
let user
before(() => {
  cy.fixture('user').then((data) => {
    user = data
  })
  })


beforeEach(() => {
  LoginPage.login(user.username, user.password)
  cy.contains('Books').click()
}
)

it('Should set book to Read Status', () => {
    BooksPage.visit()
    BooksPage.setBookToReadStatus('Journey')
    BooksPage.verifyReadStatus()
    BooksPage.setBookToUnReadStatus('Journey')
  })

  
it.skip('Should filter books by Archive Status', () => {
    cy.contains('War').click()
    cy.get('.block-label').get('#archived_cb').should('exist');
    cy.get('.block-label').get('#archived_cb').check()
    .should('be.checked')
    .then(() => {cy.contains('Close').click()})
    cy.reload()
    cy.contains('Books').click()

    cy.contains('Archived Books').click()
    cy.contains('War').should('be.visible').click()
    cy.get('.block-label').get('#archived_cb').uncheck()
    .then(() => {cy.contains('Close').click()})
    cy.reload()
    cy.contains('Books').click()


  })
})



