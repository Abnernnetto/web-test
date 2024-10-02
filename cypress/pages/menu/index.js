class Menu{


    irParaProdutos(){
        cy.contains(`Products`).click()
        return this
    }

    irParaLoginCadastro(){
        cy.contains(`Signup`).click()
        return this
    }

    irParaNosContate(){
        cy.contains(`Contact us`).click()
        return this
    }
    
    irParaLinkPrincipal(){
        cy.visit('https://automationexercise.com')
        return this
    }

    irParaExclusaoDaConta(){
        cy.get('[href *="delete"]').click()
        return this
    }

    irParaHome(){
        cy.get('#form-section > .btn').click()
        return this
    }

    verificarSeAContaFoiExcluida(){
        cy.get('b').should('contain', 'Account Deleted!')
        return this
    }

    verificarSeEstamosNaHome(){
        cy.contains('Features Items')
        return this
    }

    retornarParaAHome(){
        cy.get('[data-qa="continue-button"]').click()
        return this
    }




    
}

export default new Menu()