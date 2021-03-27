const burger = document.getElementById('burger');
const nav = document.getElementById('nav-mobile');

burger.onclick = function() {
  this.classList.toggle('change');

  if (nav.style.visibility === 'visible') {
    nav.style.visibility = 'hidden';
    nav.style.top = '-100vh';
  } else {
    nav.style.visibility = 'visible';
    nav.style.top = '0';
  };
};

let hover = document.getElementsByClassName('greeting__heading');

for (let i = 0; i < hover.length; i++) {
    hover[i].innerHTML = hover[i].innerHTML.replace(/(.)/g, '<span>$1</span>');
}


let translate = document.querySelector('.animation__non-reverse');
let translateReverse = document.querySelector('.animation__reverse');
let translateItem = document.querySelectorAll('.animation__non-reverse i');
let translateReverseItem = document.querySelectorAll('.animation__reverse i')




document.addEventListener('mousemove', (event) => {
  console.log(event.target)
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
