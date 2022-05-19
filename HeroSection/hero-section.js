// TYPING
const texts = ['creativity'];
let count = 0; 
let index = 0;
let currentText = '';
let letter = '';


(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent =letter;
    if(letter.length === currentText.length){
        count++;
    }
setTimeout(type, 400);

}());



// NAVBAR
const tl = new gsap.timeline();
tl.to(".navbar", {
  clipPath: "circle(150% at 45px 45px)",
}).to(
  ".item",
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    stagger: 0.25,
  },
  "-=0.25"
);

tl.pause();

const navIcon = document.querySelector(".test");
navIcon.addEventListener("click", (e) => {
  e.preventDefault();
  if (tl.reversed() || tl.paused()) tl.play();
  else tl.reverse();
});
