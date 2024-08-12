/*TODO -> REFATORAR O JS*/

// Ao clicar em menu ele abre as opcoes
document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu-options');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

// Controle do popup de login
document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'none';
});

// Fechar popup caso clicar fora da regiao dela
window.addEventListener('click', function(event) {
    var popup = document.getElementById('login-popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
