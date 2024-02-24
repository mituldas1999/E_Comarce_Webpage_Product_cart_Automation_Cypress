// import Login from "../../Pages/Login/login";

// describe("pom", () => {
//   it.only("LoginTest", () => {
//     cy.visit("https://magento.softwaretestingboard.com/");
//     cy.get(
//       "body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.authorization-link > a"
//     ).click();

//     cy.fixture("credential").then((data) => {
//       const ln = new Login();
//       ln.setUserName(data.username);
//       ln.setPassword(data.password);
//       ln.ClickLogin();
//     });
//   });
// });

describe("Login Test", () => {
  it("successfully logs in", () => {
    cy.globalLogin();
    // Additional assertions to ensure login was successful
  });
});
