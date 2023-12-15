let load = document.querySelector('.first');

let load_b = document.querySelector('.two');
let last = document.querySelectorAll('.last');

load.addEventListener('click', loadingc);
load_b.addEventListener('click', loadingd);


function loadingc() {
   
   const menu_item = document.querySelectorAll('.menu-cards__active .last');
   menu_item.forEach(item => item.classList.remove('last'));
   
  load.style.display = 'none';
   console.log(menu_item)

  };
  function loadingd() {
   
    const menu_item = document.querySelectorAll('.menu-cards__active .last');
    menu_item.forEach(item => item.classList.remove('last'));
    
  
   load_b.style.display = 'none';
  
    console.log(menu_item)
 
   };
 
  console.log(load);

  console.log(load_b);

  console.log(last);