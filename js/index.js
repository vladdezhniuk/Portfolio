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
