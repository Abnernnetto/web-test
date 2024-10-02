class Produto{

    preencheNomeDoProdutoParaPesquisa(){
        cy.get('input#search_product').type('Shirt')
        cy.get('button#submit_search').click()
        return this
    }

    verificaSeListaTodosProdutos(){
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')
        return this
    }

    verificaSeExisteAoMenosUmProduto(){
        cy.get('.single-products').should('be.visible').and('have.length.at.least', 1)
            .first()
            .parent()
            .contains('View Product').click()

        return this
    }

    verificaSeHaNomeDoProduto(){
        cy.get('.product-information > h2').should('be.visible')
        return this
    }

    verificarSeHaCategoriaPrecoDisponivelCondicaoBrandDoProduto(){
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        return this
    }

    verificarSeHaPrecoDoProduto(){
        cy.get('.product-information span span').should('be.visible')
        return this
    }

    verificaSeEncontrouProdutoDaPesquisa(){
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')
        return this
    }

    verificaSeHaAoMenosUmProdutoEncontradoNaPesquisa(){
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
        return this
    }

}

export default new Produto()