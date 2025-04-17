describe.skip('Counter Component', () => {
  let baseUrl;
  let initialCounterValue;

  before(() => {
    cy.fixture('config').then((config) => {
      baseUrl = config.baseUrl;
    });
    initialCounterValue = 5;
  });

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('displays the initial value', () => {
    cy.get('.counter p').should('contain', `Value: ${initialCounterValue}`);
  });

  it('increments the value when the increment button is clicked', () => {
    cy.get('.counter button').contains('Increment').click();
    cy.get('.counter p').should('contain', `Value: ${initialCounterValue + 1}`);
  });

  it('decrements the value when the decrement button is clicked', () => {
    cy.get('.counter button').contains('Decrement').click();
    cy.get('.counter p').should('contain', `Value: ${initialCounterValue - 1}`);
  });

  it('increments and decrements multiple times correctly', () => {
    cy.get('.counter button').contains('Increment').click();
    cy.get('.counter button').contains('Increment').click();
    cy.get('.counter button').contains('Decrement').click();
    cy.get('.counter p').should('contain', `Value: ${initialCounterValue + 1}`);
  });

  it('displays a custom initial value if provided as a prop', () => {
    cy.visit(`${baseUrl}/?initialValue=5`)
    cy.get('.counter p').should('contain', 'Value: 5')
  })
});