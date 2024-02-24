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
}
export default Login;
