console.log('main ok');

const criaExcluiBlocos = function(e) {
    if (e.target.tagName === 'DIV') {
        e.target.remove();
    } else {
        const novaDiv = document.createElement('div');
        novaDiv.textContent = 'div js';
        document.body.appendChild(novaDiv);
    }
};

// callback
document.addEventListener('click', criaExcluiBlocos);
