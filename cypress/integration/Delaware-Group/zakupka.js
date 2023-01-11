
describe('Закупка товара', function () {

    it('Позитивный тест - успешная покупка', function () {
       cy.visit(' https://testqastudio.me/');
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click().click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();       
       cy.get('#menu-top > .menu-item-home > a').click();
       cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.wait(5500)       
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Алекс');
       cy.get('#billing_last_name').type('Ершов');
       cy.get('#billing_address_1').type('Московска');
       cy.get('#billing_city').type('Москва');
       cy.get('#billing_state').type('Москва');
       cy.get('#billing_postcode').type('111111');
       cy.get('#billing_phone').type('89277777777');
       cy.get('#billing_email').type('alee@mail.ru');
       cy.get('#place_order').click();
       cy.get('.page-header__title');
       cy.contains('Ваш заказ принят. Благодарим вас.');
       
       })
 
   
 
   })


   // cy.wait(500)
    