class BooksPage {

   visit(){
         cy.contains('Books').click()
    }

    setBookToReadStatus(title){
        cy.contains(title).click()
        cy.wait(500)
        cy.get('#have_read_cb').check()
        .then(() => {cy.contains('Close').click()})   
    }

    setBookToUnReadStatus(title){
        cy.contains(title).click()
        cy.wait(500)
        cy.get('#have_read_cb').uncheck()
        .then(() => {cy.contains('Close').click()})   
    }

    verifyReadStatus(){
        cy.contains('Read Books').click()
        cy.contains('Journey').should('be.visible')
    }
}

export default new BooksPage() 