describe('My First Test', () => {
  const expectedTitle = 'akita-app'
  
  it('Visits the initial project page', () => {
    cy.visit('/home/table')
    cy.contains('Actions')
  })

  it('Should be true', () => {
    expect(true).to.equal(true)
  })

  it('Site must contains the term User Card', () => {
    cy.contains('User card')
  })

  it('Should contain expected title', () => {
    cy.contains(expectedTitle);
  })

  it('Visit user card', () => {
    cy.visit('http://localhost:4200/home/card');
  })

  it('Click on the nav on User and url should contain /home/card', () => {
    cy.contains('User').click();
    cy.url().should('include', '/home/card')
  })

  it('Go on create user from card, type on input firstName lastName and email and click on Save', () => {
    cy.visit('/home/table');
    cy.get('.cypress-btn').click();
    cy.get('.nome')
      .type('Flavio')
      .should( 'have.value', 'Flavio');
    cy.get('.cognome')
      .type('Fantasia')
      .should( 'have.value', 'Fantasia');
    cy.get('.email')
      .type('email@email.it')
      .should( 'have.value', 'email@email.it');
    cy.get('.btn-success').click();
  })
})
