(function () {
    const menu_burger = document.querySelector('.menu_burger');
    const menu = document.querySelector('.menu');
    menu_burger.addEventListener('click', () => {
        menu_burger.classList.toggle('menu_burger_active');
        menu.style.display = "flex";
        console.log("menu open");
    });
    const menu_burger_active = document.querySelector('.menu_burger_active');
    if (menu_burger_active){
        menu_burger_active.addEventListener('click', () => {
            menu.style.display = "none";
            console.log("menu close");
        });
    }
}());
