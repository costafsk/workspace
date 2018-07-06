// alert('wow'); // causa erro
console.log('ok');

// undefined: falha
// document.body.children[5].textContent = 'qq';

// filhos de body
const h1 = document.body.children[0];
h1.textContent = 'Objetos';

// não existe ul: falha (null)
// document.querySelector('ul').innerHTML += '<li>meu list item</li>';

// localizar o primeiro ol e adicionar HTML
document.querySelector('ol').innerHTML += '<li>meu list item</li>';

// localizar o primeiro p e adicionar mais HTML ao seu pai
document.querySelector('p').parentElement.innerHTML += '<p>mais um irmão</p>';

// localizar o aside
const a = document.querySelector('aside');

// criar um elemento
const s = document.createElement('strong');
s.textContent = 'texto';

// adicionar o novo elemento em outro
a.append(s);

const input = document.querySelector('input');
const button = document.querySelector('button');
const ol = document.querySelector('ol');

button.addEventListener('click', function(evento) {
    // evitar a propagação do evento
    // na prática: não enviar o formulário!
    // use sempre que o elemento estiver em um <form>
    evento.preventDefault();

    const texto = input.value;
    // interpolando o texto na string
    const li = `<li>${texto}</li>`;
    ol.innerHTML += li;
    input.value = '';
});

