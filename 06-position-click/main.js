console.log('ok');

const criaQuadradinho = function(e) {
    if (e.buttons) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'purple';
        div.style.position = 'absolute';
        div.style.width = '10px';
        div.style.height = '10px';
        div.style.left = `${e.clientX}px`;
        div.style.top = `${e.clientY}px`;
        document.body.appendChild(div);
    }
};

document.addEventListener('mousemove', criaQuadradinho);

const divm = document.querySelector('div.mover');

const mover = function(e) {
    const l = Number.parseInt(divm.style.left) | 0;
    const t = Number.parseInt(divm.style.top) | 0;
    if (e.code === 'KeyD') {
        divm.style.left = `${l + 1}px`;
    }
    if (e.code === 'KeyA') {
        divm.style.left = `${l - 1}px`;
    }
    if (e.code === 'KeyS') {
        divm.style.top = `${t + 1}px`;
    }
    if (e.code === 'KeyW') {
        divm.style.top = `${t - 1}px`;
    }
};

document.addEventListener('keypress', mover);
