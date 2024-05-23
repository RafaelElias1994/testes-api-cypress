export default class CadastroPage {
    inputNome = '#name';
    inputEmail = '#email';
    inputSenha = '#password';
    inputConfirmaSenha = '#password';
    buttonLimpar = '[data-test-id="clearButton"]';
    buttonCadastrar = 'button[type="submit"]';

    linkRegistrar = '[href="./register"]';
    linkPaginaUsuarios = '[href="./usarios.html"]';
    linkPaginaSobre = '[href="./sobre.html"]';
    linkPerfil = '[href="./profile"]';

    listaUsuarios = '#lista-usuarios';

    typeNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    typeEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    typeSenha(senha) {
        cy.get(this.inputSenha).type(senha);
    }

    typeConfirmarSenha(confirmasenha) {
        cy.get(this.inputConfirmaSenha).type(confirmasenha);
    }

    clickButtonCadastrar() {
        cy.get(this.buttonCadastrar).click();
    }

    getLinkPerfil() {
        return cy.get(this.linkPerfil);
    }

    getListaUsuarios() {
        return cy.get(this.listaUsuarios);
    }

    cadastrar(nome, email) {
        this.typeNome(nome);
        this.typeEmail(email);
        this.clickButtonCadastrar();
    }

    clickButtonLimpar() {
        cy.get(this.buttonLimpar).click();
    }
}