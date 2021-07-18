describe('Page Should contain learn react', () => {
  it('Should attempt Home page', () => {
    cy.visit('/');
    cy.contains('Learn React');
  });
});
