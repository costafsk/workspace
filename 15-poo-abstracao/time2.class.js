export class Time { // 86400 = 00:00:00
    constructor(hours = 0, minutes = 0, seconds = 0) {
        this._seconds =
            (seconds + minutes * 60 + hours * 3600) % 86400;
    }

    plusMinutes(m) {
        this._seconds = (this._seconds + m * 60) % 86400;
    }

    plusSeconds(s) {
        this._seconds = (this._seconds + s) % 86400;
    }

    plusHours(h) {
        this._seconds = (this._seconds + h * 3600) % 86400;
    }

    tick() {
        this.plusSeconds(1);
    }

    plus(t) {
        // this._seconds = (this._seconds + t._seconds) % 86400;
        this.plusSeconds(t.seconds);
        this.plusMinutes(t.minutes);
        this.plusHours(t.hours);
        // this.plusSeconds(t._seconds);
    }

    shift() {
        this.plusHours(12);
    }

    get seconds() {
        return parseInt(this._seconds % 60);
    }

    get minutes() {
        return parseInt(this._seconds % 3600 / 60);
    }

    get hours() {
        return parseInt(this._seconds / 3600);
    }


    toString() { // 07:07:07
        return (this.hours < 10 ? '0' : '') + this.hours
        + ':' + (this.minutes < 10 ? '0' : '') + this.minutes
        + ':' + (this.seconds < 10 ? '0' : '') + this.seconds;
    }
}

// API: Application Programming Interface
// Interface de Programação do Aplicativo
// Como se interaje com o objeto?



