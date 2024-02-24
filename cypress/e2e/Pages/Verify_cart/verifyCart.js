class verifyCart {
  cartIcon() {
    cy.get(
      "body > div.page-wrapper > header > div.header.content > div.minicart-wrapper"
    ).click();
  }

  verifyCartItems() {
    cy.wait(2000);
    cy.get('.base').should("contain", "Shopping Cart");
  }
  removeCart(){
    cy.wait(2000);
    cy.get('.showcart').click();
    cy.wait(2000);
    cy.get('#mini-cart > li > div > div > div.product.actions > div.secondary').click();
    cy.wait(2000);
    cy.get('body > div.modals-wrapper > aside.modal-popup.confirm._show > div.modal-inner-wrap > footer > button.action-primary.action-accept').click();
  }

}

export default verifyCart;
