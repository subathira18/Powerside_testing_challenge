import LoginPage from '../pages/LoginPage'

//------------------------------------------------
// Test 5: Sort Books
//------------------------------------------------
describe('Sort Books', () => {
let user
before(() => {
  cy.fixture('user').then((data) => {
    user = data
  })
  })

beforeEach(()=>{
  LoginPage.login(user.username, user.password)
})

it('should sort books by author', () => {
  cy.get('a#asc').click()
  cy.get('.author-name').eq(2).click()
  cy.get('span.glyphicon-font').eq(0)
  cy.get('div#books').eq(0).get('.title').then(($titles) => {
    const titles = $titles.map((i,el)=> Cypress.$(el).text()).get()
    const sorted = [...titles].sort()
     console.log(titles)
        console.log(sorted)
    expect(titles).to.deep.equal(sorted)
    })
  })})






