import addCart from "../../Pages/Add_cart/addCart";

describe("Add to Cart Test", () => {
  before(() => {
    cy.globalLogin(); // Ensure we're logged in before running add-to-cart tests
  });

  it("adds an item to the cart", () => {
    // Add-to-cart test steps
    const item = new addCart();
    item.addToCartButton();
    item.addToSize();
    item.addToColor();
    item.confirmProduct();
  });
});
