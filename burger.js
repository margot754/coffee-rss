let ul = document.querySelector('.header-ul');
let menu = document.querySelector('nav');
let body = document.querySelector('body');
let li = document.querySelector('.header-li');

menu.addEventListener('click', function menuOpen(){
    ul.classList.toggle('open');
   
    body.classList.toggle('noscroll')
});

