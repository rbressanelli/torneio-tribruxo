context("Tribruxo", () => {
  it("Renders the home page and verify the components", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.contains("TORNEIO TRIBRUXO");

    cy.get("button").contains("ESCOLHA OS ALUNOS");

    cy.get("span").contains("gryffindor");
    cy.get("span").contains("hufflepuff");

    cy.get("span").contains("ravenclaw");

    cy.get("span").contains("slytherin");
  });

  it("Open the modal em closes it", () => {
    cy.get("button")
      .should("have.class", "modalButton")
      .click({ multiple: true, force: true });

    cy.get("div").should("have.class", "styles__Modal-sc-1tstb6j-9 jXkhuQ");
    cy.get("button").contains("X").click();
  });

  it("Clicks on the button to sort the caracters", () => {
    cy.intercept("get", "/", {
      statusCode: 200,
    });

    cy.get("button").contains("ESCOLHA OS ALUNOS").click();
    cy.get("button")
      .should("have.class", "styles__Button-sc-1tstb6j-2 faohzy")
      .click({ multiple: true, force: true });

    cy.get("div").should(
      "have.class",
      "styles__MainContainer-sc-1tstb6j-3 kTguuT"
    );
    cy.get("div").should("have.class", "styles__Container-sc-1tstb6j-6 gDtbDB");
  });

  it("Clicks on the back to home link to back to home page", () => {
    cy.get("button")
      .should("have.class", "styles__Button-sc-1tstb6j-2 faohzy")
      .click();

    cy.get("a").contains("back to home").click();
  });
});
