import { faker } from '@faker-js/faker'

class Pagamento{

    preencherDadosParaPagamento(){
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]').type(12)
        cy.get('[data-qa="expiry-year"]').type(2035)
        cy.get('[data-qa="pay-button"]').click()

        return this
    }

    verificarQueAOrdemDoPedidoFoiRealizadoComSucesso(){
        cy.get('[data-qa="order-placed"]').should('be.visible')
        return this
    }


}


export default new Pagamento()