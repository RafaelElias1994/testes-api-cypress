import { faker } from '@faker-js/faker';

describe('template spec', () => {
  beforeEach(function() {
    cy.on('uncaught: exception', function () {
      return false;
    });  
  });


    it('Deve visitar o site da C.R.U.D e ir no campo Lista Usuários', () => {

      cy.viewport(1040,760);
      cy.visit('/users');
      

      // cy.url().should('equal', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/users');
      // cy.get('#paginacaoProximo').click();
      cy.intercept('https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users').as('buscarUsuarios'); 

      cy.wait('@buscarUsuarios').then( function (dados) { 
      cy.log(dados);
      cy.log(dados.response.body);

      // expect(dados.status).to.equal(200);
      // .its('body').should('to.be.an', 'object');
      // expect(dados.status).to.equal(200);
      // expect(dados.response.body).to.have.property('id');

      });
      

      cy.contains('Mia47@gmail.com').should('be.visible')


    });

    it('Testando o campo de criação de usuário', () => {
      
      cy.on('window:alert', function(messageAlert) {
        expect(messagemAlert).to.equal('Erro: Este e-mail já é utilizado por outro usuário.');
    });

      const name = faker.person.fullName();
      const email = faker.internet.email();
  
        cy.viewport(1040,760);
        cy.visit('');
        cy.url().should('equal', 'https://rarocrud-frontend-88984f6e4454.herokuapp.com/');
        cy.get("[href='/users/novo']").click();
        cy.get('#name').type(name);
        cy.get('#name').invoke('val').should('not.equal', 'Rafaela Oliveira');
        cy.get('#email').type(email);

        cy.contains('Salvar').click();

      
        // cy.get('div label').invoke('text').should('to.equal', 'NomeE-email');
        
        
      });

    it('Não é possível cadastrar sem um nome', function () {
      cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/novo');
      cy.get('#email').type('joaq@qa.com.br');
      cy.contains('Salvar').click();
      
    });

    it('Não é possível cadastrar sem e-mail', function () {
      cy.visit('https://rarocrud-frontend-88984f6e4454.herokuapp.com/users/novo');
      cy.get('#name').type('jogador13');
      cy.contains('Salvar').click();

    });

});