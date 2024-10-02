class Home{

    preencheEmailParaInscricaoDeAssinatura(){
        cy.get('input#susbscribe_email')
            .scrollIntoView()
            .type('tester-qa@gmail.com')
        cy.get('button#subscribe').click()
        return this
    }

    verificaSeOcorreuAssinaturaComSucesso(){
        cy.contains('You have been successfully subscribed!').should('be.visible')
        return this
    }

    adicionarItemAoCarrinho(){
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
        return this
    }

    
}

export default new Home()