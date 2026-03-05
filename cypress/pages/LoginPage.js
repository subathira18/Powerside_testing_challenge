class LoginPage{
    visit(){
        cy.visit('https://testapp1.andresfloresv.com/login')
    }

    enterUsername(username){
        cy.get('input[name="username"]').type(username);
    }
    
    enterPassword(password){
        cy.get('input[name="password"]').type(password);
        }

    submit(){
            cy.get('button[type="submit"]').first().click();    
    }

    login(username, password){
        this.visit()
        this.enterUsername( username )
        this.enterPassword( password )
        this.submit()
    }
}
export default new LoginPage()
