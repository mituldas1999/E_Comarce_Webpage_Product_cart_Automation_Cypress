class verifyCart {
  cartIcon() {
    cy.get(
      "body > div.page-wrapper > header > div.header.content > div.minicart-wrapper"
    ).click();
  }

  verifyCartItems() {
    // Corrected to use .should('contain', 'Item in Cart') to verify the text exists within the element
    cy.get(
      "#minicart-content-wrapper > div.block-content > div.items-total > span:nth-child(2)"
    ).should("contain", "Item in Cart");
  }
}

export default verifyCart;
