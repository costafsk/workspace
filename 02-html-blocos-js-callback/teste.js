console.log('ok!');

console.log(trimLeft('  q q '));
console.log(trimLeft('  q q ') === 'q q ');

// função nomeada
// let trimLeft = function(str) { ... }
function trimLeft(str) {
  let r = '';
  let ok = false; // ok é uma FLAG!
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ' || ok) {
      r += str[i];
      ok = true;
    }
  }
  return r;
}

// as funções podem ser armazenadas em variáveis
// a variável é o nome!
let d = function(nome) {
  return 'Darth ' + nome;
};
let darth = d;

console.log(d); // imprime a função
console.log(d()); // invoca a função
console.log(d('Mustache'));

// função anônima
console.log(function(nome) {
  return 'Padawan ' + nome;
}('Rogério'));

// callback é uma função a ser chamada de volta
function texto(str, callback) {
  return callback(str);
}

console.log(texto('   blabla', trimLeft));
console.log(texto('   blabla', d));

function impar(ateh, callback) {
  for (let i = 1; i <= ateh; i++) {
    if (i % 2 === 1) {
      callback(i);
    }
  }
}

impar(100, console.log);
impar(100, document.write.bind(document));
// passando uma função anônima!
impar(50, function(n) {
  console.log(`ímpar: ${n}`); // string interpolada
});

// impar(10, alert);
// selecionando o parágrafo pela posição
// no body do documento
document.body.children[2].onclick = function() {
  alert('p clicado');
};

document.body.children[2].onclick = function () {
  alert('parágrafo clicado');
};

let h2 = document.querySelector('h2');

console.log(h2);
// addEventListener(evento, callback)
h2.addEventListener('click', function() {
  h2.style.color = 'red';
});

let input = document.querySelector('input');
// let button = document.getElementById('darthfy');
let button = document.querySelector('#darthfy');
let output = document.querySelector('output');

button.addEventListener('click', function() {
  output.innerText = d(input.value);
  // output.textContent = d(input.value);
});

let like = document.querySelector('#like');
let span = document.querySelector('span');
let likes = 0;
like.addEventListener('click', function() {
    // ++algo; // é um pré-incremento
    span.textContent = `${++likes} like(s)`;
});
