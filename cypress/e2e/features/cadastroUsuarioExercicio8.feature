#language:pt
Funcionalidade: Cadastro de usuário

Cenário: Cadastro de usuário com sucesso
    Dado que acessei a funcionalidade de registre-se
    Quando informar um novo nome
    E informar um novo e-mail
    E informar uma nova senha
    E informar a confirmação da senha
    E confirmar a operação
    Então o usuário será cadastrado com sucesso