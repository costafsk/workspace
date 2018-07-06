console.log('farofa.js');

class Gato {

    constructor(nome) {
        this._nome = nome;
        this._vida = 7;
    }

    get vida() {
        return this._vida;
    }

    get estaMorto() {
        return this._vida === 0;
    }

    chutar() {
        if (this.estaMorto) throw new Error('Nao pode chutar gato morto');
        this._vida--;
    }

    get nome() {
        return this._nome.toLowerCase();
    }

    toString() {
        return 'Gato ' + this.nome;
    }

}

class Data { // classe/especificação

    constructor(dia = 1, mes = 1, ano = 2018) {
        if (dia > 31) {
            throw new Error('dia inválido >31');
        }
        if (mes > 12) {
            throw new Error('mes invalido >12');
        }
        // atributos do objeto privado!
        // _ avisa que o atributo não é para ser usado diretamente
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }

    // getter para o atributo
    get mes() {
        return this._mes;
    }
    // setter
    set mes(m) {
        if (m > 12 || m < 0) return;
        this._mes = m;
    }

    get dia() {
        return this._dia;
    }

    set dia(d) {
        if (d <= 31) this._dia = d;
    }

    amanha() {
        this.dia = this.dia + 1;
    }

    ehNatal() {
        return this.dia === 25 && this.mes === 12;
    }

    get ano() {
        return this._ano;
    }

    toString() { // método!
        return this._dia + '/' + this._mes + '/' + this._ano;
    }
}

let d = new Data(); // objeto/instância

alert(d); // d.toString()
console.log(d.toString());


const vent = new Ventilator(200, 'Arno', 100, 300);
console.log(vent.watts === 200);
console.log(vent.brand === 'Arno');
console.log(vent.minRPM === 100);
console.log(vent.maxRPM === 300);

console.log(vent.on); // false
console.log(vent.on === false);
console.log(vent.off); // true
console.log(vent.off === true);
console.log(vent.velocity); // 0
console.log(vent.velocity === 0);
console.log(vent.rpm); // 0
console.log(vent.rpm === 0);

vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
/*
vent.slowDown();
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

vent.on = true; // should not be possible
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

vent.velocity = 1; // should not be possible
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 2);
console.log(vent.rpm === 200); // mean between min and max
vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 3);
console.log(vent.rpm === 300);
vent.speedUp(); // should not have effect
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 3);
console.log(vent.rpm === 300);

vent.slowDown();
console.log(vent.on ==    const vent = new Ventilator(200, 'Arno', 100, 300);
    console.log(vent.watts === 200);
    console.log(vent.brand === 'Arno');
    console.log(vent.minRPM === 100);
    console.log(vent.maxRPM === 300);

    console.log(vent.on); // false
    console.log(vent.on === false);
    console.log(vent.off); // true
    console.log(vent.off === true);
    console.log(vent.velocity); // 0
    console.log(vent.velocity === 0);
    console.log(vent.rpm); // 0
    console.log(vent.rpm === 0);

    vent.speedUp();
    console.log(vent.on === true);
    console.log(vent.off === false);
    console.log(vent.velocity === 1);
    console.log(vent.rpm === 100);

    vent.slowDown();
    console.log(vent.on === false);
    console.log(vent.off === true);
    console.log(vent.velocity === 0);
    console.log(vent.rpm === 0);

    vent.on = true; // should not be possible
    console.log(vent.on === false);
    console.log(vent.off === true);
    console.log(vent.velocity === 0);
    console.log(vent.rpm === 0);

    vent.velocity = 1; // should not be possible
    console.log(vent.on === false);
    console.log(vent.off === true);
    console.log(vent.velocity === 0);
    console.log(vent.rpm === 0);

    vent.speedUp();
    console.log(vent.on === true);
    console.log(vent.off === false);
    console.log(vent.velocity === 1);
    console.log(vent.rpm === 100);
    vent.speedUp();
    console.log(vent.on === true);
    console.log(vent.off === false);
    console.log(vent.velocity === 2);
    console.log(vent.rpm === 200); // mean between min and max
    vent.speedUp();
    console.log(vent.on === true);
    console.log(vent.off === false);
    console.log(vent.velocity === 3);
    console.log(vent.rpm === 300);
    vent.speedUp(); // should not have effect
    console.log(vent.on === true);
    console.log(vent.off === false);
    console.log(vent.velocity === 3);
    console.log(vent.rpm === 300);

    vent.slowDown();
    console.log(vent.on === true);
    console.log(vent.off === false);
    console.log(vent.velocity === 2);
    console.log(vent.rpm === 200);
    vent.slowDown();
    console.log(vent.on === true);
    console.log(vent.off === false);
    console.log(vent.velocity === 1);
    console.log(vent.rpm === 100);
    vent.slowDown();
    console.log(vent.on === false);
    console.log(vent.off === true);
    console.log(vent.velocity === 0);
    console.log(vent.rpm === 0);
    vent.slowDown(); // should not have effect
    console.log(vent.on === false);
    console.log(vent.off === true);
    console.log(vent.velocity === 0);
    console.log(vent.rpm === 0);

    const vent2 = new Ventilator(250, 'GE', 80, 400);
    console.log(vent2.watts === 250);
    console.log(vent2.brand === 'GE');
    console.log(vent2.minRPM === 80);
    console.log(vent2.maxRPM === 400);
    console.log(vent2.on === false);
    console.log(vent2.off === true);
    console.log(vent2.velocity === 0);
    console.log(vent2.rpm === 0);

    vent2.speedUp();
    console.log(vent2.velocity === 1);
    console.log(vent2.rpm === 80);
    vent2.speedUp();
    console.log(vent2.velocity === 2);
    console.log(vent2.rpm === 240); // mean between min and max
    vent2.speedUp();
    console.log(vent2.velocity === 3);
    console.log(vent2.rpm === 400);

    vent2.turnOff();
    console.log(vent2.on === false);
    console.log(vent2.off === true);
    console.log(vent2.velocity === 0);
    console.log(vent2.rpm === 0);= true);
console.log(vent.off === false);
console.log(vent.velocity === 2);
console.log(vent.rpm === 200);
vent.slowDown();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
vent.slowDown();
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);
vent.slowDown(); // should not have effect
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

const vent2 = new Ventilator(250, 'GE', 80, 400);
console.log(vent2.watts === 250);
console.log(vent2.brand === 'GE');
console.log(vent2.minRPM === 80);
console.log(vent2.maxRPM === 400);
console.log(vent2.on === false);
console.log(vent2.off === true);
console.log(vent2.velocity === 0);
console.log(vent2.rpm === 0);

vent2.speedUp();
console.log(vent2.velocity === 1);
console.log(vent2.rpm === 80);
vent2.speedUp();
console.log(vent2.velocity === 2);
console.log(vent2.rpm === 240); // mean between min and max
vent2.speedUp();
console.log(vent2.velocity === 3);
console.log(vent2.rpm === 400);

vent2.turnOff();
console.log(vent2.on === false);
console.log(vent2.off === true);
console.log(vent2.velocity === 0);
console.log(vent2.rpm === 0);
*/
