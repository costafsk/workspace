class Ventilator {
    constructor(watts, brand, minRPM, maxRPM) {
        this._watts = watts;
        this._brand = brand;
        this._minRPM = minRPM;
        this._maxRPM = maxRPM;
        this._on = false;
        this._off = true;
        this._velocity = 0;
        this._rpm = 0;
    }

    get watts() {
        return this._watts;
    }

    get brand() {
        return this._brand;
    }

    get minRPM() {
        return this._minRPM;
    }

    get maxRPM() {
        return this._maxRPM;
    }
    get rpm() {
        return this._rpm;
    }
    get velocity() {
        return this._velocity;
    }
    speedUp() {
        if (this._rpm > this._maxRPM) return;
        if (this._velocity < 3) this._velocity ++;
        if (this._velocity === 1) {
            this._rpm = this._minRPM;
        } else if (this._velocity === 2) {
            this._rpm = (this._maxRPM + this._minRPM)/2;
        } else if (this._velocity === 3) {
            this._rpm = this._maxRPM;
        }
    }
}
