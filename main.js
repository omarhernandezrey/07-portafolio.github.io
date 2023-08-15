const menucheck = document.getElementById('menu-check');
const desktopMenu = document.querySelector('.desktop-menu');

menucheck.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    desktopMenu.classList.toggle('inactive');
}

// Agregamos un evento de escucha al cargar la página para asegurarnos de que el menú esté oculto inicialmente
window.addEventListener('load', function () {
    desktopMenu.classList.add('inactive');
});
