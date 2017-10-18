(function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuMain = document.querySelector('.menu-main');

    menuToggle.onclick = function () {
        menuToggle.classList.toggle('menu-accentcolor');
        menuMain.classList.toggle('menu-visible');
    }
}());

