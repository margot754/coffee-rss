

let slider_count = 0;
let width_progress = 0;
let auto = setInterval(autoswipe, 40)
let posX = 0;
let posY = 0;



const slider = document.querySelector('.slider-wrap');
const slider_item = document.querySelectorAll('.slider-card__wrap');
const next_slide = document.querySelector('.arrow-right');
const prev_slide = document.querySelector('.arrow-left');
const indicator = document.querySelectorAll('.item-indi');
const fill = document.querySelectorAll('.fill');



next_slide.addEventListener('click', nextSlide);
prev_slide.addEventListener('click', prevSlide);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('touchmove', swipeMove);

function pauseSwap(event) {
    clearInterval(auto);
    event.preventDefault()
} ;


function continueSwap() {
    auto = setInterval(autoswipe, 40)
} ;




function autoswipe () {
    const filling = fill[slider_count];
   filling.style.width = `${width_progress}%`;
    width_progress += 1;

    if (width_progress > 100) {
        filling.style.width = '0%'
        nextSlide();
    }
  
};

function nextSlide() {
    slider_count++;
    if (slider_count >= 3) slider_count = 0;
    rollSlider(slider_count);
}

function prevSlide() {
    slider_count--;
    if (slider_count < 0) slider_count = 2;
    rollSlider(slider_count);
}

function rollSlider(count) {
    
    slider.style.transform = `translateX(-${slider_count}00%)`;
    indicator.forEach(item => item.classList.remove('fill-active'));
   
    indicator[count].classList.add('fill-active');
    fill.forEach(item => item.style.width = '0%');
    width_progress = 0;
}

function swipeStart(event) {
    posX = event.touches[0].clientX;
    posY = event.touches[0].clientY;
};

function swipeMove(event) {
    if (!posX || !posY == -1) return;

    let posInitX = event.touches[0].clientX;
    let posInitY = event.touches[0].clientY;
    let posFinalX = posX - posInitX;
    let posFinalY = posY - posInitY;

 
    if (Math.abs(posFinalX) > Math.abs(posFinalY)) {
        if (posFinalX > 0)  nextSlide() ;
        if (posFinalX < 0)  prevSlide();
    }
    posX = 0;
   
};


slider_item.forEach(item => {
   
    item.addEventListener('touchstart', pauseSwap);
    item.addEventListener('touchend',  continueSwap);
    item.addEventListener('mouseover', pauseSwap);
    item.addEventListener('mouseout', continueSwap);


    
});


