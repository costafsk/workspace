console.log('main');
// teste está dentro de window
// (objeto global === Browser)
// function teste() {
//     // omitir o var/let/const
//     // coloca no global
//     // msg = 'Hello';
//     var msg = 'Hello ';
//     if (true) {
//         // var vale para o escopo da função
//         var opa = '!!!';
//         let eita = '???';
//     }
//     console.log(msg + 'teste' + opa); // + eita);
// }

// namespace Main (semelhante ao Math)
// JSON: JavaScript Object Notation
const Main = { // JSON
    teste: function() {
        console.log('main teste');
    },
    outra: function() {
        console.log('outra');
    },
    curso: 'INFO'
};

Main.nome = 'Marcio';

const Outro = {};
Outro.qualquerCoisa = 'qualquer';


console.log(Text.reverse('ifrs'));





