console.log('main.js works!');
// objetivo: modelar coisas/conceitos reais como objetos
// JavaScript 2015 / ES6: disponibiliza CLASSES
// Imaginem um Livro!
// ABSTRAÇÃO: selecionar os detalhes importantes para o modelo!
class Livro { // classe/abstração: o que é um livro? para meu sistema!
    constructor(titulo, autor) { // parâmetros do construtor!
        // o objeto livro terá título e autor (o objeto, aqui é o THIS)
        this.titulo = titulo;
        this.autor = autor;
    }
    // é sempre uma BOA PRÁTICA escrever o método toString
    toString() { // Funções dentro de classes são MÉTODOS!
        return `${this.titulo} / ${this.autor}`;
    }
}
// mein kampf / hitler
// ​Senhor dos Anéis / Tolkien
// ​Metamorfose / Franz Kafka
// ​astrophysics for people in a hurry - Neil deGrasse Tyson
// CLASSE: modelo/abstração/forma
const l1 = new Livro('Mein Kampf', 'Hitler');
// new serve para instanciar um objeto a partir de uma classe!
const l2 = new Livro('Senhor dos Anéis', 'Tolkien');
const l3 = new Livro('Metamorfose', 'Franz Kafka');
const l4 = new Livro('Astrophysic for people in a hurry', 'Neil Tyson');
const l5 = new Livro('Harry Potter', 'JK Rowling');


console.log(l1.toString());
console.dir(l1);

// alert(l1); // imprime?
document.write(l1);

let x = 4;
let y = x;
console.log(x); // 4
console.log(y); // 4
x = 5;
console.log(x); // 5
console.log(y); // 4

const l6 = l2; // cadê o new?
console.log(l2);
console.log(l6);
l2.autor = 'John Ronald Reuel Tolkien';
console.log(l2);
console.log(l6);
l6.titulo = 'Senhor dos Anéis!!!';
console.log(l2.titulo); // o mesmo objeto!
// l2 e l6 ***REFERENCIAM*** O MESMO OBJETO!

// MODELANDO A TV!
class TV {
    constructor(marca, tamanho) {
        // PROPRIEDADES IMUTÁVEIS:
        this._marca = marca; // _marca seja uma propriedade interna!
        this._tamanho = tamanho;
        // PROPRIEDADES MUTÁVEIS:
        this._canal = 14; // de 14 até 83
        this._volume = 10; // de 0 até 100 (10 é um volume inicial arbitrário)
        this._ligada = false;
    }

    get isLigada() {
        return this._ligada;
    }

    ligarDesligar() {
        this._ligada = ! this._ligada;
    }

    irParaCanal(canal) {
        if (this.isLigada) {
            if (canal > 83) this._canal = 83;
            else if (canal < 14) this._canal = 14;
            else this._canal = canal;
        }
    }

    aumentarVolume() { // MÉTODO/OPERAÇÃO: respeitar a INTEGRIDADE
        if ( ! this.isLigada) return; // como um break/não retonar nada

        if (this._volume < 100) { // regra de validação
            this._volume = this._volume + 1; // this._volume++;
        }
    }

    diminuirVolume() {
        if (!this.isLigada) return;

        if (this._volume > 0) {
            this._volume--;
        }
    }

    descerCanal() {
        if ( ! this.isLigada) return;

        if (this._canal > 14) {
            this._canal--;
        } else {
            this._canal = 83;
        }
    }

    subirCanal() {
        if ( ! this.isLigada) return;

        if (this._canal < 83) {
            this._canal++;
        } else {
            this._canal = 14;
        }
    }

    get canal() {
        return this._canal;
    }

    get volume() {
        return this._volume;
    }

    // GETTER/ACESSOR, parece um método,
    // MAS NÃO É UM MÉTODO! É UMA PROPRIEDADE!
    get marca() {
        return this._marca;
    }

    get tamanho() {
        return this._tamanho;
    }

    toString() {
        return `${this.marca} ${this.tamanho}"`;
    }
}

// instanciando um objeto TV
const tv1 = new TV('LG', 50);
tv1.ligarDesligar(); // ligar
console.log(tv1);
console.log(tv1.marca);
// tv1._marca = 'Samsung'; // possível, mas viola o "acordo"
console.log(tv1.canal); // 14
console.log(tv1.volume); // 10
console.log(tv1.volume); // 10
// OBJETO TEM CARACTERÍSTICAS/ATRIBUTOS/ESTADO
// OBJETO TEM COMPORTAMENTO/AÇÕES/OPERAÇÕES/MÉTODOS/VERBO!
tv1.aumentarVolume();
console.log(tv1.volume); // 11
tv1.aumentarVolume();
console.log(tv1.volume); // 12
for (let i = 0; i < 500; i++) tv1.aumentarVolume();
console.log(tv1.volume); // 100
tv1.diminuirVolume();
console.log(tv1.volume); // 99
console.log(tv1.canal); // 14
tv1.descerCanal();
console.log(tv1.canal); // 83
tv1.descerCanal();
tv1.descerCanal();
tv1.descerCanal();
console.log(tv1.canal); // 80
tv1.subirCanal();
console.log(tv1.canal); // 81

// tv1.canal(15); // não façam isso, método deve ser um verbo!
tv1.irParaCanal(15);
console.log(tv1.canal); // 15
tv1.irParaCanal(150); // tornaria a TV inconsistente!
console.log(tv1.canal); // 83
tv1.irParaCanal(5);
console.log(tv1.canal); // 14

tv1.ligarDesligar(); // desligar
console.log(tv1.isLigada); // false
tv1.ligarDesligar();
console.log(tv1.isLigada); // true

class Porta {
    constructor(material) {
        this._material = material;
        this._aberta = false;
        this._trancada = false;
    }

    abrir() {
        if ( ! this.isTrancada) this._aberta = true;
    }

    fechar() {
        this._aberta = false;
    }

    trancar() {
        if (this.isFechada) this._trancada = true;
    }

    destrancar() {
        this._trancada = false;
    }

    get isAberta() {
        return this._aberta;
    }

    get isFechada() {
        return ! this.isAberta;
    }

    get isTrancada() {
        return this._trancada;
    }

    get material() {
        return this._material;
    }
}

const p1 = new Porta('madeira');
console.log(p1.isAberta);
p1.abrir();
console.log(p1.isAberta);
