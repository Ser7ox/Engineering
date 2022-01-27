describe('My First Test', () => {
  const expectedTitle = 'akita-app'
  
  it('Visits the initial project page', () => {
    cy.visit('/home/table')
    cy.contains('Actions')
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

  it('Create user from card, type on input firstName lastName and email and click on Save', () => {
    cy.visit('/home/form');
    cy.get('.nome')
      .type('Flavio').as('nome')
      .should( 'have.value', 'Flavio');
    cy.get('.cognome')
      .type('Fantasia').as('cognome')
      .should( 'have.value', 'Fantasia');
    cy.get('.address')
      .type('email@email.it').as('address')
      .should( 'have.value', 'email@email.it');
    cy.intercept('POST', 'http://localhost:3000/persone', (req) => {
      req.body = {
        check: 'OK',
      }
    })
    cy.get('.btn-success').click();
    cy.request('http://localhost:3000/persone').then(response => {
      response.body.forEach((element: { check: string }) => {
        if (element.check === 'OK') {
          cy.log('Ottimo, check completato. L\'utente creato nel test precedente risulta nel nostro database.');
        }
      });
    })
  })

  it('create user with cy.request', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/persone',
      body: {
        "firstName": "Danilo",
        "lastName": "Merino",
        "address": "Via dei martiri, 30"
      }
    })
  })

  //it('delete user', () => {
  //  const id = 3
  //  cy.request({
  //    method: 'DELETE',
  //    url: 'http://localhost:3000/persone/' + id
  //  })
  //})
})
