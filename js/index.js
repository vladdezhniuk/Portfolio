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
};





let canvas = document.querySelector('.canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
c = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.height = header.innerHeight;
    canvas.width = header.innerWidth;

    initCanvas();
})

var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.clientX;
        mouse.y = event.pageY / 1.2;
        drawCircles();
    }
)

function Circle(x, y, radius, vx, vy, rgb, opacity, birth, life){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.minRadius = radius;
    this.vx = vx;
    this.vy = vy;
    this.birth = birth;
    this.life = life;
    this.opacity = opacity;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.fillStyle = 'rgba(' + rgb +','+ this.opacity +')';
        c.fill();
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.vx = -this.vx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.vy = -this.vy;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.opacity = 1- (((frame - this.birth) * 1) / this.life);

        if (frame > this.birth + this.life){
            for (let i = 0; i < circleArray.length; i++){
                if (this.birth == circleArray[i].birth && this.life == circleArray[i].life){
                    circleArray.splice(i, 1);
                    break;
                }
            }
        } else{
            this.draw();
        }
    }

}

var circleArray = [];

function initCanvas() {
    circleArray = [];
}

var colorArray = [
    '255,11,86',
    '255,11,86',
    '48,144,134'
]

function drawCircles(){
    for (let i = 0; i < 5; i++) {
        let radius = Math.floor(Math.random() * 7);
        let vx = (Math.random() * 2) - 1;
        let vy = (Math.random() * 2) - 1;
        let spawnFrame = frame;
        let rgb = colorArray[Math.floor(Math.random() * colorArray.length)];
        let life = 100;
        circleArray.push(new Circle(mouse.x, mouse.y, radius, vx, vy, rgb, 1, spawnFrame, life));

    }
}

var frame = 0;
function animate() {
    requestAnimationFrame(animate);
    frame += 2;
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++ ){
        circleArray[i].update();
    }
}

initCanvas();
animate();








let translate = document.querySelector('.about-icons__animation');
let translateReverse = document.querySelector('.about-icons__animation-reversed');
let translateItem = document.querySelectorAll('.animation__non-reverse i');
let translateReverseItem = document.querySelectorAll('.animation__reverse i')

document.addEventListener('mousemove', (event) => {
  let mouseY = event.clientY;
  let mouseX = event.clientX;

  translate.style.top =  (mouseY / 40) + 'px';
  translate.style.left =  (mouseX / 40) + 'px';
  translateReverse.style.top = (-mouseY / 40) + 'px';
  translateReverse.style.left = (-mouseX / 40) + 'px';

})