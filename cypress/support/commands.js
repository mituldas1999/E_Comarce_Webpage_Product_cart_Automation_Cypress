import Login from "../e2e/Pages/Login/login";

Cypress.Commands.add("globalLogin", () => {
  cy.visit("https://magento.softwaretestingboard.com/");
  cy.get(
    "body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a"
  ).click(); // Update this selector to your login button

  cy.fixture("credential").then((data) => {
    const login = new Login();
    login.setUserName(data.username);
    login.setPassword(data.password);
    login.ClickLogin();
    login.HomePage();
  });
});
