/// <reference types="Cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer login com sucesso', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    })

    it('Deve exibir uma mensagem de erro', () =>{
        cy.get('#username').type('xxxx@xxxx.com')
        cy.get('#password').type('xxxxx123')
        cy.get('.woocommerce-form > .button').click()
    })
})