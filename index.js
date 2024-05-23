class Pessoa {
    nome;
    idade;
    genero;

    andar() {
        console.log(`${this.nome} está andando`);
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

}

class Funcionario extends Pessoa {
    numeroCarteira;
    dataAdmissao;

    trabalhar() {
        console.log(`${this.nome} está trabalhando`)
    }

    falar() {
        console.log('Esta pessoa não pode falar agora.');
    }
}


var rafael = new Pessoa();
rafael.nome = 'Rafael Elias';
rafael.idade = 29;
rafael.genero = 'M';
console.log(rafael.nome);
rafael.andar();

var ana = new Pessoa();
ana.nome = 'Ana Paula';
ana.idade = 28;
console.log(ana.nome);
ana.falar();

var funcionario1 = new Funcionario();
funcionario1.nome = 'Elias de Jesus';
funcionario1.idade = 65;
funcionario1.dataAdmissao = '01/01/2004';


funcionario1.andar();
funcionario1.falar();
funcionario1.trabalhar();
