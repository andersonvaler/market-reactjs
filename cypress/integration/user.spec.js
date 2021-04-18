describe("criando usuario cliente", () => {
  it("Criar conta cliente", () => {
    cy.visit("https://market-six.vercel.app/");
    cy.contains("Sou cliente").click();
    cy.contains("Cadastre-se").click();
    cy.get('input[name="name"]').focus().type("Clebinho Teste");
    cy.get('input[name="email"]').focus().type("clebinho@teste.com");
    cy.get('input[name="adress"]').focus().type("R. Testes aleatorios, 406");
    cy.get('input[name="password"]').focus().type(123456);
    cy.get('input[name="confirmPassword"]').focus().type(123456);
    cy.contains("Cadastrar").click();
  });
});
