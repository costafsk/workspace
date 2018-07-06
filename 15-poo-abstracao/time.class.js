export class Time { // classe/substantivo // ABSTRAÇÃO!
    constructor(hours = 0, minutes = 0, seconds = 0) {
        const HOURS_PER_DAY = 24;
        const MINUTES_PER_HOUR = 60;
        const SECONDS_PER_MINUTE = 60;
        // "_" significa interno!
        this._seconds = seconds % SECONDS_PER_MINUTE;
        minutes += parseInt(seconds / SECONDS_PER_MINUTE);
        this._minutes = minutes % MINUTES_PER_HOUR;
        hours += parseInt(minutes / MINUTES_PER_HOUR);
        this._hours = hours % HOURS_PER_DAY;
    }

    get seconds() { // getter/propriedade pública
        return this._seconds;
    }

    get minutes() {
        return this._minutes;
    }

    get hours() {
        return this._hours;
    }

    // método toString para tornar o objeto apresentável!
    toString() { // 07:07:07
        return (this.hours < 10 ? '0' : '') + this.hours
        + ':' + (this.minutes < 10 ? '0' : '') + this.minutes
        + ':' + (this.seconds < 10 ? '0' : '') + this.seconds;
    }
}
