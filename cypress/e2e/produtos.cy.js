/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () =>{

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () =>{
        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()  
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });
    
    it.only('Deve adicionar um produto no carrinho', () =>{
        cy.Addprodutos('Ajax Full-Zip Sweatshirt', 'M', 'Blue', 2)
    });
})