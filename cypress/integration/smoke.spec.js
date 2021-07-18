describe("Page Should contain learn react", () => {
  it("Should attempt Home page", () => {
    cy.visit("http://localhost:3000").contains("Learn React");
  });
});
