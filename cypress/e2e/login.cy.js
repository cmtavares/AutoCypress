/// <reference types="Cypress" />

context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve fazer login com sucesso', () =>{
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    })

    it('Deve exibir uma mensagem de erro', () =>{
        cy.login('xxxxx@xxxx.com', 'xxxx123!')
    })
})