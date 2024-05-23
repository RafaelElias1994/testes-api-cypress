import { faker } from '@faker-js/faker';
import CadastroPage from '../support/pages/cadastro.page';
import ListaUsuarioPage from '../support/pages/listaUsuarios.page';

describe('Testes de criação de usuário', function () {
    var paginaCadastro = new CadastroPage();
    var listaUsuario = new ListaUsuarioPage();
    beforeEach(() => {
        cy.visit('./app/index.html');
    });

    describe('Teste de formulário', function () {
        it('Não deve ser possível cadastrar o usuário sem informar um nome', function () {
            var paginaCadastro = new CadastroPage();

            cy.intercept('POST', '/api/v1/users').as('postUsuario');

            // cy.get(paginaCadastro.inputEmail).type('teste@teste.com');
            var email = faker.internet.email();
            paginaCadastro.typeEmail(email);
            // cy.contains('button', 'Cadastrar').click();
            paginaCadastro.clickButtonCadastrar();

            // cy.wait('@postUsuario');
            // cy.get(paginaCadastro.listaUsuarios).should('be.empty');
            paginaCadastro.getListaUsuarios().should('be.empty');

            
        });

        it('O formato de e-mail deve ser válido', function () {
            var nome = faker.person.fullName();
            var email = faker.internet.email();
            paginaCadastro.cadastrar(nome, email);
            paginaCadastro.clickButtonCadastrar();
            paginaCadastro.getListaUsuarios().should('be.empty');
        });

        it('Deve ser possível limpar os campos do formulário', function() {
            paginaCadastro.typeNome('Nome usuário');
            paginaCadastro.typeEmail('example@teste.com');
            paginaCadastro.clickButtonLimpar();

            cy.get(paginaCadastro.inputNome).invoke('val').should('be.empty');
            cy.get(paginaCadastro.inputEmail).invoke('val').should('be.empty');
        })
    })




});