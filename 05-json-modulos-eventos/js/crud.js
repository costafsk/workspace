console.log('js/crud.js');

const form = document.querySelector('form');
const inputDescricao =
    document.querySelector('input#descricao');
const selectPrioridade =
    document.querySelector('select#prioridade');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const descricao = inputDescricao.value;
    const prioridade = selectPrioridade.value;
    const bt = `<button>Excluir</button>`;
    const tds = `<td>${descricao}</td><td>${prioridade}</td> <td>${bt}</td>`;
    const row = `<tr>${tds}</tr>`;
    tbody.innerHTML += row;
});

tbody.addEventListener('click', function(e) {
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        console.log('Excluir');
        if (confirm('Confirma?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
});

tbody.addEventListener('dblclick', function(e) {
    if (e.target.tagName === 'TD') {
        console.log('editar');
        inputDescricao.value = e.target.textContent;
    }
});

