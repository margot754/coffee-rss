let tabs_item = document.querySelectorAll('.tabs-item');

tabs_item.forEach(item => item.addEventListener('click', tabs));

function tabs() {
    const id = this.dataset.tabs;
    const menu = document.querySelector('#menu-' + id);
    const menu_items = document.querySelectorAll('.menu-cards');
    
    menu_items.forEach(item => item.classList.remove('menu-cards__active'));
    menu.classList.add('menu-cards__active');
}