class Carrinho{

    realizarCheckOut(){
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
        return this
    }


    verificaSeHaDetalhesDoEnderecoERevisaoDoPedido(){
        cy.get('.heading').first().should('have.text', 'Address Details')
        cy.get('.heading').last().should('have.text', 'Review Your Order')
        return this
    }

    adicionarComentarioNoPedido(){
        cy.get('.form-control').type('378 98532-8181')
        return this
    }

    darInicioARealizacaoDoPedido(){
        cy.get('.btn-default.check_out').click()
        return this
    }

}

export default new Carrinho()

