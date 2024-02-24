class Login {
  setUserName(userName) {
    cy.get("#email").type(userName);
  }

  setPassword(password) {
    cy.get("#pass").type(password);
  }

  ClickLogin() {
    cy.get("#send2").click();
  }
  HomePage() {
    cy.visit("https://magento.softwaretestingboard.com");
  }
}
export default Login;
