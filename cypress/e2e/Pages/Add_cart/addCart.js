class addCart {
  addToCartButton() {
    cy.get(
      "#maincontent > div.columns > div > div:nth-child(6) > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(1)"
    ).click();
  }

  addToSize() {
    cy.wait(2000);
    cy.get('#option-label-size-143-item-166').click();
  }
  addToColor() {
    cy.wait(2000);
    cy.get("#option-label-color-93-item-50").click();
  }
  confirmProduct() {
    cy.wait(2000);
    cy.get("#product-addtocart-button").click();
  }
}
export default addCart;
