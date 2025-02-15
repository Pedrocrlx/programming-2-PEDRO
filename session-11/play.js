class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    #nome = 'nome';
    #idade = "idade";

    get idade() {
        return this.#idade;
    }
    set idade(value) {
        this.#idade = `${value}`;
    }

    get nome() {
        return this.#nome;
    }

    set nome(name) {
        this.#nome = `${name}`;
    }
}

const pessoa = new Pessoa('Pedro', 20);
console.log(pessoa.idade);
console.log(pessoa.nome); 

