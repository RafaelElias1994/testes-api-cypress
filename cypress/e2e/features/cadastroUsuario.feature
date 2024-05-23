#language:pt
Funcionalidade: Cadastro de usuário

Cenário: Cadastro de usuário com sucesso
    Dado que acessei a funcionalidade de Cadastro
    Quando informar um novo nome
    E informar um novo e-mail
    E confirmar a operação
    Então o usuário será registrado na lista
