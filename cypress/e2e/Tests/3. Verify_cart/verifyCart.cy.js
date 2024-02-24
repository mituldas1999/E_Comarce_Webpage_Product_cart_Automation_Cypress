import verifyCart from "../../Pages/Verify_cart/verifyCart";

describe("Add to Cart Test", () => {
  before(() => {
    cy.globalLogin(); // Ensure we're logged in before running add-to-cart tests
  });

  it("Verify Cart Items", () => {
    // Add-to-cart test steps
    const verifyCartitem = new verifyCart();
    verifyCartitem.cartIcon();
    verifyCartitem.verifyCartItems();
    // verifyCartitem.removeCart();
  });

});
