console.log('aula.js');
// AJAX
const URL = 'https://cors.io/?http://dados.fee.tche.br/ckan-download/fee-2016-mun-indicadores-criminais-furtos-103599.csv';

fetch(URL)
    .then(texto)
    .then(processa)
    .catch(console.error);

function texto(r) {
    return r.text();
}

function processa(texto) {
    linhas = texto.split('\n');
    console.log(linhas);
}








