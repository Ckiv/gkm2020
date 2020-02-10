(function () {
    const menu_burger = document.querySelector('.menu_burger');
    const menu = document.querySelector('.menu');
    const main_menu = document.querySelector('.main_menu');
    menu_burger.addEventListener('click', () => {
        menu_burger.classList.toggle('menu_burger_active');
        menu.style.display = "flex";
    });
    const menu_burger_active = document.querySelector('menu_burger_active');
    menu_burger_active.addEventListener('click', () => {
        menu.style.display = "none";
        main_menu.style.height = "50px";
    });
}());