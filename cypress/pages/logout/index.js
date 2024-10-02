class Logout{

    deslogar(){
        cy.contains('Logout').click()
        return this
    }

    verificarSeLogoutFoiConcluido(){
        cy.url().should('contain', 'login')
        cy.contains("Login to your account").should("be.visible")
        return this
    }
    
}

export default new Logout()