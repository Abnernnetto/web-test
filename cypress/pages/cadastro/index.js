class Cadastro{

    preencherFormularioComNomeEnderecoParaLogarESerExcluido(){

        const timestamp = new Date().getTime()

        const signUpName = 'Tester QA 1'

        Cypress.env('signUpName', signUpName)

        
        cy.get('[data-qa=signup-name]').type(Cypress.env('signUpName'))
        cy.get('[data-qa=signup-email]').type('qa10000@gmail.com', '12345')
        cy.get('[data-qa=signup-button]').click()  

        return this
    }

    preencherFormularioComNomeEEnderecoParaLogar(){

        const timestamp = new Date().getTime()

        const signUpName = 'Tester 3000'

        Cypress.env('signUpName', signUpName)

        
        cy.get('[data-qa=signup-name]').type(Cypress.env('signUpName'))
        cy.get('[data-qa=signup-email]').type('tester3000@gmail.com', '12345')
        cy.get('[data-qa=signup-button]').click()  

        return this
    }
    preencherFormularioComNomeEEndereco(){

        const timestamp = new Date().getTime()

        const signUpName = 'Tester QA'

        Cypress.env('signUpName', signUpName)

        
        cy.get('[data-qa=signup-name]').type(Cypress.env('signUpName'))
        cy.get('[data-qa=signup-email]').type(`teste-${timestamp}@email.com`)
        cy.get('[data-qa=signup-button]').click()  

        return this
    }

    
    preencherFormularioComDetalhes(){

        cy.get('input[type=radio]').check('Mrs')

        cy.get('input[type=radio]').eq(1).check()
        cy.get('[type=password]').type('12345', {log: false})


        cy.get('[data-qa="days"]').select('23')
        cy.get('[data-qa="months"]').select('August')
        cy.get('[data-qa="years"]').select('1988')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('[data-qa="first_name"]').type('Abner')
        cy.get('[data-qa="last_name"]').type('Nunes')
        cy.get('[data-qa="company"]').type('Tigrinho')
        cy.get('[data-qa="address"]').type('Campos velho')
        cy.get('[data-qa="country"]').type('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type('90001')
        cy.get('[data-qa="mobile_number"]').type('51985050500')
        cy.get('[data-qa="create-account"]').click()


        cy.url().should('includes', 'account_created')
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click() 

        return this
    }

    iniciarCadastro(usuario){
        cy.get('[data-qa=signup-name]').type('QA Binho1')
        cy.get('[data-qa=signup-email]').type(usuario)
        cy.get('[data-qa=signup-button]').click()

        return this
    }


    verificarSeEstamosNaTelaDeCadastro(){
        cy.contains('New User Signup!')
        return this
    }

    verificarSeCadastroFoiConcluido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
        return this
    }

    verificaSeHaMensagemDeInformacoesDaConta(){
        cy.contains(`Enter Account Information`)
        return this
    }


}   


export default new Cadastro()