class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} anos e sou do curso ${this.curso}`;
    }

    static info() {
        return "Esta é uma classe para representar uma pessoa";
    }
    #nome = 'Nome';
    #idade = 'Idade';
    #curso = 'Nenhum curso de momento :(';

    get idade() {
        return this.#idade;
    }

    set idade(value) {
        this.#idade = `${value}`;
    }

    get curso() {
        return this.#curso;
    }

    set curso(className) {
        function isNumber(className) {
            return typeof className === 'number';
        }
        if (isNumber(className)) {
            return 'Curso não pode ser so números !';
        }
        this.#curso = `${className}`;
    }

}

// verificar se é um numero 

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
}

const pessoa0 = new Pessoa('diogo', 40);
const pessoa1 = new Pessoa('pedro', 10);
const pessoa2 = new Estudante('jorge', 10, 1);
const pessoa3 = new Estudante('joao', 40, 'Etic PW 24-26');

console.log(pessoa3.idade);
console.log(pessoa3.curso);
console.log(pessoa2.apresentar());
console.log(Pessoa.info());
