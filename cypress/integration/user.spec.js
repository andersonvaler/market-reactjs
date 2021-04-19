describe("Cliente usando a aplicação", () => {
  it("Fazer login do cliente", () => {
    cy.visit("https://market-six.vercel.app/login/user");
    cy.get('input[name="email"]').focus().type("clebinho@teste2.com");
    cy.get('input[name="password"]').focus().type(123456);
    cy.contains("Entrar").click();
  });

  it("Pesquisando produtos", () => {
    cy.wait(10000);
    cy.contains("Buscar").click();
    cy.wait(3000);
    cy.contains("Carnes").click();
    cy.wait(1500);
    cy.get('input[placeholder="Procurar"]').focus().type("Picanha").click();
    cy.wait(1500);
    cy.get(".sc-eGPWxh").click();
    cy.wait(1500);
    cy.contains("Adicionar ao carrinho").click();
    cy.wait(1500);
    cy.get('input[type="number"]').type("5");
    cy.wait(1500);
    cy.contains("Confirmar").click();
  });

  it("Pedindo orçamento", () => {
    cy.wait(1500);
    cy.contains("Carrinho").click();
    cy.wait(1500);
    cy.contains("Solicitar Orçamento").click();
  });

  it("Escolhendo orçamento", () => {
    cy.wait(3000);
    cy.contains("Selecionar").click();
    cy.wait(1500);
    cy.contains("Confirmar").click();
  });
});
