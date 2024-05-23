import { Given, When, Then, And, But} from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import CadastroPage from '../pages/cadastro.page';
const paginaCadastro = new CadastroPage();

var novoEmail;

Given('que acessei a funcionalidade de Cadastro', function () {
    cy.visit('./app/index.html');

});

When('informar um novo nome', function () {
    cy.get('#name').type(faker.person.fullName());
    
});

When('informar um novo e-mail', function () {
    novoEmail = faker.internet.email();
    paginaCadastro.typeEmail(novoEmail);
});

When('confirmar a operação', function () {
    paginaCadastro.clickButtonCadastrar();    
});

// Then('o usuário deverá ser cadastrado', function () {
    
// });

Then('o usuário será registrado na lista', function () {
    paginaCadastro.getListaUsuarios().should('contain', novoEmail);    
});