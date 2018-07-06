import {Time} from './time2.class.js';

console.log('main.js');

const t1 = new Time(8, 50, 15); // 08:50:15
// t1.hours = 90; // não funciona
// t1._hours = 90; // funciona! mas viola o "acordo"!
console.log(t1);
console.log(t1.hours);
console.log(t1.hours === 8); // Caso de Teste
console.log(t1.minutes === 50);
console.log(t1.seconds === 15);
console.log(t1.toString());
console.log(t1.toString() === '08:50:15'); // true

const t2 = new Time(9, 10);     // 09:10:00
console.log(t2.hours === 9);
console.log(t2.minutes === 10);
console.log(t2.seconds === 0);
console.assert(t2.hours === 9, 't2.hours === 9');

const t3 = new Time(10);        // 10:00:00
console.log(t3);

const t4 = new Time();          // 00:00:00
const t5 = new Time(30);        // 06:00:00
console.log(t5);
const t6 = new Time(10, 70);    // 11:10:00
console.log(t6);

const t7 = new Time(23, 59, 70); // 00:00:10
console.log(t7);
console.log(t7.toString());

const t8 = new Time(0, 0, 86401);
console.log(t8);
console.log(t8.toString());

const t9 = new Time();
console.log(t9.toString() === '00:00:00');
t9.plusMinutes(10);
t9.plusHours(2);
t9.plusSeconds(30);
t9.tick();
console.log(t9.toString());
console.log(t9.toString() === '02:10:31');

const t10 = new Time(1, 30, 40);
t9.plus(t10);
console.log(t9.toString());
console.log(t9.toString() === '03:41:11');

t9.shift(); // trocar o turno
console.log(t9.toString() === '15:41:11');
t9.shift();
console.log(t9.toString() === '03:41:11');
