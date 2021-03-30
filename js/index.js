const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav-mobile');

burger.addEventListener('click', (event) => {
  event.target.classList.toggle('change');

  if (nav.style.visibility === 'visible') {
    nav.style.visibility = 'hidden';
    nav.style.top = '-100vh';
  } else {
    nav.style.visibility = 'visible';
    nav.style.top = '0';
  };
})

let hover = document.querySelectorAll('.greeting__heading');

for (let i = 0; i < hover.length; i++) {
    hover[i].innerHTML = hover[i].innerHTML.replace(/(.)/g, '<span>$1</span>');
}

let translate = document.querySelector('.animation__non-reverse');
let translateReverse = document.querySelector('.animation__reverse');
let translateItem = document.querySelectorAll('.animation__non-reverse i');
let translateReverseItem = document.querySelectorAll('.animation__reverse i')

document.addEventListener('mousemove', (event) => {
  if(!event.target.closest('.header')) {
    return
  } else {
  let mouseY = event.clientY;
  let mouseX = event.clientX;

  translate.style.top =  (mouseY / 25) + 'px';
  translate.style.left =  (mouseX / 25) + 'px';
  translateReverse.style.top = (-mouseY / 25) + 'px';
  translateReverse.style.left = (-mouseX / 25) + 'px';
  }
})
