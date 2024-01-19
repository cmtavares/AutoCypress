/// <reference types="cypress" />
var faker = require('faker');

describe('Funcionalidade Pré Cadastro', () =>{

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () =>{
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.preCadastro(emailFaker, 'Teste@teste123!', nomeFaker, sobrenomeFaker)
        
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
})