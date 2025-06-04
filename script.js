const body = document.querySelector('.content');
const loader = document.getElementById('loader')
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

var isActive = false

gsap.RegisterPlugin

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
})


window.addEventListener("load",()=>{
    setTimeout(()=>{
        loader.style.display='none'
        body.style.display = 'block'
        // breakTheText()
    },0)
})

hamburger.addEventListener('click', ()=>{
    isActive = !isActive
    hamburger.classList.toggle('active')  
    header.classList.toggle('expand');
  })

  var textWrapper = document.querySelector('.caption');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });





