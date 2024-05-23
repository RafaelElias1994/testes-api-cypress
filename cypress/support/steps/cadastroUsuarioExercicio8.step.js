import { Given, When, Then, And, But} from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import CadastroPage from '../pages/cadastro.page';
const paginaCadastro = new CadastroPage();

var senhaunica;
var nome;

Given('que acessei a funcionalidade de registre-se', function () {
    cy.visit('https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/register');

});

When('informar um novo nome', function () {
    nome = faker.person.fullName;
    paginaCadastro.typeNome(nome);
});

When('informar um novo e-mail', function () {
    paginaCadastro.typeEmail(faker.internet.email());
});

When('informar uma nova senha', function () {
    senhaunica = 1234567;
    paginaCadastro.typeSenha(senhaunica);
});

When('informar a confirmação da senha', function () {
    paginaCadastro.typeConfirmarSenha(senhaunica);  
});

When('confirmar a operação', function () {
    paginaCadastro.clickButtonCadastrar(); 
});

Then('o usuário será cadastrado com sucesso', function () {
    paginaCadastro.getLinkPerfil().should('contain', nome); 
});