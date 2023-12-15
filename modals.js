import {prodacts} from "./json.js";

let cards_item = document.querySelectorAll('.cards-item');

cards_item.forEach(item => item.addEventListener('click', modal));

function modal() {
    unactivescroll();
   let index = this.dataset.card_number;
   let modal = document.getElementById('modal');
    let size_item = document.querySelectorAll('[data-size]');
    let additives_item = document.querySelectorAll('[data-additives]')
    let price_item = document.querySelectorAll('.modal__input');
    let total_price = document.querySelector('.modal-name__total span');
    let price_total = 0;

    price_item.forEach(item => item.addEventListener('change', price));
    modal.classList.remove('modal__unactive');
    modal.addEventListener('click', close);
    
    changevalue(index);
    function changevalue() {
        total_price.innerHTML = prodacts[index].price + '$';
        document.querySelector('.modal-img__wrap img').src = prodacts[index].path;
        document.querySelector('.modal-name').innerHTML = prodacts[index].name;
        document.querySelector('.modal-descr').innerHTML = prodacts[index].description;
        document.querySelector(".size-s").innerHTML = prodacts[index].sizes.s.size;
        document.querySelector(".size-m").innerHTML = prodacts[index].sizes.m.size;
        document.querySelector(".size-l").innerHTML = prodacts[index].sizes.l.size;
        document.querySelector(".adds-first").innerHTML = prodacts[index].additives[0].name;
        document.querySelector(".adds-second").innerHTML = prodacts[index].additives[1].name;
        document.querySelector(".adds-third ").innerHTML = prodacts[index].additives[2].name;
    }

    

    function price() {
        let size_price = 0;
        let additives_price = 0;
        size_item.forEach(item => {
            let price = Number(prodacts[index].sizes[item.dataset.size]["add-price"]);
            item.checked ? size_price += price : size_price;
        })
        additives_item.forEach(item => {
            let price = Number(prodacts[index].additives[item.dataset.additives]["add-price"]);
            item.checked ? additives_price += price : additives_price;
        })
        price_total = (+prodacts[index].price + size_price + additives_price).toFixed(2) + '$';
        total_price.innerHTML = price_total
    }

    function close(event) {
        let close_button = document.querySelector('.modal-b');
        if (event.target === modal || event.target === close_button) {
            additives_item.forEach(item => item.checked = false);
            size_item[0].checked = true;
            modal.classList.add('modal__unactive');
            price_total = 0;
            setTimeout(activescroll, 100);
        }
    };
  
}


function activescroll() {
    document.body.style = "";
}
function unactivescroll() {
    document.body.style = `overflow: hidden;`;
}
