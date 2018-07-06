export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    dizerNome() {
        console.log(this.nome);
    }

    get teste() {
        return 1;
    }
}
