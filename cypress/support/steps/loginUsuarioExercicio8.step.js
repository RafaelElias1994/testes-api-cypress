import { Given, When, Then, And, But} from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import CadastroPage from '../pages/cadastro.page';
const paginaCadastro = new CadastroPage();

Given('que acessei a funcionalidade de login', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/login');

});

When('informar o email registrado', function () {
    paginaCadastro.typeEmail();
});

When('informar a senha registrada', function () {
    paginaCadastro.typeSenha();
});

When('confirmar a operação', function () {
    paginaCadastro.clickButtonCadastrar();
});

Then('o usuário estará cadastrado', function () {
    paginaCadastro.getLinkPerfil().should('contain', nome);  
});