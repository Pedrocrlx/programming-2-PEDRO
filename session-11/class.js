class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
}

const pessoa = new Pessoa('diogo', 40);
const pessoa2 = new Pessoa('pedro', 10);
const pessoa3 = new Estudante('joao', 40, 'Etic PW 24-26');


console.log(pessoa3.apresentar());