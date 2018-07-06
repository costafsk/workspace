document.addEventListener('DOMContentLoaded', function() {
    const bt = document.querySelector('button');
    const audio = document.querySelector('audio');
    bt.addEventListener('click', function() {
        audio.play();
    });

    const input = document.querySelector('input');
    const player = document.querySelector('#player');
    input.addEventListener('change', function() {
        const reader = new FileReader();
        reader.addEventListener('load', function(e) {
            player.src = reader.result;
            player.play();
        });
        reader.readAsDataURL(input.files[0]);
    });
});


