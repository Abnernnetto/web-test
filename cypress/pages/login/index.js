class Login{

    preencherLogin(usuario, senha){
        cy.get('[data-qa="login-email"]').type(usuario)   
        cy.get('[data-qa="login-password"]').type(senha, {log: false})   
        cy.get('[data-qa="login-button"]').click()
        return this
    }

    verificarSeLoginFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', 'Tester QA 1')
        return this
    }

    verificarSeLoginPossuiDadoIncorreto(){
        cy.get('p').should('contain', 'Your email or password is incorrect!')
        return this
    }

    verificarSeNomeDoUsuarioLogadoEstaCorreto(usuario = 'Tester 3000'){
        cy.get('i.fa-user').parent().should('contain', usuario)
        return this
    }

    verificarSeEmailJaExiste(){
        cy.get('.signup-form form p').should('be.visible').and('contain', 'Email Address already exist!')
        return this
    }

    vefificarSeCadastroDeUsuarioEstaVisivel(){
        cy.contains('New User Signup!')
        return this
    }

    
    verificarSeFazerLoginNaContaEstaVisivel(){
        cy.contains('Login to your account')
        return this
    }

    verificarSeCadastroDeNovoUsuarioEstaVisivel(){
        cy.contains('New User Signup!')
        return this
    }
}



export default new Login()