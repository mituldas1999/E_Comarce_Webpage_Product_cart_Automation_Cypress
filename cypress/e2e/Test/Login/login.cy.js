import Login from "../../Pages/Login/login";

describe("pom", () => {
  //   it("LoginTest", () => {
  //     cy.visit("https://magento.softwaretestingboard.com/");
  //     cy.get(
  //       "body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a"
  //     ).click();
  //     cy.get("#email").type("mituldas751@gmail.com");
  //     cy.get("#pass").type("mituldas@#$1999");
  //     cy.get("#send2").click();
  //   });

  it.only("LoginTest", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.get(
      "body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a"
    ).click();

    cy.fixture("credential").then((data) => {
      const ln = new Login();
      ln.setUserName(data.username);
      ln.setPassword(data.password);
      ln.ClickLogin();
    });
  });
});
