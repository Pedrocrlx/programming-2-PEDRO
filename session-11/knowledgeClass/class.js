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
        // Validate number is a number or < 0
        if (isNaN(value) || value < 0) {
            console.log('Idade inválida. Apenas números, e positivos são aceitos.');
        } else {
            this.#idade = `${value}`;
        }
    }

    get curso() {
        return this.#curso;
    }

    set curso(className) {
        // Validate string is a string
        if (isNaN(className) == false) {
            console.log('Curso inválido. Apenas letras são aceitas.');
        } else {
            this.#curso = `${className}`;
        }
    }

}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }

    fazerSom() {
        return 'Estou em silêncio';
    }
}

class Cao extends Animal {
    constructor(name) {
        super(name);
    }

    fazerSom() {
        return 'au au';
    }

}

class Gato extends Animal {
    constructor(name) {
        super(name);
    }

    fazerSom() {
        return 'Meoaww';
    }
}

class Passaro extends Animal {
    constructor(name) {
        super(name);
    }

    fazerSom() {
        return 'PIIIIII PI PI PI PI ';
    }
}

// Mixin functions || Add method flyng into a variable
const Voar = {
    voar() {
        return '*VOAR*';
    }
}

console.log(Voar.voar());
const bird = new Passaro('Coruja'); // Create a bird 
console.log(`Olá sou uma ${bird.name} ` + bird.fazerSom() + Voar.voar()); // Show your name and your sound, and fly

// Animal class test
const animalTest = new Animal('Test');
console.log(animalTest.fazerSom());

// Creating a cat and a dog with a name
const animal0 = new Cao('Petrus');
const animal1 = new Gato('Fella');

// Printing animals' names and their sounds
console.log(`Meu nome é ${animal0.name} ` + animal0.fazerSom());
console.log(`Meu nome é ${animal1.name} ` + animal1.fazerSom());

// Creating 2 people
const pessoa0 = new Pessoa('diogo', 24);
const pessoa1 = new Pessoa('pedro', 20);

// Creating 2 students
const pessoa2 = new Estudante('jorge', 33);
const pessoa3 = new Estudante('joao', 22, 'PW 24-26');

