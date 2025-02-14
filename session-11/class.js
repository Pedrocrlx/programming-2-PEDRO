class Pessoa {
    constructor(nome,idade,cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }

    static nome = 'pedro';
    static apresentar(nome,idade,cidade) {
        return `${nome,idade,cidade}`;
    }
}

console.log(Pessoa.nome);