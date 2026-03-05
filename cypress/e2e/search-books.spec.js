import LoginPage from '../pages/LoginPage'

//------------------------------------------------
// Test 4: Search Books
//------------------------------------------------
describe('Basic and Advanced search', () => {
let user
before(() => {
  cy.fixture('user').then((data) => {
    user = data
  })
  })

beforeEach(()=>{
  LoginPage.login(user.username, user.password)
})

  it('should retrieve books matching keyword in search bar', () => {
    cy.get('input[placeholder="Search Library"]').clear().type('island')
    .get('#query_submit').click()
    cy.contains('1 Results for: island').should('be.visible')
    cy.contains('The island of Doctor Moreau').should('be.visible')
  })

  it('should return no books with an empty search', () => {
    cy.get('input[placeholder="Search Library"]').clear()
    .get('#query_submit').click()
    cy.contains('No Results Found').should('be.visible')
  })

  it('should retrieve books matching keyword in search bar', () => {
    cy.get('#advanced_search').click()
    cy.get('#title').type("island")
    cy.get('#authors').type("Wells")
    cy.get('#adv_submit').click()
  })

})


