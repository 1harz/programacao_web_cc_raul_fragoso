/*TODO -> REFATORAR O JS*/

// Validar email
function validarEmail(email) {
    // REGEX DO EMAIL - ACEITA QUALQUERCOISA@QUALQUERCOISA.COM - QUALQUER COISA NAO PODE SER ESPACO E NEM @
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Ao clicar em menu ele abre as opcoes do menu
document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu-options');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});

// Controla o popup de login
document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-popup').style.display = 'flex';
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    if (validarEmail(email)) {
        alert('Email valido'); //Gera alerta falando que o email inserido esta ok
    } else {
        alert('Por favor, insira um email valido.');
    }
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'none';
});

// Fechar o popup caso clicar fora da regiao dele
window.addEventListener('click', function(event) {
    var popup = document.getElementById('login-popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
